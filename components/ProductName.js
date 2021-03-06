import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import RenderContent from "./rendercontent";
import { SliderBox } from "react-native-image-slider-box";
import Bottombutton from "./BottomButton";
function ProductName({navigation}){
    const appdata = require("../Api/Data.json");
    const images = [
       appdata.results[0].FruitImg1,
       appdata.results[2].FruitImg4,
       appdata.results[0].FruitImg3,
    ];
     return (
      
    <View style={styles.box}>
      <View style={styles.container}>
      <SliderBox
          loopBothSides
          autoPlayWithInterval={3000}
          sliderBoxHeight={250}
          images={images} 
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 15,
            marginBottom:500,
          }}
          />
      </View>
        <BottomSheet 
        snapPoints={[580,300,0]}
        borderRadius={10}
        renderContent={RenderContent}
         />
         {/* <BottomSheet style={styles.smallSheet}
        snapPoints={[280,100,0]}
        borderRadius={10}
        renderContent={Bottombutton}
         /> */}
    </View>
     
    );
      
  };

 
export default ProductName;
const styles=StyleSheet.create({
    titleStyle:{
      marginTop:100,
      fontSize: 40,
    },
    box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    img:{
      height:300,
      width: "100%",

    }
})