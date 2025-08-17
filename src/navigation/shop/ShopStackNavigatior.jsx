import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryScreens, ProductScreens, ProductsScreens} from "../../screens"

const Stack = createNativeStackNavigator ()

const ShopStackNavigator = () =>{
    return(
        <Stack.Navigator
           initialRouteName="Categorias">
                <Stack.Screen name="Categorias" component={CategoryScreens}/>
                <Stack.Screen name="Products" component={ProductsScreens}/>
                <Stack.Screen name="Product" component={ProductScreens}/>
        </Stack.Navigator>
    )}




export default ShopStackNavigator