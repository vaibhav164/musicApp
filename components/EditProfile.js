import React from 'react';
import {View, TouchableOpacity, ImageBackground, StyleSheet, Text} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button ,TouchableRipple} from 'react-native-paper';

const pickFromGallery = async ()=>{
  const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
  if(granted){
       let data =  await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        if(!data.cancelled){
            let newfile = { 
              uri:data.uri,
              type:`test/${data.uri.split(".")[1]}`,
              name:`test.${data.uri.split(".")[1]}` 
              
          }
            handleUpload(newfile)
        }
  }else{
     Alert.alert("you need to give up permission to work")
  }
}
const pickFromCamera = async ()=>{
  const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
  if(granted){
       let data =  await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
      if(!data.cancelled){
          let newfile = { 
            uri:data.uri,
            type:`test/${data.uri.split(".")[1]}`,
            name:`test.${data.uri.split(".")[1]}` 

        }
          handleUpload(newfile)
      }
  }else{
     Alert.alert("you need to give up permission to work")
  }
}


  function EditProfile(){
      return(
        <View style={{ marginTop: 30, justifyContent:'center',alignItems:'center'}}>
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
                <View style={{
                        flex:1,
                        alignItems:'center', 
                        justifyContent:'center',}}>
                  <Ionicons name='camera-outline' size={35}  color="#fff" style={{
                    opacity: 0.7,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:10,
                    borderColor:'#fff',
                  }}/>
                </View>
                </ImageBackground>
                
                
              </View>
            </TouchableOpacity>
            <View style={{marginTop:10}}>
                <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Ionicons name='settings-outline' color="red" size={20}/>
                  <Text style={styles.menuItemText}>Setting</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() =>{pickFromCamera}}>
                <View style={styles.menuItem}>
                  <Ionicons name='camera-outline' color="red" size={20}/>
                  <Text style={styles.menuItemText}>Edit</Text>
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
    },
  })