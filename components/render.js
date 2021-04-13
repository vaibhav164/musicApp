import React, { useCallback } from "react";
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
function Render(props){
    const navigateToDetailScreen = useCallback((item) => {
        props.navigation.navigate("Info", { param: props.item }, [item]);
      });
    return(
            <TouchableOpacity onPress={navigateToDetailScreen}>
              <Ionicons name='image-outline' color="red" size={40}/>   
              <View style={styles.container}>
                <Text> {props.item.FruitName} </Text>
                <Text>  {props.item.fruitPrice} </Text>
                <Text> {props.item.kind}</Text>
            </View>
            </TouchableOpacity>
    )
}
export default Render;
const styles=StyleSheet.create({
    flex:1,
})