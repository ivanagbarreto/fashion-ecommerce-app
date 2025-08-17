import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import categories from '../../data/categories.json'
import FlatCard from '../../components/FlatCard';

const CategoriesScreens = ({navigation}) => {

const renderCategoryItem = ({item})=>{
    return(
        <Pressable onPress={()=>navigation.navigate("Productos",{category: item.title})}>
          <FlatCard>
            <Image width= {30} height={30} source={{uri:item.image}} resizeMode='contain'/> 
            <Text style={styles.title}> {item.title}</Text>
          </FlatCard>
        </Pressable>
  )
}

  return (
    <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item=> item.id}
          />
  )
}

export default CategoriesScreens

const styles = StyleSheet.create({  
    container: {
            flex: 1,
            backgroundColor: '#fff',
    
  },
  title:{
    fontFamily:"RobotoCondensed-Regular"
  }

})