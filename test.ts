export class test{
 constructor(){};   
 user = "CSS";
 returnName(firstname,lastname){
   console.log("full name is " + firstname + lastname);
}
}
var mytest = new test();
mytest.returnName("welcome","typescript");
console.log(mytest.user);
