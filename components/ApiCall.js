import React,{useState, useEffect} from 'react';
import {StyleSheet, ImageBackground,FlatList, View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import Record from "./reacord.js";
const ApiCall = ({navigation}) => {
  const URL ='https://itunes.apple.com/search?term=Michael+jackson'

    const [Track, setTrack] = useState([]);

    useEffect(() => {
      getTrackList();
    }, []);
  
    const getTrackList = async () => {
      try {
        const response = await axios.get(URL);
  
        return setTrack(response.data);
      } catch (error) {
        console.warn(error);
      }
    };


  const image = { uri: "https://i.pinimg.com/736x/dd/b3/c7/ddb3c721f6df2017b4bce462d756e652.jpg" };
    return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
  
      <FlatList
        data={Track.results}
        keyExtractor={(index) => index.key}
        renderItem={({ item }) => {
          return <Record item={item} navigation={navigation} />;
        }}
      />
    </ImageBackground>
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    flex: 1.5,
    backgroundColor: '#693c72'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // resizeMode: "cover",
    justifyContent: "center",
    position: "relative"
   
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#93329e',
    padding: 10,
    width: '100%',
    marginTop: 16,
    borderRadius: 50,
  },
  btnTxt: {
    fontStyle:'italic', 
    fontWeight:'bold',
    fontSize: 30,
    padding: 0,
    color:'#fed049'
  },
  Text: {
    fontSize: 100,
    textAlign: 'center',
    color:'#fff',
    fontStyle:'italic', 
    fontWeight:'bold',
    margin:0, 
    padding:0
    },
});

export default ApiCall;