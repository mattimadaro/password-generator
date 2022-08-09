const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//1. Declare 2 variables to get the fields where the password will be stored
let pwOne = document.getElementById("pw-One")
let pwTwo = document.getElementById("pw-Two")

//2. Declare a variable getting the generate password button
let generatePwBtn = document.getElementById("generate-btn")

//3. Generate new passwords according to the set password length and whether there should be numbers and symbols or just letters.
generatePwBtn.addEventListener("click", function(){
    if (document.getElementById("checkbox").checked === true){
        pwOne.textContent = ""
        for (let i = 0; i < document.getElementById("length").value; i++){
            let randomIndexOne = Math.floor( Math.random() * characters.length )    
            let randomChar = characters[randomIndexOne]      
            pwOne.textContent += randomChar
        }
        pwTwo.textContent = ""
        for (let i = 0; i < document.getElementById("length").value; i++){
            let randomIndexTwo = Math.floor( Math.random() * characters.length )    
            let randomChar = characters[randomIndexTwo]      
            pwTwo.textContent += randomChar
        }       
    } else {
        pwOne.textContent = ""
        for (let i = 0; i < document.getElementById("length").value; i++){
            let randomIndexOne = Math.floor( Math.random() * 52 )    
            let randomChar = characters[randomIndexOne]      
            pwOne.textContent += randomChar
        }
        pwTwo.textContent = ""
        for (let i = 0; i < document.getElementById("length").value; i++){
            let randomIndexTwo = Math.floor( Math.random() * 52 )    
            let randomChar = characters[randomIndexTwo]      
            pwTwo.textContent += randomChar
        }         
    }
})


//4. Copy password to clipboard when the copy button is clicked and get an alert. 

function copyPWOne(){
    const range = document.createRange()
    range.selectNode(document.getElementById("pw-One"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
}

function copyPWTwo(){
    const range = document.createRange()
    range.selectNode(document.getElementById("pw-Two"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
}