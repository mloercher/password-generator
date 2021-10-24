// Assignment code here
var generateBtn = document.querySelector("#generate");

// GENERATE PASSWORD FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function generatePassword() {
  // Getting User PW parameters
  const pwLength = window.prompt(
    "How many characters would you like your password to be?"
  );
let upper
let lower
let numeric
let special

const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numericChars = "0123456789";
const specialChars = "@%+\\/'!#$^?:,)(}{][~-_.";
  if (pwLength < 8 || pwLength > 128) {
    alert("Please select a valid character length!");
  } else {
     upper = confirm("Would you like to use Uppercase characters?");
     lower = confirm("Would you like to use lowercase characters?");
     numeric = confirm("Would you like to use numeric characters?");
     special = confirm("Would you like to use special characters?");
  }
  let allChars = "";
  
  let guaranteedChars = "";
  

  if (upper) {
    guaranteedChars += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length))
     allChars += upperCaseChars;
     // allChars = allChars + upperCaseChars;
  }
  if (lower) {
    guaranteedChars += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length))
    allChars += lowerCaseChars;
  }
  if (numeric) {
    guaranteedChars += numericChars.charAt(Math.floor(Math.random() * numericChars.length))
    allChars += numericChars;
  }
  if (special) {
    guaranteedChars += specialChars.charAt(Math.floor(Math.random() * specialChars.length))
    allChars += specialChars;
  }

 console.log(guaranteedChars);
  if (
    upper === false &&
    lower === false &&
    numeric === false &&
    special === false
  ) {
    alert("Please select valid password parameters!");
  }

  //console.log("allChars:", allChars);
  var outputString = guaranteedChars;


  for (var i = 0; i < (pwLength - guaranteedChars.length); i++) {
    outputString += allChars.charAt(
      Math.floor(Math.random() * allChars.length))
      // Math.floor(5.3) --> 5
      // Math.floor(9.9) --> 9
      // (0.67364526435 * 26) --> 17.51
      // Mat.floor(17.51) ---> 17
    console.log(outputString);
  }





  return outputString;

  //else

  //Create for loop to iterate over user chosen characters
  //return the generated password
  //return password;
}
// END GENERATE PASSWORD FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*if ALL values are true, generate random pw using allChars
if (confirm.upper === true, confirm.lower === true, confirm.numeric === true, confirm.special === true){
  Math.floor(Math.random(allChars) * (1 + High - Low)) + Low;
}*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
