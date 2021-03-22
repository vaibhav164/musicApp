import React from 'react';
import axios from 'axios';

const Api=() =>{
    const url = 'https://itunes.apple.com/search?term=Michael+jackson';
    const getdata = () => {
        axios.get(`${url}artistId`)
        .then((response) => {
            const artId = response.datqa.results.artistId;
        })
        .catch(err => console.error(`Error: ${error}`));
    }
    
}
export default Api;