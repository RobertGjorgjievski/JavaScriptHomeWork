// HOMEWORK PART 2
// Create a header generator

// Create two inputs, one for text and one for color
// Create a button that says: generate h1
// Create an h3 element for messages
// When the button is clicked create a new header below the inputs and button
// The new header should have the text and color from the inputs
// If the person enters an invalid color or an empty text show an error message to the message element
//  You must use JQuery to complete the task

$(document).ready(function(){

    $("#btn").click(function(){
        let textHeaderInput= $("#textHeader").val();
        let colorHeaderInput= $("#colorHeader").val();
            if(textHeaderInput == ""){
                $("#errorMessage").text("ERROR: Entear text !!!")
            }
                else {
                    $("#errorMessage").hide();
                    $("#header").text(textHeaderInput).css("color",colorHeaderInput);
                }
    })

});