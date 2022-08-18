const charsArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a","b","c","d","e",
                  "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
                  "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];


// Slider Logic
const slider = document.querySelector("#slider");
const sliderNum =  document.querySelector("#slider-num");
sliderNum.innerHTML = slider.value;
let passLength = slider.value;

// When slider input changes update the slider number displayed and the password length
slider.oninput = function() {
    sliderNum.innerHTML = slider.value;
    passLength = slider.value;
}

const includeSymbols = true;
const includeNumbers = true;

const symbolsCheckEl = document.querySelector("#symbolsCheckbox");
const numsCheckEl = document.querySelector("#numsCheckbox");
const passwordBoxA = document.querySelector(".passA");
const passwordBoxB = document.querySelector(".passB"); 

function createPasswords() {
    const pass1 = generatePassword(charsArr);
    const pass2 = generatePassword(charsArr);
    // InnerHtml doesn't display correctly after a few button clicks
    passwordBoxA.textContent = pass1;
    passwordBoxB.textContent = pass2;
}

// Generates a random password
function generatePassword(chars) {
    if (!symbolsCheckEl.checked && !numsCheckEl.checked) {
        chars = removeSymbols(chars);
        chars = removeNumbers(chars);
    } else if (!symbolsCheckEl.checked) {
        chars = removeSymbols(chars);
    } else if (!numsCheckEl.checked) {
        chars = removeNumbers(chars);
    }

    let password = "";
    for (let i = 1; i <= passLength; i++) {
        password += getRandomChar(chars);
    }
    return password;
}

// Gets a random item from the array of characters
function getRandomChar(charArr) {
    let i = Math.floor(Math.random() * charArr.length);
    return charArr[i];
}

function removeSymbols(chars) {
    // Call filter in the chars array for every char check if it's a letter OR number, IF IT IS return it to the new array
    // and then make the function return that array
    let aceptedValues = /^[a-zA-Z0-9]+$/;
    return chars.filter((char) => aceptedValues.test(char));
}

function removeNumbers(chars) {
    let numbers = /^[0-9]+$/;
    //If the character is not a number Add it to the new array
    return chars.filter((char) => !numbers.test(char));
}
