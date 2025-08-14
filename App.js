import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import categories from './src/data/categories.json'
import Header from './src/components/Header'


export default function App() {

  const renderCategoryItem = ({item})=>(
    <Text>{item.title}</Text>
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
