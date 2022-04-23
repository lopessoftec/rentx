import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppStackRoutes } from './app.stack.routes';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createBottomTabNavigator();

// quando o usuario está conectado
export function AppTabRoutes() {
    return (
        <Navigator>
            {/* quanod clicado na home, irei chamar uma nova pilha de navegação AppStackRoutes */}
            <Screen
                name="Home"
                component={AppStackRoutes}
            />
            <Screen
                name="Profile"
                component={Home}
            />
            <Screen
                name="MyCars"
                component={MyCars}
            />            
        </Navigator>
    )
}