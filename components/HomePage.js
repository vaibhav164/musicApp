import React, { useState, useEffect }  from 'react';
import { View,
         Text, 
         Button ,
         StyleSheet,
         TextInput,
         TouchableOpacity,
         ImageBackground
        } from "react-native";
import { Camera } from 'expo-camera';
import Snap from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductName from "./ProductName";
const Stack = createStackNavigator();
function setEmail(x){
  const Mail=x;
}
function setPassword(y){
  const Code=y;
}

 function Navigation({navigation})  {

const image = { uri: "https://i.pinimg.com/736x/dd/b3/c7/ddb3c721f6df2017b4bce462d756e652.jpg" }
  

    return(          
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>        
        <View style={styles.loginBox}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Login."
              placeholderTextColor="#000"
              onChangeText={(email) => setEmail(email)}
                />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#000"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
                />
                
          </View>
          <Button 
            title="Login"
            color="#000"
            onPress={() => navigation.navigate('btn')}
          />

          </View>
        </ImageBackground>
          
      </View>
    );

}
export default function HomePage({ navigation }) {
  return (
         <Stack.Navigator>
    <Stack.Screen
    name="New"
    options={{
      title: '',
    }}
    component={Navigation}
  />
  <Stack.Screen name="btn" title=""  component={ProductName}/>
  </Stack.Navigator>
   
  );
}
const styles = StyleSheet.create({
    inputView: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor:"#000",
      borderRadius: 30,
      width: "100%",
      height: 45,
      marginBottom: 20,
      marginTop:10,
      padding: 10,
      fontSize: 20,
      alignItems: "flex-start",
    },
    TextInput:{
      fontSize:20,
    },
    loginBox: {
      // marginTop: 30,
      margin:20
    },
    container: {
      flex: 1,
      backgroundColor:"powderblue",
    },
    camera: {
      // flex: 0.5,
      width: 300,
      padding:10,
      marginBottom:10,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    btn: {
      alignSelf:'center',
      alignItems: 'center',
      width: 100,
      color:"#000"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      alignItems:"center",
      justifyContent: "center",
      position: "relative"
     
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
    