import React from 'react';
import {FlatList,Linking, View,StyleSheet} from 'react-native';
import {API_SEARCHED_MEAL_URL} from "@env";
import { SafeAreaView } from 'react-native-safe-area-context';
import MealDetailsCard from '../Components/MealDetailsCard';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading'
import Error from '../Components/Error'
function MealDetails(props){

     
    const mealName = props.route.params.meal;
   
      const {data,error,loading} = useFetch(API_SEARCHED_MEAL_URL+mealName);
    
    function toYoutube(url){
        Linking.openURL(url);
     } 
     if(loading){
      return <Loading/>
    }
    if(error){
      return <Error/>
    }
      const renderItem= ({item}) => (
    
       <MealDetailsCard item ={item} toYoutube ={() =>toYoutube(item.strYoutube) }/>

      )
    return(

        <SafeAreaView >
        <View style={styles.innerContainer}>
        <FlatList
        data={data.meals}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
      />
        </View>
    </SafeAreaView>
    )
}



const styles =StyleSheet.create({
    
    innerContainer: {
        backgroundColor:'#F2F2F2',
    
    },

    })
    export default MealDetails;