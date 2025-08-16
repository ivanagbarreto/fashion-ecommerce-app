import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import Header from './src/components/Header'

import ProductsScreens from './src/screens/ProductsScreens';
import { useState } from 'react';
import CategoryScreens from './src/screens/CategoryScreens';


export default function App() {
  const [categorySelected, setCategorySelected] = useState ("")
  
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
