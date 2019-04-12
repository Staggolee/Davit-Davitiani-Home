// let ps = document.querySelectorAll('p');

// ps.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
        
//     }
// })


const todos = [{
                text: "learn JS",
                completed: true
            }, {
                text: "play football",
                completed: false
            },{
                text: "learn history",
                completed: false
            },{
                text: "do homework",
                completed: true
            },{
                text: "watch movies",
                completed: false
            }]


//Challenge : you have 2 todos left; add a p for each todo

let messageP = document.createElement('h2');
document.querySelector('body').appendChild(messageP)

const incompletedTodos = todos.filter(function (todo) {
    return !todo.completed
})

const completedTodos = todos.filter(function (todo) {
    return todo.completed
})

incompletedTodos.forEach(function (todo) {
    newTodo = document.createElement('p')
    newTodo.textContent = `${todo.text}`
    document.querySelector('body').appendChild(newTodo)
})

messageP.textContent = `You have ${incompletedTodos.length} todos left:`

let messageCompleted = document.createElement('h2');
document.querySelector('body').appendChild(messageCompleted)
messageCompleted.textContent = `You completed ${completedTodos.length} todos:`

completedTodos.forEach(function (todo) {
    compTodo = document.createElement('p')
    compTodo.textContent = `${todo.text}`
    document.querySelector('body').appendChild(compTodo)
})
