//Temporal Dead Zone 
//let ke dwara declare liya hua variable hoist nahi ho pata 
// console.log(marks);//Not possible
// let marks = 100;
// console.log(marks);//First line 
// console.log("krishna");
// console.log(23);
// let marks = 100;//last line 
//in between first line to last line is a  temporal dead zone 
//use of let or const shows error

//Classes - It is a blueprint of objects
// class Human{
//    //properties
//    name = "Krishna"//Publically use
//    age = 19 //Publically use
//    #wt = 67//Private use
//    ht = 170;
//    //constructor
//    constructor(newAge, newHeight){
//       this.age = newAge;
//       this.ht = newHeight;
//    }

//    //Behaviour
//    walking(){
//       console.log("I am Walking",this.#wt);//This is ham kisi bhi object ko call kr sakte hai 
//    }
//    running(){
//       console.log("I am running");
//    }
//    get fetchWeight(){
//       console.log(this.#wt);
//    }
//    set modifyWeight(val){
//       this.#wt = val;
//    }
// }
// let obj = new Human(25,180);
// console.log(obj.age);//19
// console.log(obj.ht);
// obj.walking();
// obj.fetchWeight;

//For fetching private values we use getters and setters

//Default Parameters - It allow to use function with default values

// function sayName(myName = "Prabhu Deva"){//This name is set as default name 
//    console.log("My name is:",myName);
// }
// sayName("Krishna");
// function syName(fName,lName){
//    console.log("My name is :",fName," ",lName );
// }
// syName("Krishna");//In this situation Krishna   Undefined printing this

//Dependent case
// function syName(fName = "Pari", lName = fName.toUpperCase()){
//    console.log("My name is :",fName ," ",lName);
// }
// syName();//Pari  PARI

//Setting default object
// function solve(value = {age:19,wt:67,height:170}){
//    console.log(value);
// }
// solve();//{age:19,wt:67,height:170}
//If this is empty so it will print default values 
//If we will pass the value so that value will bhi print
//we can also pass array in default parameters

//Setting default function

// function getAge(){
//    return 56;
// }
// function utility(name = "Krishna" , age = getAge()){
//    console.log(name," ", age);
// }
// utility();//Krishna  56

//In-Built Objects
//Math object
// console.log(Math.PI);//3.141592
// console.log(Math.max(20,30,40,10,50));//50
// console.log(Math.min(20,30,40,10,50));//10
// console.log(Math.round(3.12));//3
// console.log(Math.ceil(1.9));//2
// console.log(Math.abs(-7));//7
// console.log(Math.random());//random value
// console.log(Math.sqrt(100));//10
// console.log(Math.pow(2,3));//8


//Date object
// let curr = new Date();
// console.log(curr);//Printing current date and time

//Object cloning
//Objects are dynamic in nature
// let obj = {
//    name : "krishna",
//    age : 19,
//    wt : 67,
//    heigth : 170
// }
// console.log(obj);
// obj.color = "White";
// console.log(obj);

// let src = {
//    name : "krishna",
//    age : 19,
//    wt : 67,
//    heigth : 170
// }
// let dest = {...src};//Cloning using three dots also called spread operator
// src.age = 60;
// let dest = Object.assign({} , src);//using assign clone
//using iteration for loop
// console.log(src);
// console.log(dest);