//variables are containers for storing data
//variable are declared by var,let.const keywords

//var is usedmostly on old browsers
var x=5;
var y =10;
var sum = x+y;

//const keyword is used when you dont want to change the variable
//must be assigned when declared
//const doesnt define a constantvalue but a constant refference to a value
const priceofItem1= 200;
const priceofItem2= 300;
const total = priceofItem1+priceofItem2;
console.log(total);

//CONST ARRAYS
//you can change the values of a constant array
const cars =["bmw","mercedes","audi","jaguar"];
//you can change an element
cars[2]="ferrarri";
console.log(cars);

//but you cant reassign an array
const cars=["volkswagen","volvo","tesla"];
cars=["toyota,mclaren,hilux"];
//this wont work

//CONST OBJECTS
const suv ={name:"GLE", type:"mercedes",model:"500", yom:"2023"};
//you can change the properties
suv.name ="GLEX";
//you can add an property
suv.color="black";
//but you cant reassign the object itself
//redclaring concept is same as let keyword


//let keyword is used to enable changing of values of the variable
//must be declared before use
// variable declared with let have a block scope
// variables declared with let cannot be redeclared
const pressure=100;
const tension=3;
let hypertension= pressure*tension;

console.log(hypertension);

//BLOCK SCOPE
//variables declared inside a {}cannot be accesesed outside the block

{
    let x=2;
}

//global scope
//variables declaredwith var always have a global scope
//variables declared with var inside a block scope can be accessed outside the block
{
    var x=2;
}

//REDECLARING VARIABLES
//redeclaring a variable using var can cause problems
//variables redeclared using var inside the block get redeclared outside the block too
//redeclaring the variable with the let keyword fixes this problem

let a=10;
{
    let a=3;
}
console.log(a);

//redeclaring a variable using var is allowed anywhere in the program
//with let redeclaring a variable in the same block isnt allowed
//redeclaring with let in another block is allowed



