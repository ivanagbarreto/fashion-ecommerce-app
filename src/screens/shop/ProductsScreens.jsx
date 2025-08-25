import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import products from '../../data/products.json'
import { useEffect, useState } from 'react';
import RobotoCondensedText from '../../components/RobotoCondensedFont';
import Search from '../../components/Search';
import { useSelector } from 'react-redux';


const ProductsScreens = ({navigation, route}) => {
    const [productsFiltered, setProductsFiltered] = useState ([])
    const [keyword, setKeyword]= useState("")
   // console.log("Keyword: ", keyword)

   //const {category} = route.params
  const category = useSelector(state => state.shopReducer.categorySelected)
   const renderProductsItem =({item})=>(
        
        <View>
          <Pressable onPress={() => navigation.navigate("Producto")}>
            <RobotoCondensedText>{item.title}</RobotoCondensedText>
           </Pressable> 
        </View>
        )

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
         renderItem={renderProductsItem }
         />
    </View>
  )
}

export default ProductsScreens

const styles = StyleSheet.create({})