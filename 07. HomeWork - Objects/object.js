
// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console 
//a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

// prompt(" Sey Hello")
// let animal={
//     name: 'Dolly',
//     kind: 'Dog',
//     speak: function() {
//         alert(`${this.name} says : Hey bro!!!`)
//     }
// };
// animal.speak();


// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. 
// The object should have the next    properties: title, author, 
//readingStatus and a method that will return info depending on the readingStatus
// e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// Yu still need to read 'Mockingjay: The Final Book of The Hunger Games' oby Suzanne Collins.(if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML



function Book (title,avthor, readingStatus){
    this.title = title;
    this.avthor = avthor;
    this.readingStatus = readingStatus;
    this.method  = function(){
        if(this.readingStatus !== 'true'){
            
            alert(`You still need to read ${this.title} by ${this.avthor}`);
        }
            else {
                alert(`Nice`);
        }
    }
    
};
let titile = prompt("Enter the title of the book");
let avthor = prompt("Enter the avtor of the book");
let readingStatus = prompt("Enter the reading status of the book");


let yourBook = new Book (titile, avthor , readingStatus);
    yourBook.method();