import React from 'react';
import {StyleSheet, ImageBackground, View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

const ApiCall = () => {

    const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://itunes.apple.com/search?term=Michael+jackson')
      .then(function (response) {
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
    //   .finally(function () {
    //     alert('Finally called');
    //   });
  };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://itunes.apple.com/search?term=Michael',
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      alert(error.message);
    }
  };
  const image = { uri: "https://i.pinimg.com/736x/dd/b3/c7/ddb3c721f6df2017b4bce462d756e652.jpg" };
    return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Text style={styles.Text}>
                API Call 
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text style={styles.btnTxt}>Artists</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text style={styles.btnTxt}>Favourates</Text>
      </TouchableOpacity>
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
    padding: 120,
    justifyContent: "center"
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