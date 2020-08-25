import React, { useState } from "react";
import { styles } from '../Login/style'
import { View, Text, TouchableOpacity,TextInput } from "react-native";
import Axios from "axios";
// import { ImageBackground } from 'react-native'

export default function LoginComponent({navigation}){
    
    const[email,setEmail]=useState('');
    const[pwd,setPwd]=useState('')
    let emailChange=(value)=>{
    
        setEmail(value)
    }
    let pwdChange=(value)=>{
        setPwd(value)
    }
    const submit=()=>{
        console.log(email)
       if(email!==''&&pwd!==''){
        Axios.get('http://localhost:3000/login?id='+email).then(response=>{
            console.log(response)
                   if(pwd===response.data[0].password){
                    navigation.navigate('Products')
                    console.log("Got")
                }
            
           
            
        })
       }
      
    }   
    return(
        
    
        <View style={styles.containerStyle}>
   
            <Text style={styles.textStyle}>Product Inventory System</Text>
            <Text style={styles.textStyle}>Login</Text>
           
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email Address" 
            placeholderTextColor="black"
            onChangeText={emailChange}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
          secureTextEntry
            style={styles.inputText}
            placeholder="password" 
            placeholderTextColor="black"
            onChangeText={pwdChange}
            />
        </View>
            <TouchableOpacity style={styles.lgnbutton}
                              onPress={()=>submit()}      >
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=>{navigation.navigate('Signup')}}      >
                <Text style={styles.button}>SignUp</Text>
            </TouchableOpacity> */}
        </View>
    )
    }