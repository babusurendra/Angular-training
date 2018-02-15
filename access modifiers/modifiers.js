// private and public
var user = /** @class */ (function () {
    function user() {
        this.uname = "surendra";
    }
    //console.log(uname);
    user.prototype.name = function () {
        console.log(this.uname);
        this.names();
    };
    user.prototype.names = function () {
        console.log("names funcion");
    };
    return user;
}());
var userObj = new user();
console.log(userObj.uname);
// private -- accessible within the class 
// public -- accessible outside of the class
// by defult all members are public only.
// this refers to scope of current class.
