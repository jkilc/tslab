let myName = "josie"; //my name 
const usStateNum = 50 // number of states 

let addNum = (a: number, b: number): number => { //an arrow funtion using 
    return a + b;                                //typescript syntax to (hopefully) add two numbers
}
addNum(5, 4);



function sayHello() {
    alert(`hello ${myName}!!!!`)
}
sayHello();

let checkAge = (options: { name: string, age: number }) => {
    if (options.age < 21)
alert(`sorry ${name}, you aren't old enough to view this page!`)
}
checkAge({
    name: "charles",
    age: 21
})
checkAge({
    name: "abby",
    age: 27
})
checkAge({
    name: "james",
    age: 18
})
checkAge({
    name: "john",
    age: 17
})

let faveVeg = ["asparagus", "okra", "brocolini", "squash", "sprouts", "idk"]
for ( let i = 0; i < faveVeg.length; i++) {
    console.log(faveVeg[i])
}


class Pets {
    name: string;
    breed: string;
    constructor(theName, theBreed) {
        this.name = theName;
        this.breed = theBreed
    }

    petInfo() {
        console.log(`This pet's name is ${this.name}, and they are a ${this.breed}`)
    }

}

let coopDog = new Pets("Cooper", "dog")
coopDog.petInfo();

let danCat = new Pets("Diane", "cat")
danCat.petInfo();



let randFolks = [
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
]



let getLength = (word: string) => {
    console.log(word.length)
    if (word.length % 2 == 0) {
        console.log('The world is nice and even!')
    }
    else {
        console.log('The world is an odd place!')
    }
}
getLength("123456")