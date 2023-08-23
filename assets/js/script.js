// Assignment Code
const generateBtn = document.querySelector("#generate");

//variable for character amount 
const charAmountRange = document.getElementById("charAmountRange");
//variable for character amount number
const charAmountNumberRange = document.getElementById("characterAmountNumber");
//variable for upper case
const charUpperCaseRange = document.getElementById("charUpperCaseRange");
//variable for lower case
const charLowerCaseRange = document.getElementById("charLowerCaseRange");
//variable for special characters
const charSymbolsCharacters = document.getElementById("charSpecialSymbols");

//change this
const passwordDisplay = document.getElementById("passwordDisplay");

//arrays for character ascii codes
const UpperCaseCharCodes = arrayFromLowToHigh(65, 90)
const LowerCaseCharCodes = arrayFromLowToHigh(97, 122)
const SymbolsCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromHighToHigh(58, 64)).concat(arrayFromHighToHigh(91, 96)).concat(arrayFromHighToHigh(123, 126))
const NumberCharCodes = arrayFromLowToHigh(48, 57)

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

form.addEventListener("submit", event => {
  event.preventDefault();
  //the value needs to be changed to input of alert prompt
  const charAmountRange = charAmountRange.value
  const includeUppercase = includeUppercase.value
  const includeLowercase = includeLowercase.value
  const characterAmountNumber = characterAmountNumber.value
  const includeSymbols = includeSymbols.value
  const passwordgen = generatePassword(charAmountRange, characterAmountNumber, includeUppercase, includeLowercase, includeSymbols){
    //set the id of the box to this field below to get output
    passwordDisplay.innerText = passwordgen 
  }

  //generate password based on inputs and set arrays of characters to be used for password generation
function generatePassword(charAmountRange, characterAmountNumber, includeUppercase, includeLowercase, includeSymbols){
  let charCodes = LowerCaseCharCodes
  if (includeUppercase) charCodes = charCodes.concat(UppercaseCharCodes)
  if (characterAmountNumber) charCodes = charCodes.concat(NumberCharCodes)
  if (includeSymbols) charCodes = charCodes.concat(SymbolsCharCodes)
  const passwordCharacters = []

  for (let i = 0; i < characterAmount, i++){
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode)
  }
  return passwordCharacters.join('')

}

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//event to set amount of characters and number of characters
function setCharAmount(event){
  const value = event.target.value
  charAmountRange.value = value
  characterAmountNumber.value = value

}
