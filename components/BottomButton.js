import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
function Bottombutton(){
    return(
      <View style={{marginHorizontal:10}}>
        
      </View>
    );
  }
  export default Bottombutton;
const styles=StyleSheet.create({
    bottombtn:{
        flexDirection:"row",
        backgroundColor:"#c0e218",
        justifyContent:"flex-end",
        alignItems:"center",
        borderRadius:5,
        height:40,
        padding:10,
        marginTop:5,

      },
      checkouttxt:{
        fontWeight:"bold",
        fontSize:15,
        color:"#fff",
        marginRight:8,
        justifyContent:"flex-start",
      },
      rupee:{

      }
})