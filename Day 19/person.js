"use strict";
// Q 131:
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and 
//reusability is a cornerstone of modern JavaScript application structure.
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.greet = function () {
        console.log("Assalam o Alaikum ! , my name is ".concat(this.name));
    };
    return person;
}());
exports.person = person;
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
