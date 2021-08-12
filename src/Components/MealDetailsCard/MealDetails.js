import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native';
import styles from './MealDetails.style';

 const MealDetailsCard = (props) => {
        return(
            <View style={styles.innerContainer}> 
            <Image style={styles.categoriesImage} source={{uri:props.item.strMealThumb}}/>
           <Text style={styles.mealTitle}>{props.item.strMeal}</Text>
            <Text style={styles.mealFrom}>{props.item.strArea}</Text>
            <View style={{borderBottomColor: '#BDBDBD', borderBottomWidth: 1,}} />
            <Text style={styles.mealDescription}>{props.item.strInstructions}</Text>
            <TouchableOpacity  style={styles.youtube} onPress ={props.toYoutube}>
                <Text style = {styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
    
        </View>
        
        )
    
     }
     export default MealDetailsCard;