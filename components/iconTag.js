import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
function IconTag(props){
    return(
        <TouchableOpacity onPress={() => {}}>
        <View style={styles.menuItem}>
          <Ionicons name={props.iconname} color="#c0e218" size={25}/>
          <Text style={styles.menuItemText}>{props.text}</Text>
        </View>
        </TouchableOpacity>
    );
   
}
export default IconTag;
const styles=StyleSheet.create({
    menuItem:{
        marginHorizontal: 30,
        marginTop:5,
        flexDirection:"row"
      },
      menuItemText:{
        fontWeight:"bold",
        fontSize:20,
      }
})