// private and public

class user {
 public uname = "surendra";
 //console.log(uname);
 name(){
     console.log(this.uname);
     this.names();
 }
 names(){
     console.log("names funcion");
 }

}
var userObj = new user();
console.log(userObj.uname);

// private -- accessible within the class 
// public -- accessible outside of the class
// by defult all members are public only.

// this refers to scope of current class.