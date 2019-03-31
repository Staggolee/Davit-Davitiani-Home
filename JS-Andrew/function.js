// let square = function(num) {
//     let result = num * num
//     return result
// }

// let value = square(5);
// console.log(value)

// let convertFarenheit = function(farenheit) {
//     let celsius = (farenheit - 32) * 5 / 9
//     return celsius
// }

// let convertedCelsius = convertFarenheit(32);
// let convertedCelsius2 = convertFarenheit(68);
// let convertedCelsius3 = convertFarenheit(118);
// console.log(convertedCelsius, convertedCelsius2, convertedCelsius3)


/*
// multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments
let getScoreText = function(name = 'David', score = 0) {
    return 'Name: ' + name + ' -score: ' + score
} 

let scoreText = getScoreText(undefined, 100)
console.log(scoreText);

//challenge
let getTip = function(total, tipPercent = .2) {
    tipTotal = 'total is ' + total + ' and ' + 'tip value is ' + total * tipPercent
    return tipTotal
}

let resultTip = getTip(27, .1);
console.log(resultTip)
*/

// Grade challenge

/*
let scoreCalc = function(studScore, totScore) {
    let average = (studScore / totScore) * 100 
    let message;
     if(average >= 90 && average <= 100) {
        message =  'A'
     } else if(average >= 80 && average <= 89) {
        message = 'B'
     } else if(average >= 70 && average <= 79) {
        message = 'C'
     } else {
        message = 'D'
     }
    return `You got a ${message} (${average}%)!`
}
 
let gradeAvg = scoreCalc(81, 100)
console.log(gradeAvg)
*/






