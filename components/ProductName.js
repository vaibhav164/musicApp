import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground, Text,FlatList,Button, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import RenderContent from "./rendercontent";
function onclick(){
  return(
    <Text>{navigation.ItemNo}</Text>
  );
  }

function ProductName({navigation}){
  const sheetRef = React.useRef(null);
    const appdata = require("../Api/Data.json");
     return (
    <View style={styles.container}>
        <Image
        style={styles.img}
        source={{uri:appdata.results[0].FruitImg1}} />
        <BottomSheet style={styles.botmsheet}

        ref={sheetRef}
        snapPoints={[500, 400, 100]}
        borderRadius={10}
        renderContent={RenderContent}
         />
    </View>
     
    );
      
  };

 
export default ProductName;
const styles=StyleSheet.create({
    titleStyle:{
      marginTop:100,
        fontSize: 40,
    },
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
    },
    img:{
      height:300,
      width: "100%",

    },
    botmsheet:{
      height:500,
    }
})