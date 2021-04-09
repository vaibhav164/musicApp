import * as React from 'react';
import {View, StyleSheet, Text, ImageBackground, SafeAreaView} from 'react-native';
import {useTheme, Avatar} from 'react-native-paper';
const {colors} = useTheme();
function ProductName(){
    return(
        <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1}}
          source={{
            uri:
              'https://www.masitrading.com/wp-content/uploads/2019/12/cherries.jpg',
          }}
        >
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              Example of Vaibhav Native Swipe Button
            </Text>
          </View>
        </ImageBackground>
      </View>
         );
    
}
export default ProductName;
const styles=StyleSheet.create({
    textView:{
        flex: 1,
        fontSize: 40,
        fontWeight: "bold",
    },
    // container:{
    //     justifyContent:"center",
    //     alignItems:"center",
    // },
})