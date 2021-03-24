import React, { useState, useEffect }  from 'react';
import { View, Text, Button ,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import { Camera } from 'expo-camera';
export default function Home()  {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return(          
          <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Button title="Edit Profile" 
      style={styles.btn}

        />
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
          placeholder="Password."
          placeholderTextColor="#000"
          onChangeText={(password) => setPassword(password)}
            />
        </View>
        <Button title="Login" 

        />
        </View>
    );

}
const styles = StyleSheet.create({
    inputView: {
      // backgroundColor: "powderblue",
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
    btn:{
      width: 20,
      padding:10,
      
    },
    container: {
      flex: 1,
      padding: 30,
      backgroundColor:"powderblue",
    },
    camera: {
      flex: 0.5,
      width: 350,
      padding:0,
      marginBottom:0,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
    