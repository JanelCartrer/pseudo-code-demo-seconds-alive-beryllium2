//Step 1:
let birthMonthInput = prompt("What is your birth month? (Please provide the month in number form. For example, January is 1 December is 12.")
let birthYearInput = prompt("What is your birth year? (Please for example , 1996 not 96)")

let birthMonthNumber = parseInt(birthMonthInput)
let birthYearNumber = parseInt(birthYearInput)

//Step 2:
let currentMonth = new Date().getMonth() + 1
let currentYear = new Date().getFullYear()

//Step 3:
let secondsInAMonth = 60 * 60 * 24 * 30

//Step 4:
let secondsInAYear = secondsInAMonth * 12

//Step 5:
let secondsInBirthYear = secondsInAMonth * (12 - birthMonthNumber)  

//Step 6:
let secondsInCurrentYear = secondsInAMonth * currentMonth
//Step 6.5:
let secondsInBetween = secondsInAYear * (currentYear - birthYearNumber - 2)

//Step 7:

let secondsSinceBirth = 
    secondsInAMonth
    + secondsInBetween
    + secondsInBirthYear
    
//Step 8:
document.write(`
<h3> Are you ready?</h3>
<details>  
<summry><strong>
    Giving the birth month (${birthMonthNumber}) and the birth year (${birthYearNumber}), you have been alive for approimately <mark>${secondsSinceBirth.toLocaleString()} </mark> seconds!<strong> 
</details>
`)
