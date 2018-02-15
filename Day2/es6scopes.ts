// var ,let , const

// var - function scope variable and varible declared with varible inside of function can not be accessed out of the function.
//let -  block scope varibale and varible declaed with in the block can not be accessed out side of bolck
// const - It allow assignment of value once and also during the declaration only.

var username = "german";
function names(){
  var username = "surendra";
}

console.log(username);

if(username =="german"){
    let playgames = true;
}
let playgames = false;

console.log(username + "play Games " + playgames); //
const fixval = 10;
