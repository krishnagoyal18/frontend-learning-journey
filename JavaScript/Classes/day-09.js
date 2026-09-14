//Compile time error
// console.log(1;//Syntax Error

//Runtime Error
// console.log(x);//Referance error
//Handling - using try catch method
// try {//Try mai ham jisme error aa skata hai usko likhte hai
//    console.log("Try block starts here.");
//    console.log(x);
//    //-> Refenrence error
//    console.log("Try Block ends here.");//Agar uper error aa gya toh nichr kr statement ni chelga 

//    //a

//    //b
   
//    //c
// }
// catch(e){//Catch mai hm likhte hai ki error k sath hmm kya kr sakte hai 
//    //retry logic
//    //fallback mechanism
//    //logging
//    //Customer error
//    console.log("I am in catch block.");
//    console.log("Here is your error: ",e);
//throw is use put custom error -> jo hm khud bhi daal sakte hai 
//Create custom errors
//    throw new Error("bhai phele declare kro , phir print krna .");
// }
// finally{
//    console.log("I am running everytime, as i am finally block.")
// }
