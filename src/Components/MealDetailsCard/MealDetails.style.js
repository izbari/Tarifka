import { StyleSheet,Dimensions } from 'react-native';


const styles =StyleSheet.create({
    
 
    Header:{
        
        color:'#FFA500',
        fontSize:25,
        textAlign: 'center',
    },

    categoriesImage:{
        marginTop:5,
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        resizeMode:'cover',
      
    
    },
    mealTitle:{
        marginTop:5,
        marginLeft:10,
        color:'#A52A2A',
        fontSize:26,
        fontWeight:'bold',
       
    },
    mealFrom:{
        color:'#A52A2A',
        fontSize:22,
        marginLeft:10,
        fontWeight:'bold',
        marginBottom:5,
       
    },
    mealDescription:{
        marginLeft:10,
        fontSize:18,
       
    },
    buttonText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
      textAlign:'center',
    },
    youtube:{
        backgroundColor:"#FF0000",
        height:50,
        width: Dimensions.get('window').width -20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        margin:20,
        borderRadius:10,
    }
    
    })
    export default styles;