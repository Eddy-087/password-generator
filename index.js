const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswdOneEl = document.getElementById("password-1")
let pswdTwoEl = document.getElementById("password-2")

function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i += 1) {
        let randIndex = Math.floor(Math.random() * characters.length)
        password += characters[randIndex]
    }
    return password
}

function displayPasswords() {
    let pswd1 = generatePassword()
    let pswd2 = generatePassword()
    pswdOneEl.textContent = pswd1
    pswdTwoEl.textContent = pswd2
}