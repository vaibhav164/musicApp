import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, Image, ImageBackground} from "react-native";
import { Ionicons } from '@expo/vector-icons';
function ReuseComponent(){
    const appdata = require("../Api/Data.json");
return(
    <TouchableOpacity style={styles.Img}>
        <ImageBackground
        style={styles.img}
        source={{uri:appdata.results[1].FruitImg1}} >
         <Ionicons name='heart' color="#fff" size={30} style={styles.icon}/>
        </ImageBackground>
         <Text style={{fontSize:15, fontWeight:"bold"}}>{appdata.results[1].FruitName}</Text>
    </TouchableOpacity>
);
}
export default ReuseComponent;
const styles=StyleSheet.create({
    img:{
        justifyContent:"center",
        alignItems:"center",
        height:190,
        width:190,
        margin:5,
    },
    icon:{
        marginLeft:150,
        marginBottom:150,
        opacity:0.5
    }
})