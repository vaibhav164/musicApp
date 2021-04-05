import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Text, View,Button } from 'react-native';

class App extends Component {
  render(){
    return(
        <View>
          <Text style={{fontSize:60}}>Class Components</Text>
          <Button title="Click" onPress={()=>alert("pressed")}/>  
        </View>
    );
    
  }
}
export default App;