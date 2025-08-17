import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreens } from "../../screens";
import { colors } from "../../global/colors";



const Stack = createNativeStackNavigator ()

const CartStackNavigator = () =>{
    return(
       
            <Stack.Navigator
            initialRouteName="Carrito"
            screenOptions={{
                headerStyle:{
                        backgroundColor:colors.lightPink
                },
                headerTitleStyle:{
                        fontFamily:"PressStart2P-Regular",
                        textTransform: 'uppercase',
                        fontSize: 12
                }
            }

            }
            >
                    <Stack.Screen name="Carrito" component={CartScreens }/>
         
            </Stack.Navigator>
        
    )}




export default CartStackNavigator