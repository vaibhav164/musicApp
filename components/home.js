import React from 'react';
import { View, Text, Button ,StyleSheet,TextInput} from "react-native";
export default function Home()  {

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e4bad4' }}>
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
          onChangeText={(email) => setEmail(email)}
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
      borderColor:"powderblue",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      padding: 10,
      fontSize: 20,
      alignItems: "flex-start",
    }
  });
    