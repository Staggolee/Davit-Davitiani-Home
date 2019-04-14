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

//filter challenge : setup div, setup filters(searchText), create renderTodos

const filters = {
    searchText : ''
}

const filterTodo = function (todos, filters) {
    const filteredTodo = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''
    
    filteredTodo.forEach(function (todo) {
        let newTodo = document.createElement('p')
        newTodo.textContent = todo.text
        document.querySelector('#todos').appendChild(newTodo)

    })
    
    const incompletedTodos = filteredTodo.filter(function (todo) {
        return !todo.completed
    })
        
    let messageP = document.createElement('h2');
        document.querySelector('#todos').appendChild(messageP)
        


    incompletedTodos.forEach(function (todo) {
        newTodo = document.createElement('p')
        newTodo.textContent = `${todo.text}`
        document.querySelector('#todos').appendChild(newTodo)
    })

    messageP.textContent = `You have ${incompletedTodos.length} todos left:`

    }


// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log('Button pressed!')
})

// Listen for todo text change
document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
    
})
document.querySelector('#filter-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    filterTodo(todos, filters)
})