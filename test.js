"use strict";
exports.__esModule = true;
var test = /** @class */ (function () {
    function test() {
        this.user = "CSS";
    }
    ;
    test.prototype.returnName = function (firstname, lastname) {
        console.log("full name is " + firstname + lastname);
    };
    return test;
}());
exports.test = test;
var mytest = new test();
mytest.returnName("welcome", "typescript");
console.log(mytest.user);
