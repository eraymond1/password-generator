// Assignment code here


var generateBtn = document.querySelector("#generate");

// generatePassword function is used to pass password criteria to writePassword()
function generatePassword() {

  /* The variables below are used to hold uppercase, lowercase, special characters, and numbers for the 
  creation of the password*/
var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLc = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*_-+=";
var num = "0123456789";

//length was used for the number prompt for input taken by user
var length = 0;
//var password is used in for loop to wrap the password together for output
var password = "";
//var pass is used to collect password criteria to hand off to password 
var pass = "";
// con is for while loop conditions until condition is validated true.
var con = false;




// while loop to check for min of 8 and max of 128
while (length < 8 || length > 128) {

  length = window.prompt("Please enter length of password.");

  if (length < 8 || length > 128){
    window.alert("Requires a min of 8 charecters!");   
    
  } else {
    pass += num;
    break;
  }

}


//declared upper above loop so it was clear this is used in the upper case loop
var upper = "";

//loop checks that user in inputing a yes or a no and I used .toLowerCase() to take all input and make it lower case to minimize conditional checks
while (con === false) {

  upper = window.prompt("Do you want uppercase letters? Please type yes or no.");
  
  if (upper.toLowerCase() === "no" || upper.toLowerCase() === "n") {
    
    break;
    
  }else if (upper.toLowerCase() === "yes" || upper.toLowerCase() === "y") {

    pass += alphaUp;
    break;

  }else  {
    window.alert("You need to make a valid selection. Please try again!");
    
  }
}

//declared lower here to make sure it was known this is for the below loop
var lower = "";

//loop checks that user in inputing a yes or a no and I used .toLowerCase() to take all input and make it lower case to minimize conditional checks
while (con === false){
  lower = window.prompt("Do you want lowercase letters? Please type yes or no.");

  if (lower.toLowerCase() === "no" || lower.toLowerCase() === "n"){
    
    break;
    
  }else if (lower.toLowerCase() === "yes" || lower.toLowerCase() === "y") {
    pass += alphaLc;
    break;
  }else {
    window.alert("You need to make a valid selection. Please try again!");
  }
}

//declared sym here to make it known this was for below loop
var sym = "";

//loop checks that user in inputing a yes or a no and I used .toLowerCase() to take all input and make it lower case to minimize conditional checks
while (con === false) {
  sym = window.prompt("Do you want to use special characters? Please type yes or no.")

  if (sym.toLowerCase() === "no" || sym.toLowerCase() === "n"){

    break;
    
  }else if (sym.toLowerCase() === "yes" || sym.toLowerCase() === "y") {

    pass += symbols;
    break;

  }else {
    window.alert("You need to make a valid selection. Please try again!");
  }

}

//for loop interates through the given length to create the random password with all the criteria selected
for (var i= 0; i < length; i++){

  //random uses Math.floor to round off decimal and math.random to multiply the password
  var random = Math.floor(Math.random() * pass.length);

  //use substring here to wrap everything together to give speficied length of password by user
  password += pass.substring(random, random + 1);
}

//return statement allows the data from function to be called
return password;
  
};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 // console.log(passwordText);
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
