
import React from 'react';
import {
 Text,
 TouchableOpacity,ImageBackground,
 View,
} from 'react-native';
import styles from './Meal.style'

const MealCard = (props) => {
    return(
     <TouchableOpacity style={styles.Container} onPress={props.toNavigate}>
  <View style={styles.container1}>
    <ImageBackground  imageStyle={{ borderRadius: 20}} source={{uri:props.meal.strMealThumb}}  style={styles.image1}>
      <Text style={styles.text1}>{props.meal.strMeal}</Text>
    </ImageBackground>
  </View>
     
     </TouchableOpacity>
    )
 }
export default MealCard;