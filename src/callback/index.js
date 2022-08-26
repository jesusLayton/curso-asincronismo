function sum(num1,num2){
    return num1 + num2;
}
function res(num1,num2){
    return num1 - num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}


console.log(calc(2,4,sum));
console.log(calc(2,4,res));

setTimeout(function (){
    console.log('hola javaScript')
}, 5000)

function gretting (name){
    console.log(`hola ${name}`)
}

setTimeout(gretting, 2000, 'jesus')