import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreens, ProductScreens, ProductsScreens} from "../../screens";
import { colors } from "../../global/colors";



const Stack = createNativeStackNavigator ()

const ShopStackNavigator = () =>{
    return(
       
            <Stack.Navigator
            initialRouteName="Categorias"
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
                    <Stack.Screen name="Categorias" component={CategoriesScreens}/>
                    <Stack.Screen name="Productos" component={ProductsScreens}/>
                    <Stack.Screen name="Producto" component={ProductScreens}/>
            </Stack.Navigator>
        
    )}




export default ShopStackNavigator