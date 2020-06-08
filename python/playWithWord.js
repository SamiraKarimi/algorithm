//Givern a string of word return an array of words.
//'life is not a drill!' return ['life','is','not','a','drill']
const wordArr = (str)=>{
    for (let i=0;i<str.length-1;i++){
        let myArr = [];
        let temp = '';
        temp.push(str.charAt())
        
    if(str.charAt(i)===' '){}

        
         
    }
    // return myArr;
}
let aStr = 'Hello my world!';
console.log(wordArr(aStr));

//Reverse Word Order

///////
// charAt
// x = "Hello my name is Bob!";
// y = "This string has a period.";
// z = "Hey, is this working?";
// function strArr(str){
//     let temp = '';
//     let strArr = [];
//     for (i=0;i<str.length;i++){
//         if(str.charAt(i) == " "){
//             strArr.push(temp)
//             i++
//             temp = ''
//         }
//         temp += str.charAt(i)
//         if(i == str.length-1){
//             strArr.push(temp)
//         }
//     }
//     return strArr
// }

// console.log(strArr(x))
// console.log(strArr(y))

// function reverseStr(str){
//     let temp = '';
//     let strArr = [];
//     for (i=0;i<str.length;i++){
//         if(str.charAt(i) == " "){
//             strArr.push(temp)
//             i++
//             temp = ''
//         }
//         temp += str.charAt(i)
//         if(i == str.length-1){
//             strArr.push(temp)
//         }
//     }
//     console.log(strArr)
//     let newStr = '';
//     for (j = strArr.length - 1; j != -1; j--){
//         newStr += strArr[j];
//         newStr += ' '
//     }
//     return newStr;
// }

// console.log(reverseStr(x))
// console.log(reverseStr(y))
// console.log(reverseStr(z))