// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var capAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialCharacter = "!@#$%&*?";

function generatePassword() {
  var passwordLength = parseInt(prompt("How long do you want you password? "))
  if (passwordLength >= 8 && passwordLength <= 128) {
    var alphabet = confirm("Do you want to include lowercase letters? ");
    var capAlphabet = confirm("Do yo wasnt to include uppercase letters? ");
    var number = confirm("Do you want to include numbers?" );
    var specialCharacter = confirm("Do you want to include special characters?" );
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
