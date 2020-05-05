let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
const userManager = (obj)=> {
    let i= 0;
    for (let key in obj){
        console.log(key.toUpperCase());
      for (let ele of obj[key]){
         i++;
          nameLen=ele['first_name'].length+ ele['last_name'].length;
          console.log(i+" " + ele['first_name']+','+ele['last_name']+" "+nameLen);
      } 
    }

}
userManager(users);
