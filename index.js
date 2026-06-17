const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswdOneEl = document.getElementById("password-1")
let pswdTwoEl = document.getElementById("password-2")
const customLengthEl = document.getElementById("custom-length")
const omitCharsEl = document.getElementById("omit-chars")
const button = document.getElementById("submit")

function generatePassword(length, omittedChars) {
    let password = ""
    let chars = characters
    if (omittedChars) {
        for (let i = 0; i < omittedChars.length; i++) {
            let index = chars.indexOf(omittedChars[i])
            if (index !== -1) {
                chars.splice(index, 1)
            }
        }
    }

    for (let i = 0; i < length; i += 1) {
        let randIndex = Math.floor(Math.random() * chars.length)
        password += chars[randIndex]
    }

    return password
}

function displayPasswords(length, omiittedChars) {
    let pswd1 = generatePassword(length, omiittedChars)
    let pswd2 = generatePassword(length, omiittedChars)
    console.log(pswd1)
    console.log(pswd2)
    console.log("Done")
    pswdOneEl.textContent = pswd1
    pswdTwoEl.textContent = pswd2
}

button.addEventListener("click", function() {
    const length = customLengthEl.value;
    const ommittedChars = omitCharsEl.value;
    if (length) {
        displayPasswords(length, ommittedChars)
    }
    else {
        displayPasswords(15, ommittedChars)
    }
})