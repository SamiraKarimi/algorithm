//create a string that shoren the string 
//aaaabbcddd return a4b2c1d4

const myFunc = (str)=>{
    let mystr = '';
    mystr+=str[1];
    let counter =0;
    for (let i=1;i<str.length;i++){
        if(str[i] == str[i+1]){
            counter ++;
            console.log(counter);
            
        }
    }
}
myFunc('aaabbbb');










//the top one return the aaaabbcddd