// Assignment code here
var generateBtn = document.querySelector("#generate");

//Array of Uppercase characters to be included in PW

var upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//Array of lowercase characters to be included in PW
var lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
//Array of numeric characters to be included in PW
var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];
//Array of special characters to be included in PW
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
/*var allChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'

]*/

// GENERATE PASSWORD FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function generatePassword() {

// Getting User PW parameters
const pwLength = window.prompt("How many characters would you like your password to be?");
if(pwLength < 8 || pwLength > 128) {
  alert('Please select a valid character length!');
  }else {
    var upper = confirm('Would you like to use Uppercase characters?');
    var lower = confirm('Would you like to use lowercase characters?');
    var numeric = confirm('Would you like to use numeric characters?');
    var special = confirm('Would you like to use special characters?');
  }
  let allChars ='';
  
if (upper) {
  allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (lower) {
  allChars += "abcdefghijklmnopqrstuvwxyz";
}
if (numeric) {
  allChars += "0123456789";
}
if (special) {
  allChars += "@%+\\/'!#$^?:,)(}{][~-_.";
}

if(upper === false && lower === false && numeric === false && special === false){
  alert('Please select valid password parameters!');
}


console.log('allChars:',allChars)
var outputString ="";
for (var i = 0; i < pwLength; i++) {
outputString += allChars.charAt(Math.floor(Math.random() * allChars.length));
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