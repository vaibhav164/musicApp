import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Text, View, StyleSheet, Button} from 'react-native';

const instance=axios.create({
    baseURL: 'https://itunes.apple.com/search?term=Michael+jackson',
});


function Log(){
    const [num, setnum]= useState([]);
    useEffect(() =>{
        async function fetchData() {
            const request = await fetch({instance});
            console.log(request);
            return request;
        } fetchData();
    }, [num]);
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cdc733' }}>
            <Text style={{fontSize:100}}>
                {num}
            </Text>
            <Button title="Decrement" onPress={() =>setnum([instance.baseURL])}/> 
            <Text>{instance.basedURL}</Text>     
         </View>
    );
    
}``
export default Log;
