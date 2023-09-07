import React, { useEffect, useState, useCallback } from 'react';
import { Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { Login } from './src/screens/Login';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { theme } from './src/global/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare(){
      try{
        //Carrega as fontes
        await Font.loadAsync({ Montserrat_500Medium, Montserrat_400Regular,Montserrat_700Bold, Montserrat_600SemiBold })
      }
      catch(error){
        console.log(error)
      }
      finally{
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if(appIsReady){
      //Layout executado
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if(!appIsReady){
    return null
  }
  
  return (
    <>
      <StatusBar
        backgroundColor={theme.color.cyanGreen}
        translucent={false}
        style='light'
      />
      <Login
        layout={onLayoutRootView}
      />
    </>
  );
}