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

function Product() {
  return (
      <ProductName />
  );
}


// export default function Home({ navigation })  {

//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
// const image = { uri: "https://i.pinimg.com/736x/dd/b3/c7/ddb3c721f6df2017b4bce462d756e652.jpg" }
// function profileImage(){
//     return(
//       <Snap />
//     );

// }
// function setEmail(x){
//   const Mail=x;
// }
// function setPassword(y){
//   const Code=y;
// }
//     return(          
//       <View style={styles.container}>
//         <ImageBackground source={image} style={styles.image}>        
//         <View style={styles.loginBox}>
//           <View style={styles.inputView}>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="Login."
//               placeholderTextColor="#000"
//               onChangeText={(email) => setEmail(email)}
//                 />
//           </View>
//           <View style={styles.inputView}>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="Password"
//               placeholderTextColor="#000"
//               secureTextEntry={true}
//               onChangeText={(password) => setPassword(password)}
//                 />
                
//           </View>
     
//             <TouchableOpacity style={styles.btn}>
//             <Button 
//               title="Login"
//               color="#000"
//               onPress={() => Product}

//             />
//             </TouchableOpacity>
          
          
//         </View>
        
         

//         </ImageBackground>
          
//       </View>
//     );

// }
const styles = StyleSheet.create({
    inputView: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor:"#000",
      borderRadius: 30,
      width: "80%",
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
      justifyContent: "center",
      position: "relative"
     
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
    