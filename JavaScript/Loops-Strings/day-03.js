//Loops
//jab hame kch bhi set of instructions baar baar print krane ho toh loop use krte hai
//Syntax
//for(initialization; Condition; Updation){ content  }
// let n = 10
// for(let i=1; i<=n; i++){
//     console.log("Akshat");
// }
//for loop using break
//Break - yai key word lgte hui loop se bhar
// let n = 5;
// for(let i = 1; i<=n; i++){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);//output - 1 2
//     }
// }
//Continue keyword - current iteration ko skip krna
// let n = 5;
// for(let i = 1; i<=n; i++){
//     if(i==4){
//        continue;
//     }
//     else{
//         console.log(i);//output - 1 2
//     }
// }

//While loop
//Syntax - while(condition){ console.log();  updation;}
// let i =1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
//not stuck in infinite loop
// let i =1;
// while(i<=5){
//     if(i==3){
//         i++;
//         continue;
//     }
//     else{
//         console.log("HI");
//         i++;
//     }
// }

//Strings - Sequence of Characters
// let firstName = "Krishna";
// let lastName = 'Goyal';
// let nam = `This is 
// my 
// name
// Krishna`;//Agar enter krke bhi koi string likhni hai toh backticks `v` ka use  hota hai
// //This is called template strings
// console.log(firstName);
// console.log(lastName);
// console.log(nam);
// let naam = new String("Krishna Goyal");
// console.log(naam);

//String Operations
//Concatination, Substring, length, Uppercase, LowerCase, charAT, indexOf(Location)

//Concatination
// let opt1 = "Krishna ";
// let opt2 = "Goyal ";
// let ans = opt1 + opt2 ;
// console.log(ans); //Krishna Goyal 
//Value access with backticks
// let opt1 = "Krishna ";
// let opt2 = "Goyal ";
// let final = `${opt1}${opt2}`;
// console.log(final);//Krishna Goyal
// console.log(opt1.length);//8
// console.log(opt2.toUpperCase());//GOYAL
// console.log(opt1.toLowerCase());//krishna
// console.log(opt1.substring(3));//shna  
//Substring 3 index se shuru ho rahi hai
//Split
// let sentance = "Hello jee kaise ho";
// console.log(sentance.split(' '));//['Hello', 'jee', 'kaise', 'ho']
//String ke andar string chiyen
// let sentance = "Hello jee \"kaise\"  ho";
// console.log(sentance);