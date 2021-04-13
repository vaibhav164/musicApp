import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground, Text,FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Render from "./render";

function ProductName({navigation}){

    const [Track, setTrack] = useState([]);

    useEffect(() => {
      getTrackList();
    }, []);
  
    const getTrackList = async () => {
      try {
        const response = require(`../Api/Data`);
  
        return setTrack(response.data);
      } catch (error) {
        console.warn(error);
      }
    };

  const dinamic =()=>{
    return(sheetRef.current.snapTo(0));
  }

  const renderContent = (item) => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
    <FlatList
        data={Track.results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(index) => index.key}
        renderItem={({ item }) => {
          return <Render item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
  

  const sheetRef = React.useRef(null);
    return(
        <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1, width: "100%", height: "100%"}}
          source={{
            uri:
              'https://www.masitrading.com/wp-content/uploads/2019/12/cherries.jpg',
          }}
        >
            <TouchableOpacity onPress={dinamic} >
              <Text style={styles.titleStyle}>Example of Vaibhav Native Swipe Button</Text>
            </TouchableOpacity>
            <BottomSheet
              ref={sheetRef}
              snapPoints={[450, 400, 0]}
              borderRadius={10}
              renderContent={renderContent}
            />          

        </ImageBackground>
       
      </View>
         );
    
}
export default ProductName;
const styles=StyleSheet.create({
    titleStyle:{
      marginTop:100,
        fontSize: 40,
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
})