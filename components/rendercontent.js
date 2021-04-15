import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ReuseComponent from "./ReuseComponent";
const RenderContent = () => {
    const appdata = require("../Api/Data.json");

    return(
    <View style={styles.container}>
          <Text style={styles.btn}>{appdata.results[0].FruitName}</Text>
      <View style={styles.pricecontainer}>
      <Text style={styles.price}>{appdata.results[0].fruitPrice}</Text>
      <Text style={styles.discountPrice}>$8.3</Text>
      <TouchableOpacity  style={styles.pricebtn}>
        <Text style={styles.priceBtnText}>FreeShip</Text>
      </TouchableOpacity>
      </View>    
    <View style={styles.Icon}>
    <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='body-outline' color="#c0e218" size={25}/>
                  <Text style={styles.menuItemText}>Safe</Text>
                </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='checkmark-done-outline' color="#c0e218" size={25}/>
                  <Text style={styles.menuItemText}>Quick</Text>
                </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='leaf-outline' color="#c0e218" size={25}/>
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
pricebtn:{
 marginLeft:235,
 color:"#fff",
 fontWeight:"bold",
 backgroundColor:"#24a0ed",
 justifyContent:"center",
 alignItems:"center",
 height:25,
 width:95,
 borderRadius:5,
},
priceBtnText:{
  color:"#fff",
  fontWeight:"bold",  
},
pricecontainer:{
flexDirection:"row",
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
  marginVertical:3,
  marginHorizontal:5,
},
discountPrice:{
  color:"grey",
  fontSize:16,
  textDecorationLine: 'line-through',
  textDecorationStyle: 'solid',
  marginTop:7,
  fontWeight:"bold",
},
Icon:{
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  marginHorizontal:5,
 
},
menuItem:{
  marginHorizontal: 30,
  marginTop:5,
  flexDirection:"row"
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
  paddingVertical:5,
},
insidebox:{
  marginHorizontal:10,
  flex:1,
},
reuseComp:{
  flexDirection:"row",
},
bottombtn:{
  flexDirection:"row",
  backgroundColor:"#c0e218",
  justifyContent:"flex-end",
  alignItems:"center",
  borderRadius:5,
  height:40,
  padding:10,
  marginTop:5,
  shadowColor: '#000',
  shadowOpacity: 1,
  elevation: 6,
  shadowRadius: 15 ,
  shadowOffset : { width: 1, height: 13},
},
});