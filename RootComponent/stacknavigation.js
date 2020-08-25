import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import {NavigationContainer} from '@react-navigation/native'
import SignIn from '../components/Login/signIn'
import ProductComponent from '../components/products/allproductslist';
// import SignInComponent from '../component/signin';

import AddProductComponent from '../components/products/addProduct';
import ProductDetailsComponent from '../components/products/productDetails';

const Stack=createStackNavigator()

function StackNavigation(){
    return(
        <NavigationContainer>
         <Stack.Navigator initialRouteName='Inventory' 
                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    backgroundColor:'white',
                                    height:80,
                                    
                                },
                                headerTitleStyle:{
                                    fontWeight:'bold',
                                    fontFamily:'my-custom-font'
                                }
                                }} 
                                headerMode='float'>
             <Stack.Screen name="Inventory" component={SignIn}></Stack.Screen>
             <Stack.Screen name="Products" component={ProductComponent}></Stack.Screen>
             <Stack.Screen name="ProductDetails" component={ProductDetailsComponent}></Stack.Screen>
             <Stack.Screen name="AddProduct" component={AddProductComponent}></Stack.Screen> 
            {/* <Stack.Screen name="Signup" component={SignInComponent}></Stack.Screen>
            
            
             <Stack.Screen name="ProductDetails" component={ProductDetailsComponent}></Stack.Screen> */}
        </Stack.Navigator>
    </NavigationContainer>
)

    
}
export default StackNavigation