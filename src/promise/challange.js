import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function ferchData(urlApi){
    return fetch(urlApi);
}
/* 
ferchData(`${API}/products`)    
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(()=>{
        console.log('hola')
    })
    .catch(error => console.log(error)); */


ferchData(`${API}/products`)  
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return ferchData(`${API}/products/${products[0].id}`)
    })
    .then(response =>response.json())
    .then(product =>{
        console.log(product.title);
        return ferchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(()=> console.log('Finally'));