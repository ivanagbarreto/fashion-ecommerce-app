
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';

import { useState, useEffect } from 'react';
import TabsNavigator from './src/navigation/tabs/TabsNavigator';
import {NavigationContainer} from "@react-navigation/native";


SplashScreen.preventAutoHideAsync();

export default function App() {
  
   const [loaded, error] = useFonts({
    'RobotoCondensed-Bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    'RobotoCondensed-Italic': require('./assets/fonts/RobotoCondensed-Italic.ttf'),
    'RobotoCondensed-Light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'RobotoCondensed-Regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
     'PressStart2P-Regular': require('./assets/fonts/PressStart2P-Regular.ttf'),
  });

useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    
    <NavigationContainer>
      <StatusBar style="auto" />
      <TabsNavigator/>
    </NavigationContainer>
      
   
  );
}

const styles = StyleSheet.create({

});
