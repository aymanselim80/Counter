let count = 0
let countElement = document.getElementById("count")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
function increment()
{
    count++
    countElement.textContent = count
}
function save() 
{
    console.log(count)
    saveEl.textContent += (count + ' _ ')
    count = 0
    countElement.textContent = count
}

let greeting = "Welcome back, "
let userName = "Ayman"
let messageToUser = (greeting + userName + '.')
welcomeEl.innerText = messageToUser

