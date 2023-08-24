


//   ?     @dpprdgls       ?   //
// ?   ?                 ?   ? //                                                                          
//   ?   MMMMMMMMMMMMM     ?   //
//   ?  |MMM        MMM|   ?   //
//     /\ __       __  /\      //
//  ? |$| ####===####  |$|  ?  //
//    |$| #### L ####  |$|     //
// ?   \/              \/    ? //
//       \     O      /        //
//   ?    |___   ___  |    ?   //
//    __ /   [ >x< ]   \ __    //
//  |                       |  //

let generateBtn = document.querySelector("#generate");

  //function to create the arrays of the ASCII characters
  function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++){
      array.push(i);
    }
    return array;
  }
  
  function generatePassword(){
    //empty array for character codes to be added to 
    let charCodes = []
   //arrays for character ascii codes
    const UpperCaseCharCodes = arrayFromLowToHigh(65, 90);
    const LowerCaseCharCodes = arrayFromLowToHigh(97, 122);
    //the symbol characters have a lot of gaps in their sequences
    const SymbolsCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));
    const NumberCharCodes = arrayFromLowToHigh(48, 57);

    let charAmountPrompt = prompt("Enter a password length between 8 and 128 characters");
    if(charAmountPrompt < 8 || charAmountPrompt > 128) {
      alert("Please enter a valid password length");
      return null;
    }
    
    let includeLowercasePrompt = prompt("Type Y to include lowercase characters or N to exclude lowercase characters");
    
    if (includeLowercasePrompt === 'Y') charCodes = charCodes.concat(LowerCaseCharCodes)

    let includeUppercasePrompt = prompt("Type Y to include uppercase characters or N to exclude lowercase characters");
    
    if (includeUppercasePrompt === 'Y') charCodes = charCodes.concat(UpperCaseCharCodes)

    let includeNumberPrompt = prompt("Type Y to include number characters or N to exclude number characters");
    
    if (includeNumberPrompt === 'Y') charCodes = charCodes.concat(NumberCharCodes)

    let includeSymbolsPrompt = prompt("Type Y to include symbols or N to exclude symbols");
    
    if (includeSymbolsPrompt === 'Y') charCodes = charCodes.concat(SymbolsCharCodes)

    if (includeLowercasePrompt !== 'Y' && includeUppercasePrompt !== 'Y' && includeNumberPrompt !== 'Y' && includeSymbolsPrompt !== 'Y'){
      alert('Please enter at least one character type.');
      return null;
    } 
    //create empty array for characters to be inserted into
    let passwordCharacters = []

    for (let i = 0; i < charAmountPrompt; i++) {
      //from the available character codes multiply by random number
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];

      //converts randomly generated character code back into the actual character
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    //this joins the password characters as a string without spaces
    return passwordCharacters.join('');

}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



