'use strict'

const processData = () => {
    data = '1230987234'
}

processData()
console.log(data)

const add = () => {
    return arguments[0] + arguments[1]
}

// console.log(add(11, 22, 33, 44))

const car = {
    color: 'red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())