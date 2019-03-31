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

let myAccaunt = {
    name: 'Davit Davitiani',
    expenses: 0,
    income: 0
}


let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    
}


// Challenge

let addIncome = function(acc, inc) {
    acc.income = acc.income + inc
}
addExpense(myAccaunt, 100);
console.log(myAccaunt)

addIncome(myAccaunt, 500)
console.log(myAccaunt)

let resetAccount = function(name) {
    name.income = 0;
    name.expenses = 0;
}

resetAccount(myAccaunt)
console.log(myAccaunt)

let getAccountSummary = function(person) {
    let sum = person.income - person.expenses;
    return `Account for ${person.name} has ${sum}. ${person.income} in income. ${person.expenses} in expanses `
}

let accountSum = getAccountSummary(myAccaunt);
console.log(accountSum)





