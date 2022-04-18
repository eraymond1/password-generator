// Assignment code here
var generateBtn = document.querySelector("#generate");





function generatePassword() {
var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLc = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*_-+=";
var num = "0123456789";
var length = 0;
var password = "";
var pass = "";

var con = false;





while (length < 8 || length > 128) {

  length = window.prompt("Please enter length of password.");

  if (length < 8 || length > 128){
    window.alert("Requires a min of 8 charecters!");   
    
  } else {
    pass += num;
    break;
  }

}

var upper = "";

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

var lower = "";

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

var sym = "";

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








num = pass;

for (var i= 0; i < length; i++){
  var random = Math.floor(Math.random() * pass.length);

  password += pass.substring(random, random + 1);
}




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
