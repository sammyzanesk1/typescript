//BASIC RIMITIVE TYPES(variable: type = value)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5; //NUMBER
var company = "Traversy Media "; //STRING
var isPublished = true; //BOOLEAN AND THE BOOLEAN VALUE
var x = "Hello"; //A STATIC TYPE..a string initially...you could assign another type to any again no conflict will occur
//ARRAY TYPES
//1)Setting a single type for all elements of an array (arr: type[] = [elements])
var ids = [1, 2, 3, 4, 5];
// ids.push("hello"); //error, we can not assign a value with a type into an array of a different type
// let idf: number[] = [1, 2, 3, 4, 5, true];//error idf is an array with type numbr, boolean value will not be accepted inside it.
//2) an array that accepts any different elements types  (arr: any[] = [elements])
var arr = [1, true, "Hello"];
//3) tuple: (arr: [LIST OF types] = [LIST OF CORRESPONDING elements]) here you can specify the number of different type you want to exist for each element in an array..it recognises the order the types are specified.
var arrayPerson = [1, "Zane", true];
//let arrayPerson2: [number, string, boolean] = [1, "Zane", 7]; //error: we specify the last element as boolean, we wrote number...does not follow the specified types order.
//tuple array: (arr: [number, string] = [ [1, 'a'], [2,'b'], [3,'c']]) here we work with an array that contains arrays inside of it. ie we specify the data type of a nested array...the type we specify to the array variable will apply to each of the nested array...IT IS A FIXED LENGTH, FIXED TYPE ARRAY.
var arrayEmployee; //we specify here that the array should have a number type in [0] and a string in [1]in each of the arrayEmployee position or rank or nested arrays.
arrayEmployee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Zane"],
];
//wrong [0]=number !boolean
// arrayEmployee = [
//   [true, "Brad"],
//   [2, "John"],
//   [3, "Zane"],
// ];
//UNION...(variable: string | number = value(string or number) ) the variable will be able to hold more than one type...it will assume the specific type we have assigned to it.
var numeberstringiID;
numeberstringiID = 22;
numeberstringiID = "gay";
// numeberstringiID = true; //error, variable can only be tring or number at any time.
//ENUM keyword(working with number type)..it allows us define an order of number as the values for constant variables specified a given set...i.e for all constant variables created inside the set, a number type and value is assigned to them in order of rank by default...all the constant will have a number type, and their values will be in an ascending order starting from zero. the first constant assumes a value of zero the next 1, 2 in that other...we can alter the start value by specifying the desired number, the constants start counting in that particular specified order..in short, all the const in the set will have a number type, and each const a value acording to its rank. where no starting value is specified the first ranked const value is 0...we can also assign number values we like for all the const....we can also instead of numbers set string as the constants underlying values.
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //returns 0
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
//we set the stating value for the first ranked const
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 10] = "Up";
    Direction2[Direction2["Down"] = 11] = "Down";
    Direction2[Direction2["Left"] = 12] = "Left";
    Direction2[Direction2["Right"] = 13] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); //returns 10
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);
//ENUM (working with string type)..here all the costs will be assigned a string type...their value will be the value specified or manually assigned to them.unlike working with numbers.
//we can set theenum values as strings not nubers. here we must write out the plaeholder/read only values of the enum and their underlying value(brwser console value)
var DirectionA;
(function (DirectionA) {
    DirectionA["Up"] = "king";
    DirectionA["Down"] = "sammy";
    DirectionA["Left"] = "zane";
    DirectionA["Right"] = "2-chainz";
})(DirectionA || (DirectionA = {}));
var person3 = {
    name: "Zane",
    age: 17,
    hobbies: ["Sports", "Cooking"], //[] string type infered by typescript
    DirectionA: DirectionA.Up, //return 5 in the browser console. admin is a placeholder.
};
if (person3.DirectionA === DirectionA.Up) {
    console.log("is author");
}
console.log(DirectionA.Up); //returns king
console.log(DirectionA.Down); //returns sammy
console.log(DirectionA.Left); //returns zane
console.log(DirectionA.Up); //returns 2-chainz
//example
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var person4 = {
    name: "Zane",
    age: 17,
    hobbies: ["Sports", "Cooking"], //[] string type infered by typescript
    role: Role.ADMIN, //return 5 in the browser console. admin is a placeholder.
};
// console.log(person4);
if (person4.role === Role.AUTHOR) {
    console.log("is author");
}
//OBJECTS...an object has multiple property value pairs.
//1) here for each object rank, wemust specify the property and the type its value should be.
//(variable: { propertyAgee: number, propertyName: string, proertyHuman: boolean, propertyAdult: boolean }) = variable {}.
var user1 = {
    id: 1,
    name: "John",
};
console.log(user1);
//create the object, assign values to the object properties. each value assigned should be the specified type in step 1.
var user2 = { id: 1, name: "John" };
console.log(user2);
//example 2
var person1 = {
    name: "Zane",
    age: 17,
};
console.log(person1);
var person2 = { name: "Zane", age: 17 };
console.log(person2);
//Type Assertion: it is explicitly telling the compiler you want to treat an entity/variable as a different type...i.e a type different fromwhat was previously assignd to the variable.
//syntax 1: ANGLE BRACKET....<>
var cid = 1; //we assign any type to variable cid
var customerId = cid; //we assign custmerId a number type by chaning the  cid to a number type.
// customerId = true; //returns error, cid is a number customerId is a cid with a number type
customerId = 5; //customer is a number.
//syntax 2: vaiable1 = variable2 as number
//syntax 1: ANGLE BRACKET....<>
var cidA = 1; //we assign any type to variable cid
var customerIdA = cidA; //we assign custmerId a number type by chaning the  cid to a number type.
// customerId = true; //returns error, cid is a number customerId is a cid with a number type
customerIdA = 5; //customer is a number.
//USING TYPES IN FUNCTIONS...by default the first parameter in a function has type any...we could manually set it to a specific type or control it using the json file for ts...i.e setting a function in typescript without explicitly giving the function parameters values types wi result in an error. solve this in the json file by setting its implicit any setting to false...i.e disable the error when parameters are not exlicitly defined with values search implicit any and change its value to false...you can also solve manually by assigning values like below
// function addNumA(x, y) {
//   return x + y;
// }
//we set the type for the parameter inputs and the type for the output value of the function
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, "2")); //error, input why has to be a number not a string
console.log(addNum(1, 2)); //returns 3
//we can set the input type as a union i.e the parameter will be able to assume one of the specified type at any instance...we said the message parameter value could be a string or number...calling the function with astring or number will work. any other type will not work....we set the type of the function return to void so that it can assume the type of the parameter that was passed into it.
function log(message) {
    console.log(message);
}
log("zane"); //returns zane
log(7); //returns 7
var user4 = { id: 1, name: "John" };
console.log(user4);
var userInterface = { id: 1, name: "John" };
console.log(userInterface);
var pA1 = 1;
var pA2 = "2";
var userA = { id: 1, name: "John" };
console.log(userA);
var userB = { id: 1, name: "John" };
console.log(userA);
//step 2 create the variable function and the function
var add = function (x, y) { return x + y; }; //arrow function, no need to set return
var substract = function (x, y) { return x - y; }; //arrow function, no need to set return
//u cannot assign any other type to the function not defined in the interface (step 1)
// const add1: MathFunc = (x: number, y: string): number => x + y; //error...type string for parameter y
//classes on typescript.
//interfaceand classes
//a constructor is a class method.......i.e a function within the class...a method is a function within an objet. a class creates miltiple objects...a class method is called a constructor...the constructor method will run immediately the class is initialised/invoked/called..i.e the class is used to create a new object...
//we said the constructor costructor should assign assign properties, values and values type to the objects that the class will create...the id of the object should be the id in the class and its value should be the argument passed inside the constructor function i.e the parameter arguement we use to call the class...sameapplies to the name property,its value and value type.
// class Person {
//   //public properties
//   id: number;
//   name: string;
//   constructor() {
//     console.log(123);
//   }
// }
// const king = new Person(); //initiates or runs the class Person constructor..what ever is in the construtor function will be returned... prints 123 in the log
// const jabin = new Person(); //prints 123 in the log
//classes with public properties..either specify public or do not its pointles
var PersonA = /** @class */ (function () {
    function PersonA(id, name) {
        this.id = id;
        this.name = name;
    }
    return PersonA;
}());
var sammy = new PersonA(7, "2-Chainz"); //initiates or runs the class Person constructor to create a brad object
var zane = new PersonA(1, "sammy-gyan");
console.log(sammy); //log the first object
console.log(zane); //log the second object
sammy.name = "soft-boy"; //attempt to change the property value in the object is a success, bcos the property is apublic property can be accessed/changed/manipulated from outsid the class in which uit exist.
console.log(sammy);
//classeswith private properties...we cannot access the properties of the object from outside the class
var PersonPrivate = /** @class */ (function () {
    function PersonPrivate(id, name) {
        this.id = id;
        this.name = name;
    }
    return PersonPrivate;
}());
var aka = new PersonPrivate(7, "2-Chainz"); //initiates or runs the class PersonPrivate constructor to create a brad object
var alias = new PersonPrivate(1, "sammy-gyan");
// aka.name = "sam"; //cannot attempt to chnage the value of the property bcos the property is private..error
// console.log(alias.id);//cannot access the id property outside of the class.it is private property..error
console.log(aka); //log the first object
console.log(alias); //log the second object
//classes with protected properties...you can only access the class proerty from ithin the class or a class that extends the properties parent class...the properties camnnot be accesse from outside of this two places.
var PersonProtected = /** @class */ (function () {
    function PersonProtected(id, name) {
        this.id = id;
        this.name = name;
    }
    return PersonProtected;
}());
var aka1 = new PersonProtected(6, "7-Chainz"); //initiates or runs the class PersonProtected constructor to create a brad object
var alias1 = new PersonProtected(2, "zane-gyan");
// aka1.name = "yungzane"; //cannot attempt to chnage the value of the property bcos the property is protected..error
// console.log(alias1.id);//cannot access the id property outside of the class.it is protected property..error
console.log(aka1); //log the first object
console.log(alias1); //log the second object
/////////////
//in a class aside a constructor function(a class method which creates the object), we can have other methods too in te class.
var Person3 = /** @class */ (function () {
    function Person3(id, name) {
        this.id = id;
        this.name = name;
    }
    //you define the tpye for the return value of a class function like this or you use the interface approach in the next example.
    // register(): number {
    // return `${this.name} is now registered`;
    Person3.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person3;
}());
var bradley = new Person3(123, "Travs Bradley");
var stanley = new Person3(456, "Travs Stanley");
console.log(bradley, stanley);
console.log(stanley.register());
console.log(bradley.register);
var Person4 = /** @class */ (function () {
    function Person4(id, name) {
        this.id = id;
        this.name = name;
    }
    // register() { //error method was set to return astring. not a number
    //   return 1;
    // }
    Person4.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person4;
}());
var brady = new Person4(10, "Travs Brady");
var stan = new Person4(20, "Travs Stan");
console.log(brady);
console.log(stan);
console.log(stan.register());
////////////////
//working the extends class...here we want to create an objcet that has the same properties or someof the properties of a class but we also want the object to have some unique properties...basically the object is a combination of 2 classes, first the parent class it inherits fromwhich it will inherit all of its properties and the extending class where we will specify the unique porperties of the object...
//in creating objects...allobjects share the same properties from the parent class and each object inherits its own unique properties from the extend class.
//sub class or child class or extends class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person4));
var emp = new Employee(1, "Sammy-Gyan", "C.E.O)");
console.log(emp);
console.log(emp.register());
/////////
//personal example..check note for brief write up
// interface BasicProfile {
//   name: string;
//   state: string;
// }
// class ProfessionalProfile implements BasicProfile {
//   //when the class is run, the 4 properties are created in the object.
//   name: string;
//   state: string;
//   constructor(name: string, state: string) {
//     this.name = name;
//     this.state = state;
//   }
// }
// class myProfession extends ProfessionalProfile {
//   profession: string; //we set the objects unique property value type to string.
//   constructor(name: string, state: string, profession: string) {
//     super(name, state);
//     this.profession = profession;
//   }
// }
// const UpdateProfessionThen = new myProfession("Sammy", "EDO", "ACA.");
// const UpdateProfessionNow = new myProfession("SammyZane", "DELTA", "ReactDev");
// console.log(UpdateProfessionThen, UpdateProfessionNow);
/////////////////////
//generics...we create a code(function) which assumes any value type (a general code bcos we can use that code in different types whenever we want) at any given instance based on the type we seacify when we call/invoke it
//this getfunction arrays takes in as its input an array whose element type is any...the function returns an array whose element values are also set to type any...
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["King", "Sammy", "Zane"]);
console.log(numArray);
console.log(strArray);
numArray.push(1); //no error the functon accepts any type.
strArray.push("1"); //no error the function accepts any type
//here we create a generic...i.e we genralise the function, with generic we can make the fucntion multipurpose. the function parameter and return value type at each instance will be different depending on how we invoke it....in the function we use a placeholder as the parameter and return value type...at the point of invoking or calling the function we specify the desired type for the parameter and the return value.this way we can call the same function multiple times with different type at each instance.
//a generic function
function genericgetArray(items) {
    //we use T as the generic type placeholder of the function
    return new Array().concat(items);
}
var numArrayGeneric = genericgetArray([1, 2, 3, 4]); //we set the type here which replaces th function placeholder
var strArrayGeneric = genericgetArray(["King", "Sammy", "Zane"]); //we set the type here which replaces th function placeholder
console.log(numArrayGeneric);
numArrayGeneric.push(1); //no error the generic functon accepts only number type parameters.
// numArrayGeneric.push('1'); //error the generic function parameter type is number, a string parameter will not work
strArrayGeneric.push("kingJabin"); //no error the generic function accepts only string type parameters
// strArrayGeneric.push(7)// error the generic function parameter type is number, a type string parameter will not work.
//THE END.......CHECK LAST PART OF VIDEO FOR REACT SETUP.
