import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../../data/products.json'
import { useEffect, useState } from 'react';
import RobotoCondensedText from '../../components/RobotoCondensedFont';
import Search from '../../components/Search';

const ProductsScreens = ({route}) => {
    const [productsFiltered, setProductsFiltered] = useState ([])
    const [keyword, setKeyword]= useState("")
   // console.log("Keyword: ", keyword)

   const {category} = route.params

  useEffect(()=>{
    const productsFilteredByCategory = products.filter(product => product.category.toLowerCase()===category.toLowerCase())
    
    if(keyword){
      const productsFilteredByKeyword = productsFilteredByCategory.filter(product=> product.title.toLowerCase() .includes(keyword.toLowerCase()))
      setProductsFiltered(productsFilteredByKeyword)
    }else{
      setProductsFiltered(productsFilteredByCategory)
    }
  },[category, keyword])  


  return (
    <View>
        <Search setKeyword={setKeyword}/>
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