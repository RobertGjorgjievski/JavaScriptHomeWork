numberArray = [43, 23, 53, 4, 15];

let divMain = document.getElementById("divMain");

function htmlPrint(array){
    for( let i = 0; i < array.length; i++ ){
        divMain.innerHTML+= 
        `<ul>
            <li> ${array[i]} </li>
        </ul>
        `
    }
}
function sum(array){
    let arraySum;
    for(let i = 0; i < array.length; i ++){
        arraySum = arraySum + array[i];
    }
    divMain.innerHTML+=
    `<div>  (${array[0]} + ${array[1]} + ${array[2]} + ${array[3]} + ${array[4]}) = ${arraySum} </div>
    <span> Kako da konertiram vo integer ? .innerHTML == "string" </span>
    `
    
};
htmlPrint(numberArray);
sum(numberArray);