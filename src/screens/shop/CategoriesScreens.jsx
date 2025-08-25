import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
//import categories from "../../data/categories.json";
import FlatCard from "../../components/FlatCard";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../../global/colors";
import { useSelector, useDispatch } from "react-redux";
import { setCategorySelected } from "../../store/slices/ShopSlice";


const CategoriesScreens = ({ navigation }) => {
    const categories = useSelector(state => state.shopReducer.categories)
    const dispatch = useDispatch ()
    const handleSelectedCategory = (category) =>{
        dispatch(setCategorySelected(category))
        navigation.navigate("Productos")
    }

  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable
        onPress={() =>handleSelectedCategory(item.title)}
      >
        <FlatCard style={styles.container}>
          
           
              <Image
                width={30}
                height={30}
                source={{ uri: item.image }}
                resizeMode="contain"
                style={styles.leftContent}
              />
              <Text style={styles.title}> {item.title}</Text>
            
       
              <Icon style={styles.icon} name={item.icon} size={15} color={colors.darkGray} />
           
         
        </FlatCard>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoriesScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection:"row",
   
  },

  title: {
    fontFamily: "RobotoCondensed-Regular",
  },
  icon: {
     marginLeft: "auto",
  },
});
