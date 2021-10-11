// Assignment code here

// Define variables
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '"', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', ']', '{', '}', '~'];
var response = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define prompts
function generatePassword() {
  var confirmation = false; 
    do {
      var confirmLength = window.prompt("Please confirm your password length. (Input a value between 8 & 128)");
      var confirmLowerCase = window.confirm("Would you like to use lowercase characters in your password?");
      var confirmUpperCase = window.confirm("Would you like to use uppercase characters in your password?");
      var confirmNumeric = window.confirm("Would you like to use numeric characters in your password?");
      var confirmSpecial = window.confirm("Would you like to use special characters in your password?");
      if ((confirmLength < 8) || (confirmLength > 128)) {
        window.alert("Please specify a value between 8 & 128");
      } else {
        confirmation = true;
      }
    }
    // define action if true
    while (!confirmation) {
      for (var i = 0; i < confirmLength; i++) {
        if (confirmLowerCase) {
          response.push (lowerCase[Math.floor(Math.random() * lowerCase.length)]);
        }
        if (confirmUpperCase) {
          response.push (upperCase[Math.floor(Math.random() * upperCase.length)]);
        }
        if (confirmNumeric) {
          response.push (numeric[Math.floor(Math.random() * numeric.length)]);
        }
        if (confirmSpecial) {
          response.push (special[Math.floor(Math.random() * special.length)]);
        }
      }
      return response.join("")
    }  
  }
