//Functions - First class citizens
//It is a block of code which performs specific task
/*fucntion FunctionName(parameter1,Parameter2,...){
   // function body 
   // code to be executed
   // return value;
// }*/
// console.log("Krishna");
// function sayMyName(){
//     console.log("Kg")
// }
// sayMyName();

// function printCounting(){
//     for(let i=1; i<=10; i++){
//         console.log("Krishna Goyal");
//     }
// }
// printCounting();
// //With Parameters
// function printNumber(num){
//     console.log("Printing Number:"+num);
// }
// printNumber(5);

// function getAverage(num1,num2){
//     let avg = (num1+num2)/2;
//     console.log("Printing Average:",avg);
// }
// getAverage(3,7);
// //USing return
// //ex = agar dukandar ko paise dunga toh woh bhi toh kch nah kch saman dega hi
// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
//     //unreachable Statements
//     let a = 5;
//     let b = 5;
//     let sum = a+b;
//     console.log(sum);
// }
// //or uss saman ko mai kisi polythene mai hi lunga hath mai toh nahi 
// //Variable bnana jaruri hai
// //funtion call kisi variable mai hi krana hai 
// let ans = getSum(1,3,5);
// console.log(ans);

// function getMyName(first,last){
//     let fullNaam = first + last;
//     return fullNaam;
    
// }
// let full = getMyName("Krishna","Goyal");
// console.log(full);

// //Arrow Functions
// let getExp = (a,b) => {
//     let ans = a**b;
//     return ans;
// }
// console.log(getExp(2,3));


//Hoisting 
//yai variable and function declaration ko top per shift kr deta hai
// function sayMyName(){
//    console.log("Krishna Goyal");
// }
// function greetMe(greet, fullName){
//    console.log("Hello",fullName);
//    greet();
// }
// function greet(){
//    console.log("Greetings for the day.");
// }
// greetMe(greet,"Krishna");
//var pe hoisting ho jaati hai bakki kisi pe ni hoti 
// function solve(number){ //function ke andar funtion
//    return function(number){
//       return number*number;
//    }
// }
// let ans = solve(3);
// let finalAns = ans(10);
// console.log(finalAns);