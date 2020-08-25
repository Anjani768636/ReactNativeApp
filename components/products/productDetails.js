import React from 'react';
import { styles } from "../products/style";
import {View,Text,Image} from 'react-native'
export default function ProductDetailsComponent(item){
    const data=item.route.params.item
    // const deleteFunction = (event) => {
    //     event.preventDefault();
    //     axios
    //       .delete("http://localhost:3000/allproducts/" + productdetails.id)
    //       .then((res) => {
    //         console.log(res);
    //         setshow(true);
    
    //         props.navigation('Products')
    //       });
    //   };
    return(
        <View style={styles.containerStyle}>
            
            <Text style={styles.nameStyle}>Product Details</Text>
            <Image source={data.image} style={{width: "50%",height: 100,margin: 7,borderRadius: 7,}}></Image>
            <Text style={styles.nameStyle}>{data.name}</Text>
            <Text style={styles.productStyle}>Price:{data.price}</Text>
            <Text style={styles.productStyle}>Quantity:{data.quantity}</Text>
            <Text style={styles.productStyle}>Category:{data.category}</Text>
         
        
        </View>
    )
}