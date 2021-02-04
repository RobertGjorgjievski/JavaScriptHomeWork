// 1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.



//----------------------------------------------
// let testArry = [];
// function divisable (){
//     for(i = 1 ; i <= 100 ; i++){
//         if (i % 3 == 0 && i % 7 ==0 ){
//                 testArry.push(i);
//         }
//     } 
//     console.log(testArry);
// }
// divisable();
//-----------------------------------------------

// 2. Create a Javascript ATM machine. 
// The ATM should have the following functions:
// - make desposit (this function should add money to the users balance)
// - make withdrawal (this function should should withdraw money to the users balance)
// - get the balance (this function should display the current balance of the user)
// - exit (this function should close the window)
// create interactive menu using alerts


// ----------------------------------------------
// let balance = 20000;
// function ATM (){
// let input =  prompt ("What do you  wanna do: make desposit , make withdrawal, get the balance and exit");
// // let num1 = 0;

//     if (input == "desposit"){
//         function add (num1){
//          num1 = Number(prompt ("How much money to add:"));
//         balance += num1;  
//         }
//         add();
//     } else if (input == 'withdrawal'){
//         function getMoney(num2){
//             num2 = Number(prompt ("How much money do you wonna to get: "));
//             balance -= num2;
//             alert ( "Your balans is: " + balance);
//         }
//         getMoney();
//     } else if (input == "balance"){
//         function yourBalance (){
//          alert(`Your blance is $${balance}`);
//         }
//         yourBalance();
//     } else if (input ==  'exit'){
//         function exit (){
//             alert("GoodBye");
//         }
//         exit();
//     } 
//    return ATM();
 
// }
// ATM();

//--------------------------------------------------------------------------

// Login / Register app 
//1. Writ a simple register program that will take new user's username and password and save it.
//    Display the usernames of all existing users in a list.
//  - Users should be stored in array of User objects
//  - Array need to have one admin user by default when the application is started
//  - User need to have at least 3 properties: Username, Password and isAdmin
// 2. Write a simple login program that will require user's username and password to be entered. 
//    Display a message for the user that is logged in (ex. "Welcome Bob to our awesome app"). 
// 3. Add an option for logging out.
// 4. Add some further validation to all input fields for the usernames and passwords
//  - The user has to enter both username and password
//  - Register or login should not proceed with empty inputs
//  - Username needs to include more than 3 characters
//  - Password has to be longer than 6 characters
// 5. Add an admin panel that will check if the user is admin and display a message (ex. Welcome SuperAdmin).
//    Display all usersnames and passwords in a list or table.

//     --- code ---
// 1. 2 froms for login and register, one button for logout and one div which will have all users
// 2. Declaration and initialization of global variables (arraysOfAllUsers, currentUser)
// 3. events for each button (login, register, logout) and function
// 4. create function constructor User
// 5. Register: get the inpit or radio button value and check if they are empty or password less than 6 characters or username is less than 3 characters. If statment is correct, creat the user like let newUser = new User(username, password, isAdmin); Once it is created add it to the array.
// 6. Login: check if the two input fields values are empty? if not, check if there is username in the arrayOfAllUsers and if the password for that user is same with the password in the input field value. Once it is found currentUser should be the user that is found.
// 7. Logout: if currentUser !== null, than currentUser = {}
// 8. check if currentUser is admin and if it is admin show all users from arrayOfAllUsers in the div

// let arrayOfAllUsers = {
//     username: "Robert",
//     password: "robert154",
//     isAdmin: true
// }
// let inputSingUpUserName = document.getElementById("userNameSingUp").value;
// let passwordSingUp = document.getElementById("passwordSingUp").value;
// console.log(inputSingUpUserName);

// document.getElementById("singUp").addEventListener('click',function(){
//     arrayOfAllUsers.username.inputSingUpUserName;
//     arrayOfAllUsers.password.passwordSingUp;
//     arrayOfAllUsers.isAdmin = false
// },false);
