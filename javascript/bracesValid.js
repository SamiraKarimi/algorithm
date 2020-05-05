// Braces Valid
bracesValid = (br)=>{
    let tr = [];
    for (let i=0;i<br.length;i++){
        if (br[i]=='[' || br[i] =='(' || br[i] == '{') tr.push(br[i]);
        else {
        if (tr.length == 0) {
        return false;}
        lastTr = tr[tr.length-1];
        if ((lastTr == '(' && br[i] == ')') || (lastTr == '{' && br[i] == '}') || lastTr == '[' && br[i] == ']'){
            tr.pop(br[i])
        }else break;
     }  
    }
    return tr.length==0;
}

console.log(bracesValid( "()" )) 
