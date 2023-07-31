/* defining an obj without using interface: */
var obj = {
    name: 'Sara',
    age: 30,
};
var obj2 = {
    name: 'jack',
};
;
/* define an object based on an interface: */
var obj3 = {
    name: 'sara',
    getMessage: function () {
        return "hello " + name;
    },
};
//define non const variable: 
var username = 'alex';
//union operator, combines datatypes. here we dont know the pagenumber would be string or number, and the default value is "1": 
var pagenumber = "1";
var errorMessage = null;
//define a function: 
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Pooneh", "Mgh"));
