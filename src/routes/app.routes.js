import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Cadastre } from '../screens/Cadastre';
import { Login } from '../screens/Login';
import { theme } from '../global/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginStacks(){
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen 
                name='Login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name='Cadastre'
                component={Cadastre}
                options={{
                    title:'',
                    headerStyle:{
                        backgroundColor: theme.color.cyanGreen
                    },
                    headerTintColor: theme.color.white
                }}
            />
        </Stack.Navigator>
    )
}

export function Routes(){
    return (
        <NavigationContainer>
            <LoginStacks />
        </NavigationContainer>
    );
}