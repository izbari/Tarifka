import React,{useState,useEffect} from 'react';
import {
 SafeAreaView,

 FlatList,
 View,
} from 'react-native';
import axios from 'axios';
import {API_FILTERED_MEALS_URL} from "@env";
import MealCard from '../Components/MealCard';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading'
import Error from '../Components/Error'
function Meals(props){
   const category = props.route.params.category;
 const {loading,data,error} = useFetch(API_FILTERED_MEALS_URL+category);
 

 
   
    
    
     if(loading){
      return <Loading/>
    }
    
    if(error){
      return <Error/>
    }

function toNavigate(nereye){

        props.navigation.navigate('MealDetails',{meal:nereye});

}
const renderItem = ({ item }) => (
    <MealCard meal={item} toNavigate={()=> toNavigate(item.strMeal)}/>
  );
 
    return(
<SafeAreaView>
 <View>
     <FlatList
        data={data.meals}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
      />
 </View>
</SafeAreaView>
    
        
        )
}

    
    
export default Meals;