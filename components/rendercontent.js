import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ReuseComponent from "./ReuseComponent";
const RenderContent = () => {
    const appdata = require("../Api/Data.json");

    return(
    <View style={styles.container}>
          <Text style={styles.btn}>{appdata.results[0].FruitName}</Text>
          <Text style={styles.price}>{appdata.results[0].fruitPrice}</Text>
    <View style={styles.Icon}>
    <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='body-outline' color="#c0e218" size={30}/>
                  <Text style={styles.menuItemText}>Safe</Text>
                </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='checkmark-done-outline' color="#c0e218" size={30}/>
                  <Text style={styles.menuItemText}>Quick</Text>
                </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='leaf-outline' color="#c0e218" size={30}/>
                  <Text style={styles.menuItemText}>Fresh</Text>
                </View>
    </TouchableOpacity>
    </View>      
      <Text style={styles.txt}>{appdata.results[0].about}</Text>
      <View style={styles.Viewbtn}>
        <Ionicons name='heart' color="red" size={30}/>
        <View style={styles.insidebox}>
        <Button 
            title="Add to Cart" 
            color="#c0e218"
            style={styles.cartbtn }
       />
        </View>
     
      </View>
      <Text style={styles.btn}>Similar Products</Text>
      <View style={styles.reuseComp}>
        <ReuseComponent />
        <ReuseComponent />
      </View>
    </View>
  );
 }
 export default RenderContent;

const styles=StyleSheet.create({
container:{
        backgroundColor: 'white',
         padding: 8,
        height: 450,
},
btn:{
    fontStyle:"normal",
    fontSize: 20,
    fontWeight:"bold",
},
price:{
  color:"green",
  fontSize:20,
  fontWeight:"bold",
  marginVertical:10,
},
Icon:{
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  borderTopColor:"#d8e3e7",
  borderTopWidth:1,
},
menuItem:{
  marginHorizontal: 40,
  marginTop:15,
},
menuItemText:{
  fontWeight:"bold",
  fontSize:20,
},
txt:{
  color:"grey",
  marginHorizontal:6,
  justifyContent:"center",
  alignItems:"center",
},
Viewbtn:{
  flexDirection:"row",
  justifyContent:"center",
},
insidebox:{
  marginHorizontal:10,
  flex:1,
},
reuseComp:{
  flexDirection:"row",
}
});