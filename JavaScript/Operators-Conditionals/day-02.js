//Operators
// Operators are symbols or keywords that perform operations on values (operands).
//+ , - , * , / , % , & , ^
//types of Operators - Arithmetic , assignment , comparision , logical , bitwise

//Arithmetic - Unanry-one operend , Binary-two operend
// console.log("Krishna")
// let a = 3;
// let b = 4;
// let c = 5;
// let sum =  (++b) - (++c);
// console.log(sum)
//Assignment Operator 
//ex let a  = 5; Equal sign is assignment operator 
// let a = 10;
// let b = 11;
// a += 10;
// console.log(a);

//Comaparision Operator
// <,>,<=,>=,==,===,!==
// let a = 4;
// let b = 4;
// if(a==b){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// console.log(10<5);
//ternary Operator
// let age = 2;
// let status = (age > 18)? 'I can Vote':'I cannot vote;'
// console.log(status);
//Logical operator : do condition ko merge krne ke liye
//&& - and  , || - or  , ! - not
// let ans = (true || false || true )
// if(ans == false){
//     console.log("true");
// }
// else{
//     console.log("false")
// }
//Working with non booleans
//condition truthy orfalsey 
//falsey - undefined, null, 0, flase, NaN, ' ' 
//Truthy - Anything expect falsey
// console.log(false  || 7);
//Bitwise operator 
//AND OR NOT << - left shift >> - right shift XOR - do same toh 0 diff 1
// console.log(2 != 5);
// console.log(~(0));//-1
//Take 1's complement then 2's so it is -1
//~ - bit level per fliping krta hai 
// console.log(2^2);
//Jab bhi kisi number ko left shfit krte hai toh woh 2 se multiply ho jata hai - <<
//Jab bhi kisi number ko right shfit krte hai toh woh 2 se divide ho jata hai - >>

//Conditional statements
//if-else
// let agh = 23;
// if(agh>18){
//     console.log("Right to vote");
// }
// else{
//     console.log("Not Right");
// }
//Switch case
// let num = 3;
// switch(num){
//     case 1 : console.log('A')
//     case 2 : console.log('B')
//     case 3 : console.log('C')
//     case 4 : console.log('D')
//     default : console.log('F')
// }