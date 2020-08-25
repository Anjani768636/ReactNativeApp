import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'centre',
    },
    listitem:{
        marginTop:20,
        fontSize:30,
        backgroundColor:'#D0D0D0',
        padding:20,
        color:"black"
    },
    add:{
        color:"white",
        fontSize:20,
    }, 
    addbutton:{
        width:"50%",
        backgroundColor:"black",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        marginLeft:90
    },
    containerStyle:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems:'center'  
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    productStyle:{
        fontWeight:"italic",
        fontSize:20,
        color:"#b1b669",
        fontFamily:'sans-serif-medium'
  
    },
    nameStyle:{
        fontWeight:"bold",
        fontFamily:'my-custom-font',
        fontSize:20,
        color:"#fb5b5a",
        marginBottom:20
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:25,
        color:"white",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"white",
        height:50,
        marginBottom:20,
        padding:20,
        justifyContent:"center"
    },
    inputText:{
        height:50,
        color:"black"
    },
    lgnbutton:{
        width:"80%",
        backgroundColor:"grey",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
    }

})