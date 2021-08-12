import React,{useState,useEffect} from 'react';
import {FlatList, View,Text,StyleSheet } from 'react-native';
import axios from 'axios';
import {API_URL} from "@env";
import CategoriesCard from '../Components/CategoryCard'
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading'
import Error from '../Components/Error'

function Categories(props) {

  const {error,loading,data} = useFetch(API_URL+'/categories.php');
  console.log(data.category)
        function toNavigate(nereye){
            console.log(nereye)
                props.navigation.navigate('Meals',{category:nereye});
            
        }

        if(loading){
          return <Loading/>
        }
        
        if(error){
          return <Error/>
        }
    
   
      const renderItem = ({ item }) => (
        <CategoriesCard mal={item} toNavigate={() => toNavigate(item.strCategory)} />
      );

   return( 

   <View style={styles.Container}>

        <View style={styles.innerContainer} >
        <Text style = {styles.Header}>CATEGORIES</Text>
         
        </View>
        <FlatList
        data={data.categories}
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
      />


    </View>
    
    )
    
}

const styles =StyleSheet.create({
Container: {
    flex:1,
    backgroundColor:'#FFA500',


},
innerContainer: {
    height:50,
    backgroundColor:'white',
    justifyContent: 'center',

},
Header:{
    
    color:'#FFA500',
    fontSize:25,
    textAlign: 'center',
},

})
export default Categories;