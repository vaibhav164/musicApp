import React from 'react';
import {View, StyleSheet, Text, ImageBackground, SafeAreaView} from 'react-native';
function DetailView(){
    return(
        <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{ flex: 1 ,width:"100%"}}
          //We are using online image to set background
          source={{
            uri:
              'https://www.masitrading.com/wp-content/uploads/2019/12/cherries.jpg',
          }}
          //You can also set image from your project folder
          //require('./images/background_image.jpg')        //
        >
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              Example of Vaibhav Native Swipe Button
            </Text>
            <View style={styles.centerContentStyle}>
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
                }}
                style={{ width: 40, height: 40, marginTop: 90 }}
              />
              <Text style={styles.TextStyle}>https://aboutreact.com</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    textView:{
        flex: 1,
        fontSize: 40,
        fontWeight: "bold",
    },
})
export default DetailView;