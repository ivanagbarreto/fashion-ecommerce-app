import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import categories from './src/data/categories.json'
import Header from './src/components/Header'
import FlatCard from './src/components/FlatCard';

export default function App() {

  const renderCategoryItem = ({item})=>(
    <FlatCard>
      <Image width= {50} height={50} source={{uri:item.image}} resizeMode='contain'/> 
      <Text> {item.title}</Text>
   
    </FlatCard>
  )
  return (
    <View style={styles.container}>
      <Header title="Fashion"/>
      <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={item=> item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
