import React from 'react';
import { Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { Routes } from './src/routes/app.routes';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/global/theme';
import AppLoading  from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium, Montserrat_400Regular,Montserrat_700Bold, Montserrat_600SemiBold 

  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        backgroundColor={theme.color.cyanGreen}
        translucent={false}
        style='light'
      />
      <Routes />
    </>
  );
}