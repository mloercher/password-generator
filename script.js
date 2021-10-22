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
      
    const totalLength = prompt('How many characters would you like to use?');
    if(totalLength >= 8 && totalLength <= 128) {
        alert(`Your new Password will be ${totalLength}
        characters long`);
    }  
   // var options = {
     //   hasNumber : window.confirm('Would you like to include numbers?'),
       // hasUppercase : window.confirm('Would you like to include Upper case letters?'),
        //hasLowercase : window.confirm('Would you like to include Lower case letters?'),
        //has Symbol : window.confirm('Would you like to include Special characters?'),
    //};
  
    //if(options.hasNumber === false && options.hasUppercase === false && options.hasLowercase === false && options.hasSymbol === false)

    let upper = confirm("Would you like to include Upper case letters?");
    let lower = confirm("Would you like to include Lower case letters?");
    let symbol = confirm("Would you like to include Special characters?");
    let number = confirm("Would you like to include numbers?");

    let allChars = "";
    let password = "";

    if(upper) {
        allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lower) {
        allChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (symbol) {
        allChars += "@%+\\/'!#$^?:,)(}{][~-_."
    }
    if (number) {
        allChars += "0123456789";
    }

    //generate pw macthing selected values 
    //create a for loop to iterate selected values
    //return the generated password

    else {
        alert('Please correctly answer the password criteria prompts :)')
    }




}


  // Write password to the #password input
  function writePassword() {
  
    //get user options
    //var userOptions = getUserOptions();
    
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  