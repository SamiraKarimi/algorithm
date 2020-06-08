//create a standalone function that accepts a string and an integer , ans a rotates the characters in the string to the right by that  amount .

let myFunc = (str,n)=>{
    let secondStr = '';
    secondStr = str.slice(n,str.length)
    console.log(secondStr);
    let myconc = str.slice(0,n);
    console.log('********')
    let final=secondStr.concat(myconc);
    //jsut becarefull it is not going to mutate the original string so we have to store it in variable
    console.log(final);
    //try to use the recursion and also CharAt()
}
myFunc('hellobob',5)