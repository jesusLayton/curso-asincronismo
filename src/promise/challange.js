import fetch from 'node-fetch';

const API = 'http://ipwho.is';

function ferchData(urlApi){
    return fetch(urlApi);
}

ferchData(`${API}/192.168.20.26`)    
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(()=>{
        console.log('hola')
    })
    .catch(error => console.log(error));
