
// HomeWork #1 -----------------------------------------------------------

// let messageArray = ["This","is","message","form","the","future"];
// let msg = "";
//   function message(array) {
//      for (let i = 0; i < array.length; ++i) {
//             msg = msg + array[i] + " ";
//          } 
//          console.log(msg);
// }
//  message(messageArray);



//  HomeWork #2 ----------------------------------------------------------

// for (let i = 1; i <= 20; i++) {
//   if(i%2 == 0){
//     console.log(i + " \n \n");
//   }
//     else{
//         num2 = i ;
//         console.log(i + " odd");
//     }
// }

//  HomeWork #3 ----------------------------------------------------------

// numberArray = [23, 44, 67, 21, 11, 54, 33, 99];
// let maxNumber = 0;
// let minNumber = Infinity;
// let  sum = 0;
// let i ;
// let j ;
// function sumMaxMix(array) {
//     for (i = 0; i < array.length; i++){
//         if(array[i] > maxNumber) {
//             maxNumber = array[i];
//         } else {
//             continue;
//         }
// }
// console.log (`Max number is : ${maxNumber}`);

//     for (j = 0; j < array.length; j++){
//         if(  array[j] < minNumber ) {
//         minNumber = array[j];
//     } else {
//         continue;
//     }
// }
// console.log(`Min number is :  ${minNumber}`)
// sum = maxNumber + minNumber;
// console.log(`Sum of ${maxNumber} + ${minNumber} is ${sum} `);
// }

// sumMaxMix(numberArray);


// HomeWork #4 ----------------------------------------------------------
// HOMEWORK #4
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]


let firstName = ["Bob" , "Jeff ","Bil ", "Elon", "Tim "];
let lastName = ["Dylan","Bezos","Gejts","Mask","Cook"];
let fullNameArry = [];

function fullName (firstName,lastName){
    
    for(let i = 0; i < firstName.length; i++){
       
        for(let j = 0; j < lastName.length; j++){
            fullNameArry.push(`${i +1} ${firstName[i]} ${lastName[j]}`);
        }
} 
    console.log(fullNameArry);  
}
fullName(firstName,lastName);

    