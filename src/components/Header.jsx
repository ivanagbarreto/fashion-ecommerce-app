import { StyleSheet, Text, View } from 'react-native'


const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    container:{
        height:200,
    }
})