var myName = "josie"; //my name 
var usStateNum = 50; // number of states 
var addNum = function (a, b) {
    return a + b; //typescript syntax to (hopefully) add two numbers
};
addNum(5, 4);
function sayHello() {
    alert("hello " + myName + "!!!!");
}
sayHello();
// let checkAge = (options: {name: string, age: number} {
//     if (options.age < 21)
//     alert (`sorry ${name}, you aren't old enough to view this page!`)
// }
// checkAge ({
//     name: "charles";
//     age: 21
// })
// checkAge ({
//     name: "abby";
//     age: 27
// })
// checkAge ({
//     name: "james";
//     age: 18
// })
// checkAge ({
//     name:"john";
//     age: 17
// })
var faveVeg = ["asparagus", "okra", "brocolini", "squash", "sprouts", "idk"];
for (i = 0; i < faveVeg.length; i++) {
    console.log(faveVeg[i]);
}
var Pets = /** @class */ (function () {
    function Pets(theName, theBreed) {
        this.name = theName;
        this.breed = theBreed;
    }
    Pets.prototype.petInfo = function () {
        console.log("This pet's name is " + this.name + ", and they are a " + this.breed);
    };
    return Pets;
}());
var coopDog = new Pets("Cooper", "dog");
coopDog.petInfo();
var danCat = new Pets("Diane", "cat");
danCat.petInfo();
var randFolks = [
    {
        name: "general cambro",
        age: "45"
    },
    {
        name: "milton bilton",
        age: "2"
    },
    {
        name: "holly artograph",
        age: "31"
    },
    {
        name: "sunday tango",
        age: "19"
    },
    {
        name: "gerbil gershwin",
        age: "239"
    }
];
var getLength = function (word) {
    console.log(word.length);
    return word.length;
};
getLength("123456");
