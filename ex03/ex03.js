"use strict";
// commonJS -> every file is a module by default
// modules help us encapsulate our code and only share the minimum
// as we learned the module is a global object available in all modules. the requiere function is
// another global that can be used. we use export method of module global and require func to make
// our code visible from other files (= modules).
// important: when you import a module in which a func is invoked, you actually invoke the function by requiring it. even though
// you are not assigning it to a certain value.
let names = "Pinar";
module.exports = { names };
