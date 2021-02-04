document.getElementById("resultButton").addEventListener("click", function() {
    let receptName = prompt("Name of the recept");
    let numberIng = Number(prompt("Insert numb of ing."));
    let tempArray = [];
    
    for (let i = 0; i < numberIng; i++) {
        let ingredient = prompt("Ingredient name");
    
        tempArray.push(ingredient);
    }

    document.getElementById("result").innerHTML = (
        `
            <h1>${receptName}</h1>
            <ul>
                ${tempArray.map(element => {
                    return (
                        `<li>${element}</li>`
                    )
                }).join("")}
            </ul>
        `
    )

}, false)