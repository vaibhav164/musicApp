import React from 'react';
import {View, TouchableOpacity, ImageBackground, Icon} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
  function EditProfile(){
      return(
        <View style={{flexDirection:'row', marginTop: 15, justifyContent:'center',alignItems:'center'}}>
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
         </View>
      )
  }
  export default EditProfile;