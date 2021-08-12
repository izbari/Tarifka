import { StyleSheet } from 'react-native';

const styles =StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor:'#FFA500',
    },
    
    container1: {
        flex: 1,
      },
      image1: {
          resizeMode: 'cover',
        height: 250,        
        justifyContent:  "flex-end",
        flex:1,
        margin:10,
      },
      text1: {
        color: "white",
        fontSize: 26,
        padding: 7,
        opacity:0.80,
        alignItems:'center',
        fontWeight: "bold",
        backgroundColor: "#000000c0",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
      }
    });
    
    export default styles;