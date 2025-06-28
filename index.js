"use strict";
let course = "TypeScript";
let age = 30;
let isActive = true;
//tuple
let user = ["Shubham", 30];
//array
let numbers = [1, 2, 3, 4, 5];
let names = ["Shubham", "John", "Doe"];
//array of arrays
let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
//enum
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["USER"] = "User";
    Role["GUEST"] = "Guest";
})(Role || (Role = {}));
let student = {
    name: "Shubham",
    age: 30,
    isActive: true
};
