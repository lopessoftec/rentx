import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();
  return (
    // se tem user.id ele vai para AppTabRoutes/>, se não está logado, ele vai para AuthRoutes
    <NavigationContainer>
        { user.id ? < AppTabRoutes/> : <AuthRoutes /> }
    </NavigationContainer>
  );
}