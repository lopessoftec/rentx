import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { LoadAnimation } from '../components/LoadAnimation';

export function Routes() {
  const { user, loading } = useAuth();

  return (
    loading ? <LoadAnimation /> :
      // se tem user.id ele vai para AppTabRoutes/>, se não está logado, ele vai para AuthRoutes
      <NavigationContainer>
        {user.id ? < AppTabRoutes /> : <AuthRoutes />}
      </NavigationContainer>
  );
}