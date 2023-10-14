import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../global/theme';

import { Calculations } from '../screens/Calculations';
import { Cadastre } from '../screens/Cadastre';
import { Account } from '../screens/Account';
import { Login } from '../screens/Login';
import { Seeds } from '../screens/Seeds';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginStacks({ setUserLoggedIn }){
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen 
                name='Login'
                component={() => <Login setUserLoggedIn={setUserLoggedIn} />}
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
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

function HomeStacks(){
    return(
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen 
                name='home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

function TabStacks(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.color.cyanGreen,
                tabBarInactiveTintColor: theme.color.gray,
                tabBarStyle: {
                    backgroundColor: theme.color.white,
                    padding: 5
                },
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: {
                    fontFamily: theme.font.bold,
                    fontSize: 12
                }
            }}
        >
            <Tab.Screen 
                name='Home'
                component={HomeStacks}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons 
                            name='leaf-outline' size={size} color={color} 
                        />
                    ),
                    title: 'Plantio'
                }}
            />
            <Tab.Screen 
                name='Seeds'
                component={Seeds}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons 
                            name='nutrition-outline' size={size} color={color} 
                        />
                    ),
                    title: 'Sementes'
                }}
            />
            <Tab.Screen 
                name='Calculations'
                component={Calculations}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons 
                            name='grid-outline' size={size} color={color} 
                        />
                    ),
                    title: 'Cálculos'
                }}
            />
            <Tab.Screen 
                name='Account'
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons 
                            name='person-outline' size={size} color={color} 
                        />
                    ),
                    title: 'Conta'
                }}
            />
        </Tab.Navigator>
    )
}

export function Routes(){
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            {
                userLoggedIn ? (
                    <TabStacks />
                ) : (
                    <LoginStacks setUserLoggedIn={setUserLoggedIn} />
                )
            }
        </NavigationContainer>
    );
}