import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react';
import RobotoCondensedText from '../components/RobotoCondensedFont';
import Search from '../components/Search';

const ProductsScreens = ({category}) => {
    const [productsFiltered, setProductsFiltered] = useState ([])

  useEffect(()=>{
    const productsFilteredByCategory = products.filter(product => product.category.toLowerCase()===category.toLowerCase())
    setProductsFiltered(productsFilteredByCategory)
  },[])  


  return (
    <View>
        <Search/>
        <FlatList
         data={productsFiltered}
         keyExtractor={item => item.id}
         renderItem={({item}) => <RobotoCondensedText>{item.title}</RobotoCondensedText>}
         />
    </View>
  )
}

export default ProductsScreens

const styles = StyleSheet.create({})