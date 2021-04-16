import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, Image, ImageBackground} from "react-native";
import { Ionicons } from '@expo/vector-icons';
function ReuseComponent(){
    const appdata = require("../Api/Data.json");
return(
    <TouchableOpacity style={styles.container}>
        <ImageBackground
        style={styles.img}
        source={{uri:appdata.results[1].FruitImg1}} >
         <Ionicons name='heart' color="#fff" size={30} style={styles.icon}/>
        </ImageBackground>
        <View style={{alignItems:"center"}}>
        <Text style={{fontSize:15, fontWeight:"bold"}}>{appdata.results[1].FruitName}</Text>
        </View>
    </TouchableOpacity>
);
}
export default ReuseComponent;
const styles=StyleSheet.create({
    container:{
        flex:1,
        borderRadius:10,
        justifyContent:"center"
    },
    img:{
        justifyContent:"flex-start",
        alignItems:"flex-end",
        height:200,
        width:190,
        margin:7,
    },
    icon:{
        opacity:0.5,
        padding:5,
    }
})