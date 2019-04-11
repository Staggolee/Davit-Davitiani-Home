/*
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummery = function(book) {
    return {
        summary: (`${book.title} by ${book.author}`),
        pageCountSummary: `${book.title} is ${book.pageCount} pages long` 
    }

   
}

let book1 = getSummery(myBook);
let book2 = getSummery(otherBook)

console.log(book1.pageCountSummary, book1.summary);
console.log(book2.pageCountSummary, book2.summary);


// Challenge 

    

let weatherCalc = function(faren) {
    
    let celsius = (faren - 32) * 5 / 9
    let kelvin = (faren + 459.67) * 5 / 9
    return {
        celsius : `celsius is ${celsius}C!`,
        farenheit: `farenheit is ${faren}F!`,
        kelvin: `kelvin is ${kelvin}K!`
    }
}

let getC = weatherCalc(50);
console.log(getC)
*/


//obj refferences

// let myAccaunt = {
//     name: 'Davit Davitiani',
//     expenses: 0,
//     income: 0
// }


// let addExpense = function(account, amount) {
//     account.expenses = account.expenses + amount
    
// }


// // Challenge

// let addIncome = function(acc, inc) {
//     acc.income = acc.income + inc
// }
// addExpense(myAccaunt, 100);
// console.log(myAccaunt)

// addIncome(myAccaunt, 500)
// console.log(myAccaunt)

// let resetAccount = function(name) {
//     name.income = 0;
//     name.expenses = 0;
// }

// resetAccount(myAccaunt)
// console.log(myAccaunt)

// let getAccountSummary = function(person) {
//     let sum = person.income - person.expenses;
//     return `Account for ${person.name} has ${sum}. ${person.income} in income. ${person.expenses} in expanses `
// }

// let accountSum = getAccountSummary(myAccaunt);
// console.log(accountSum)

//Methods

// let restaurant = {
//     name:'ASB',
//     guestCapacity: 75,
//     guestCount: 0,
//     checkAvailability: function(partySize) {
//         let seatsLeft = this.guestCapacity - this.guestCount
//         return partySize <= seatsLeft
//     },
//     seatParty: function(quantity) {
//         this.guestCount = this.guestCount + quantity
        
//     },
//     removeParty: function(quantity) {
//         this.guestCount = this.guestCount - quantity
//     }
// }

// //seatParty
// //removeParty

// restaurant.seatParty(72)
// console.log(restaurant.guestCount)
// restaurant.removeParty(5)
// console.log(restaurant.guestCount)

// let status = restaurant.checkAvailability(4)
// console.log(restaurant.checkAvailability(4))






//String Methods

// let name = '   Andrew Mead  '

// console.log(name.length)

// //convert to uppercase

// console.log(name.toUpperCase())

// //includes method

// let password = 'abc1234password098'
// console.log(password.includes('password'))

// //trim method

// console.log(name.trim())


// // challenge : isValidPassword
// //length > 8, doesnt contains "password"

// let isValidPassword = function(password) {
//     return password.includes('password') || password.length <=8
// }

// console.log(isValidPassword('asdfg'))
// console.log(isValidPassword('abc123%^^&'))
// console.log(isValidPassword('asdsdf122password'))



// let num = 103.941

// console.log(num.toFixed(2))

// // let min = 10
// // let max = 20
// // let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// // console.log(randomNum)

// //challenge
// // 1-5 = true of correct, false if not correct

// let min = 1
// let max = 5 

// let makeGuess = function(guess) {
//     let randomNumber = Math.floor(Math.random() *(max - min +1)) + min
//     console.log(randomNumber)
//     return randomNumber === guess
    
// }
// console.log(makeGuess(2))




