// Assignment code here

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
  var generateBtn = document.querySelector("#generate");
  //var characters = prompt ("how many characters must your password be?");
  
  
  // Gnerate password
  function generatePassword(){
  
  
  }
  
  function getUserOptions () {
  
    var userChoice = {};
  
    //check user options
      var userChoices = getUserOptions();
    
      //ask for length
      var length = prompt('how many characters must your password be? (between 8-128 for best security)')
  
      ///To-Do (later): validate length
    
      //sign to userOptions
      userChoices.length = length;
      
  
      //ask for upperCase
      var upperCase = confirm("do you want to use Upper Case characters?")
  
      //sign to userOptions
      userChoices.upperCase = upperCase;
      
  
      //ask for lowerCase
      var lowerCase = confirm('do you want to use lowercase characters?')
  
      //sign to userOptions
      userChoices.lowerCase = lowerCase;
  
      //ask for aplhanumerica
      var numeric = confirm('do you want to use numeric characters?')
  
      //sign to userOptions
      userChoices.numeric = numeric;
  
      //ask for special characters
      var special = confirm('do you want to use special characters?')
  
      //sign to userOptions
  
      userChoices.special = special;
      return userChoices;
  
  
      
  
  
  
  
  
    console.log(parseInt(length))
  }
  
  
  // Write password to the #password input
  function writePassword() {
  
    //get user options
    var userOptions = getUserOptions();
    
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  