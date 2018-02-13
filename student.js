"use strict";
exports.__esModule = true;
var test_1 = require("./test");
var emp_1 = require("./emp");
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.returnInterface = function () {
        console.log("Interface method");
    };
    return student;
}());
var stud = new student();
stud.returnInterface();
var testobj = new test_1.test();
testobj.returnName("hello", "welcome");
var empl = new emp_1.emp();
empl.empname();
