
import React from 'react';
import {TouchableOpacity, View,Image,Text} from 'react-native';
import styles from './Category.style';


const CategoriesCard = (props) => {
    return(
     <TouchableOpacity style={styles.categoriesCard} onPress={props.toNavigate}>

     <View style={styles.categoriesCardBody}>
         <Image style={styles.categoriesImage} 
         source ={{uri : props.mal.strCategoryThumb} }

         />
         <Text style ={styles.categoriesText} >{props.mal.strCategory}</Text>

     </View>
 
     </TouchableOpacity>
    )
 }
 export default CategoriesCard;