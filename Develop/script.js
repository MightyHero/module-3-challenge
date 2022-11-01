// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var capAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialCharacter = "!@#$%&*?";

function generatePassword() {
  var passwordLength = parseInt(prompt("How long do you want you password? "))
  if (passwordLength >= 8 && passwordLength <= 128) {
    var alphabetConfirmation = confirm("Do you want to include lowercase letters? ");
    var capAlphabetConfirmation = confirm("Do yo wasnt to include uppercase letters? ");
    var numberConfirmation = confirm("Do you want to include numbers?" );
    var specialCharacterConfirmation = confirm("Do you want to include special characters?" );
    console.log(alphabetConfirmation);
  } else {
    alert(
      "The user's password must be at least 8 characters long and no more than 128"
    );
    return;
    }
    var passwordCharacterContainer = [];
    if (alphabetConfirmation) {
      passwordCharacterContainer = passwordCharacterContainer.concat(
        alphabet.split("")
      );
    }
    if (capAlphabetConfirmation) {
      passwordCharacterContainer = passwordCharacterContainer.concat(
        capAlphabet.split("")
      );
    }
    if (numberConfirmation) {
      passwordCharacterContainer = passwordCharacterContainer.concat(
        number.split("")
      );
    }
    if (specialCharacterConfirmation) {
      passwordCharacterContainer = passwordCharacterContainer.concat(
        specialCharacter.split("")
      );
    }

    var randomPassword;

    for (1 = 0; 1 < passwordLength; i++) {
      var index = Math.floor(passwordCharacterContainer.length = Math.random());
      randomPassword += passwordCharacterContainer [index];
    }
    console.log(randomPassword);

    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
