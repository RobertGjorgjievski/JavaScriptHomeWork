// HOMEWORK
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)




function maketable (){
    let table = document.getElementById("tab");
    let row = document.getElementById("rows").value;
    let column = document.getElementById("cols").value;
    
    for(var i = 0; i< row ; i++){
        var tr = document.createElement("tr");

        for(var j = 0; j < column; j++){
        var td = document.createElement("td");
        var  text = document.createTextNode(`Row - ${i} Column ${j}`);

        td.appendChild(text);
        tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
document.getElementById("make").addEventListener('click',maketable);