

let result = document.getElementById("result");
let passwordLength = document.getElementById("allowedlength");
let includeLowerCase;
let includeUpperCase;
let includeNumber;
let includeSymbols;



const allowLowerCaseBTN = document.getElementById("allowLowerCaseBTN");
const allowUpperCaseBTN = document.getElementById("allowUpperCaseBTN");
const allowNumbersBTN = document.getElementById("allowNumbersBTN");
const allowSymbolsBTN = document.getElementById("allowSymbolsBTN");



function refresh(){
    window.location.href = "passwordGen.html";
}

function checkInput(){

passwordLength = Number(passwordLength.value);
allowLowerCaseBTN.checked ? includeLowerCase = true : includeLowerCase = false;
allowUpperCaseBTN.checked ? includeUpperCase = true : includeUpperCase = false;
allowNumbersBTN.checked ? includeNumber = true : includeNumber = false;
allowSymbolsBTN.checked ? includeSymbols = true : includeSymbols = false;
}


function generatePassword(){
    checkInput();
    password = createPassword(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols);


}


function createPassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols ){


const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "1234567890";
const symbolChars = "~!@#$%^&*()_+<>/";

let allowedChars = "";
let password = "";

//          condition      ?         if true     :   if false   
allowedChars += includeLowerCase ? lowercaseChars: "";
allowedChars += includeUpperCase ? uppercaseChars: "";
allowedChars += includeNumber ? numberChars: "";
allowedChars += includeSymbols ? symbolChars: "";


if(length <= 0){
    window.alert(`password must be at least 1 charcter`);
}

if(length === 0){
    window.alert(`Select a parameter`);
}

for(let i = 0; i < length; i++ ){
    const random = Math.floor(Math.random()* allowedChars.length);
    password += allowedChars[random]; 
    result.textContent = (`Your new password is : ${password}`);  

}
return password;

}















 


 

