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



while (length < 8) {
  length = window.prompt("Please enter length of password.");
  if (length < 8){
    window.alert("Requires a min of 8 charecters!")
  } else {
    pass = num;
    break;
  }
}

var upper = window.prompt("Do you want uppercase letters?")

if (upper === "" || upper === null) {
  window.alert("You need to make a selection!");
  upper = window.prompt("Do you want uppercase letters?")

}else if (upper === "no"){

}else if (upper === "yes"){
  pass += alphaUp;
}

var lower = window.prompt("Do you want lowercase letters?")

if (lower === "" || lower === null){
  window.alert("You need to make a selection!");
  lower = window.prompt("Do you want lowercase letters?")
}else if (upper === "no"){

}else if (upper === "yes"){
  pass += alphaLc;
}
num = pass;

for (var i= 0; i < length; i++){
  var random = Math.floor(Math.random() * pass.length);

  password += pass.substring(random, random + 1);
}
console.log("clicked");



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
