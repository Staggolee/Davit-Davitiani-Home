const notes = [{
                title: 'My nex trip',
                body: 'I would like to go to Spain'
            }, {
                title: 'Habbits to work on',
                body: 'Exercise. Eating a bit better'
            }, {
                title: 'Office modifications',
                body: 'Get a new seat'
            }]


const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)