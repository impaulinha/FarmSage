import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginStacks(){
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name='Login'
                component={Login}
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