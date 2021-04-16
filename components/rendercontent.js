import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ReuseComponent from "./ReuseComponent";
import IconTag from "./iconTag";
import ViewMoreText from 'react-native-view-more-text';
function renderViewMore(onPress){
  return(
    <Text onPress={onPress} style={{color:"#c0e218"}}>View more</Text>
  )
}
function renderViewLess(onPress){
  return(
    <Text onPress={onPress}>View less</Text>
  )
}
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
        <IconTag iconname={"body-outline"} text={"Safe"} />
        <IconTag iconname={"checkmark-done-outline"} text={"Quick"} />
        <IconTag iconname={"leaf-outline"} text={"Fresh"} />
    </View>  

    <ViewMoreText
          numberOfLines={2}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{textAlign: 'center'}}
        >
           <Text style={styles.txt}>{appdata.results[0].about}</Text>
        </ViewMoreText>

     
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
      <TouchableOpacity style={styles.bottombtn}  onPress={() => {}}>
              <Text style={styles.buttontxt}>357</Text> 
              <Text style={styles.buttontxt}>Checkout  {<Ionicons name="arrow-forward-outline" color="#fff" size={15}/>}</Text>        
      </TouchableOpacity>
    </View>
  );
 }
 export default RenderContent;

const styles=StyleSheet.create({
container:{
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 450,
},
bottombtn:{
  backgroundColor:"#c0e218",
  flexDirection:"row",
  justifyContent:"space-around",
  alignItems:"center",
  marginTop:5,
  paddingHorizontal:0,
  borderRadius:10,
  shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
},
buttontxt:{
  fontWeight:"bold",
  fontSize:15,
  color:"#fff",
  marginRight:8,
  paddingVertical:10,
  paddingHorizontal:0,
  marginHorizontal:0,
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
});