
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import Header from './src/components/Header'
import ProductsScreens from './src/screens/ProductsScreens';
import { useState, useEffect } from 'react';
import CategoryScreens from './src/screens/CategoryScreens';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [categorySelected, setCategorySelected] = useState ("vestidos")
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
    <>
    
      <StatusBar style="auto" />
      {
        categorySelected
        ?
        <>
        <Header title="Fashion" subtitle="Productos"/>
        <ProductsScreens category={categorySelected}/>
      </>
      :
      <>
      <Header title="Fashion" subtitle="Categorias"/>
      <CategoryScreens setCategorySelected={setCategorySelected}/>
      </>
      }
      
    </>
  );
}

const styles = StyleSheet.create({

});
