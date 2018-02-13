import {test} from './test';
import {emp} from './emp';
import {userInterface} from './userInter';
class student implements userInterface {
    returnInterface(){
        console.log("Interface method");
    }
}
var stud = new student();
stud.returnInterface();
var testobj = new test();
testobj.returnName("hello","welcome");
var empl = new emp();
empl.empname();
