// Array of special characters to be included in password
// var passwordLength = prompt("How many characters would you like your password to be");
// var upperCase = window.confirm("Would you like to include uppercase characters in your password?");
// var lowerCase = window.confirm("Would you like to include lowercase characters in your password?");
// var numeric = window.confirm("Would you like to include numbers in your password?");
// var specials = window.confirm("Would you like to include special characters ie. #/$£*, in your password?");

// passwordLength = prompt("How many characters would you like your password to be")
//  while (passwordLength < 8 ){
//   prompt("Password has to be a minimum of 8 characters and max 128 characters, please try again");
// } if (passwordLength > 8){
//   alert("Your password will have " + passwordLength + " characters")
// }
//   else (passwordLength > 8);
// prompt("Your password will have" + passwordLength + " characters");
//  }
// do {
//   prompt("Password has to be a minimum of 8 characters and max 128 characters, please try again")
// }
// while (passwordLength < 8 || passwordLength >128);

  // upperCase = window.confirm("Would you like to include uppercase characters in your password?");
  // lowerCase = window.confirm("Would you like to include lowercase characters in your password?");
  // numeric = window.confirm("Would you like to include numbers in your password?");
  // specials = window.confirm


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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
var passwordLength = 0;
var upperCase;
var lowerCase;
var numeric;
var specials;


// Function to prompt user for password options
function getPasswordOptions() {
  let combination = []
  passwordLength = prompt("How many characters would you like your password to be");
  passwordLength = +passwordLength
  if (passwordLength < 8 || passwordLength >128){
   alert("Password has to be a minimum of 8 characters and max 128 characters, please try again");
  getPasswordOptions()
 } else if (passwordLength > 8 || passwordLength < 128){
  alert("Your password will have " + passwordLength + " characters");
  upperCase = confirm("Would you like to include uppercase characters in your password?")
  if (upperCase === true){
combination = combination.concat(upperCasedCharacters);
  };
  lowerCase = confirm("Would you like to include lowercase characters in your password?");
  if (lowerCase === true){
    combination = combination.concat(lowerCasedCharacters);
  }
  numeric = confirm("Would you like to include numbers in your password?");
  if (numeric === true){
    combination = combination.concat(numericCharacters);
  }
  specials = confirm("Would you like to include special characters ie. #/$£*, in your password?");
  if ( specials===true){
    combination = combination.concat(specialCharacters);
  }
  let password = ""
  for(let i=0; i<passwordLength;i++){
    password = password + combination[Math.floor(Math.random()*combination.length)];
  }
  return password
 }

}



console.log(passwordLength)

// // Function for getting a random element from an array
function getRandom(arr) {
console.log(lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)])
}

// // Function to generate password with user input
function generatePassword() {
  return getPasswordOptions();
  // return "This works!!!"
}

// // Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getRandom();