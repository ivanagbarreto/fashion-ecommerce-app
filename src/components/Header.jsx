import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../global/colors'



const Header = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style= {styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    container:{
        backgroundColor: colors.lightPink, 
        height: 150,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:24,
        color: colors.white
    },
    subtitle:{
        fontSize:14,
        color: colors.white
    }
})