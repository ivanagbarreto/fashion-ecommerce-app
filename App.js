import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import categories from './src/data/categories.json'

export default function App() {

  const renderCategoryItem = ({item})=>(
    <Text>{item.title}</Text>
  )
  return (
    <View style={styles.container}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
