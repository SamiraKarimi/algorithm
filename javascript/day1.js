//interstiing point line 3 will return the length of the array 
let array = ['dog','cat','fish'];
console.log(array.push('hello'));
console.log(array);
//advance looping in es6
for(let entry of array.entries()){
    console.log('entry is',entry)
}
// ==============================
for (let [index,value] of array.entries()) {
    console.log('index is ',index,value)
}
//=========================
let person = {
    eyeColor:'blue',
    hair:'red',
    age:34,
    name:'Bob'
};
person.height=6;
person['skin']='white';
console.log(person); 
for (let info in person) {
    console.log('info is ',info,person[info]);
}
// ======
// if we don't pass the argument in the function it is just going to return the undifined
function sayHello(name) {
    console.log('hello',name)
}
sayHello();
//look how cool javascript use the lexical scope for finding the person.name

function sayHelloTolexical(name) {
    console.log('hello',person.name);
}  
sayHelloTolexical('Samira')
//if we forgot to add the var infront of the variable it will make a global scope that is not good