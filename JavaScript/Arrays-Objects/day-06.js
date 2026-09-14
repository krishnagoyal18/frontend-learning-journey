//Array - collection of items/elements
//syntax 
//let arr = [1,2,3,'Krishna']
//refernce type : object array , function
//actual data store in heap memory 
//In stack store as a referance 
//ex = let arr = [1,2,3];
//arr as a referance 
// inr [1,2,3] is data
//object - collection of key value pairs
//syntax ;
/*let obj = {
   name: "Krishna",
   age: 19,
   weight : 66
   walk : function nameCall(){}
   } */
// let obj = {
//    name : "Krishna",
//    Age : 19,
//    weight : 66,
//    height : "5ft 7in",
//    greet : function(){
//       console.log("Hello ji kaise ho.")
//    },
//    arr : [1,2,3,4,'Krishna']
// };
// console.log(obj);
// obj.greet();
// let obj2 = obj;//Shallow copy
// let arr = [1,2,3,4,'Krishna'];
// console.log(arr);
//Array constructor
// let brr = new Array(1,'Krishna',4,5);
// // brr.push('Goyal');//Push is use to insert something
// // brr.pop();//Pop is use to remove last element
// // brr.shift();//It is use to remove first element
// // brr.unshift('KG');//Add element in left side
// // brr.slice(1,3);//It takes some part from array
// brr.splice(1,2,'Goyal');//It changes the content of array - insert, replace
// console.log(brr);

// let arr = [10,20,30];
// arr.map((number)=>{
//    console.log(number+1);//simple printing
// })
// // let ansArray = arr.map((number)=>{//map is a function 
// //    return number*number;
// // })
// // console.log(ansArray);

// let arr = [1,2,3,4,5,6];
// let evenArray = arr.filter((number)=>{//It is use to filtering the numbers
//    return number%2==0;
//    // if(number%2==0){
//    //    return true;
//    // }
//    // else{
//    //    return false;
//    // }
// })
// console.log(evenArray);

//Reduce - it is use to do operations like addition or insert
//  accumulator and current
//First is accumulator and second is current
// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr)=>{
//    return acc + curr;
// },0)//0 is use for accumulator
// console.log(ans);//100

// let arr = [9,4,2,6,4,7];
// arr.sort();//Sorting in ascending order
// console.log(arr);
// let arr = [9,4,2,6,4,7];
// arr.sort((a,b)=>b-a);//for descending order
// console.log(arr);
// console.log(arr.indexOf(6));//3
// let ans = console.log(arr.find(arr => arr>2));
// console.log(ans);


//For each - array ke har element ko index number ke sath print krana 
// let arr = [10,20,30];
// let lengt = arr.length;
// console.log(lengt);
// arr.forEach((value, index)=>{
//    console.log("Number:",value, "Index:",index);
// })

//for in - key values print krane ke liye 
// let obj = {
//    name : "Krishna",
//    Age : 19,
//    weight : 66,
//    height : "5ft 7in",
//    greet : function(){
//       console.log("Hello ji kaise ho.")
//    },
//    arr : [1,2,3,4,'Krishna']
// };
// for(let key in obj){
//    console.log(key," ",obj[key]);//Printing all keys
// }

//For of - string ya array ki value print krana 
// let arr = [10,20,30,40];
// for(let value of arr){
//    console.log(value);
// }
// let fullName = "Krishna";
// for(let val of fullName){
//    console.log(val);//Print single single character
// }

//array with functions
// let arr = [10,20,30,40,50];
// function getSum(arr){
//    let sum = 0;
//    arr.forEach(value => {
//       sum = sum + value;
//    });
//    return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);