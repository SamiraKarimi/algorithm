//1 string:dedupe =>Snaps!crackles pops!=> snracle ops!
//2 : return only the uniqe character from the given string

// String: Dedupe
// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".
// function dedupe(str){
//     var arr = [];
//     for (var i = 0; i < str.length; i++){
//         // var j = i+1;
        
//         arr.push(str.charAt(i));
//         for (var j = arr.length; j < arr.length-1; j++){

//         }
//     }
//     console.log(arr);
// }
// dedupe("Snaps! crackles! pops!")


// let dedupe = (str)=>{
//     let newStr = '';
//     for (let i=0 ;i<str.length;i++){
//         for(let j=i+1;j<str.length;j++){
//             if (str.charAt(i) != str.charAt(j)){
//                 newStr += str.charAt(i);
                // newStr.push(charAt(i));
//             }
//             else {
//                 // newStr += str.charAt(i);
//             }
//         }
//     }
//     return console.log(newStr);
// }
// dedupe("hellhe");
// function dedupe(str){
//     var arr = [];
//     for (var i = 0; i < str.length; i++){
//         arr.push(str.charAt(i));
//         var j = i + 1;
//         for (var k = 0; k < arr.length; k++){
//             if (j == arr[k]){
//                 continue;
//             }
//         }
//     }
//     console.log(arr);
}
dedupe("Snaps! crackles! pops!")
