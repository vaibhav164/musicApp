import React, {useState} from 'react';
import {
        View, 
        TouchableOpacity, 
        ImageBackground, 
        StyleSheet, 
        Text,
        Image,
        Alert,
        Dimensions,
        } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { TouchableRipple} from 'react-native-paper';
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

  function EditProfile(){

//Camera Function
  const [InitialImg, setSelectedImg] = useState("");
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      Alert.alert(
        "Permission Needed",
        "Permission to access camera is required!"
      );
      return;
    }
    let camerapicker = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    if (camerapicker.cancelled === true) {
      return;
    }
    setSelectedImg({ ImageUri: camerapicker.uri });
    close();
  };


  //gallery Image Function
  const openImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted === false) {
      Alert.alert(
        "Permission Needed",
        "Permission to access gallery is required!"
      );
      return;
    }
    let picker = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });
    if (picker.cancelled === true) {
      return;
    }
    setSelectedImg({ ImageUri: picker.uri });
    //console.log(picker);
    close();
  };
      return(
        <View style={styles.Container}>
          {InitialImg !== "" ? (
        <TouchableOpacity>
        <View style={{
          height:100,
          width:100,
          borderRadius:15,
          justifyContent:'center',
          alignItems:'center',
        }}>
            <ImageBackground
           source={{
            uri:
            InitialImg.ImageUri !== null
            ? InitialImg.ImageUri
            : 'https://i.pinimg.com/736x/dd/b3/c7/ddb3c721f6df2017b4bce462d756e652.jpg',
          }}
          style={{height:100, width:100}}
          imageStyle={{borderRadius:15}}
          >
          </ImageBackground>
        </View>
      </TouchableOpacity>

      ) : (
        <TouchableOpacity>
              <View style={{
                height:100,
                width:100,
                borderRadius:15,
                justifyContent:'center',
                alignItems:'center',
              }}>
                  <ImageBackground
                 source={{
                  uri:'https://i.pinimg.com/736x/dd/b3/c7/ddb3c721f6df2017b4bce462d756e652.jpg',
                }}
                style={{height:100, width:100}}
                imageStyle={{borderRadius:15}}
                >
                </ImageBackground>
              </View>
            </TouchableOpacity>
      )}
            
            <View style={{marginTop:10}}>
                <TouchableRipple onPress={() => openImage()}>
                <View style={styles.menuItem}>
                  <Ionicons name='image-outline' color="red" size={40}/>
                  <Text style={styles.menuItemText}>Upload Image</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => openCamera()}>
                <View style={styles.menuItem}>
                  <Ionicons name='camera-outline' color="red" size={40}/>
                  <Text style={styles.menuItemText}>Take Picture</Text>
                </View>
              </TouchableRipple>
                </View>
            
         </View>
      )
  }
  export default EditProfile;
  const styles = StyleSheet.create({
    menuItem: {
      paddingVertical: 15,
      paddingHorizontal: 30,
      flexDirection:'row',
    },
    Container:{
      marginTop: 30, 
      justifyContent:'center',
      alignItems:'center',
    },
    menuItemText:{
      margin:10,
      fontSize:20,
    }
  })