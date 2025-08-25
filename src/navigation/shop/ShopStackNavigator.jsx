import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreens, ProductScreens, ProductsScreens} from "../../screens";
import { colors } from "../../global/colors";
import { useSelector } from "react-redux";
import Header from "../../components/Header";


const Stack = createNativeStackNavigator ()

const ShopStackNavigator = () =>{

        const categorySelected = useSelector(state => state.shopReducer.categorySelected)
    return(
       
            <Stack.Navigator
            initialRouteName="Categorias"
            screenOptions={{
                header:({route})=>( <Header title="FASHION" subtitle={route.name==="Categorias"?"Home":categorySelected}/>)
            }

            }
            >
                    <Stack.Screen name="Categorias" component={CategoriesScreens}/>
                    <Stack.Screen name="Productos" component={ProductsScreens}/>
                    <Stack.Screen name="Producto" component={ProductScreens}/>
            </Stack.Navigator>
        
    )}




export default ShopStackNavigator