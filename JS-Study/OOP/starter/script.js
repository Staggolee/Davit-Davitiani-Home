// function constructor

// var john = {
//     name: 'john',
//     yearOfBirth: '1990',
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
    
// }

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';




// var john = new Person('john', 1990, 'teacher');

// john.calculateAge()

// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Jane', 1948, 'retired');

// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);



// Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: {value : 'Jane' },
//     yearOfBirth: { value : 1969 },
//     job: { value: 'designer'}
// })

//primitives vs object

//primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);


//objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age, obj2.age);

// //functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);
// console.log(a);
// console.log(obj.city);


//// passing function as arguments

// var years = [1993, 1964, 1999, 1995, 1986];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// function isFullAge(el) {
//     return el >= 18
// }

// function maxHeartRate(el) {
//     if (el > 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1
//     }
// }


// var ages = arrayCalc(years, calculateAge);
// var fullAge = arrayCalc(ages, isFullAge);
// var heartRate = arrayCalc(ages, maxHeartRate)
// console.log(ages, fullAge, heartRate);

/// functions returning functions

// function ageQuestion(birthYear) {
//     if (birthYear === 1993) {
//         return function (name){
//             console.log(name + ' are you ' + (2019 - birthYear) + ' years old?');
//         }
//     } else if (birthYear === 1999) {
//         return function (name){
//             console.log(name + ' are you ' + (2019 - birthYear) + ' years old?');
//         }
//     } else if (birthYear === 1982) {
//     return function (name){
//         console.log(name + ' are you ' + (2019 - birthYear) + ' years old?');
//         } 
//     }

// }


// var calcAgeFirst = ageQuestion(1993);
// var calcAgeSecond = ageQuestion(1999);
// var calcAgeThird = ageQuestion(1982);
// calcAgeFirst('David');
// calcAgeSecond('Jack');
// calcAgeThird('Michael');


/// immidiately invoked functions


// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);

// }
// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);

// }) ();

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);

// }) (5);


/// closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGer = retirement(65);
// var retirementIce = retirement(67);

// retirementUS(1990);
// retirementGer(1990);
// retirementIce(1990);

//retirement(66)(1990); // igive rac zeda


// function interviewQuestion(job) {
//     return function(name) {
//     var a = ' can you please explain what UX design is?';
//     var b = ' what subject do you teach?';
//     var c = ' what do you do?'
//     if(job === 'designer') {
//              console.log(name + a);
//     } else if(job === 'teacher') {
//              console.log(name + b);
//     } else {
//              console.log(name + c);
//          }
//     }

// }

// var interviewClosure1 = interviewQuestion('designer');
// var interviewClosure2 = interviewQuestion('teacher');
// var interviewClosure3 = interviewQuestion('programmer');
// interviewClosure1('Jane');
// interviewClosure2('Dereck');
// interviewClosure3('David');

/// Bind, call, apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.') ;
//         } else if(style === 'friendly') {
//             console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.') ;
            
//         }
//     } 
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// }

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon');

// // john.presentation.apply(emily, ['friendly', 'afternoon'])

// var johnFriendly = john.presentation.bind(john, 'friendly');
// var emilyFormal = john.presentation.bind(emily, 'formal');

// johnFriendly('morning');
// johnFriendly('night');
// emilyFormal('evening');


// var years = [1993, 1964, 1999, 1995, 1986];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }


// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan)

///////////////// challenge

// var questionGame = {
//     allQuestion: ['is JS the best','is JS the worst','do you know proggraming?'],
//     answer: [0, 1],
//     correctAnswer = function() {
//         if(0) {
//             console.log('answer is correct!')
//         } else {
//             console.log('answer is wrong!')
//         }
//     }
// }


(function(){
    function CheckGame(questions, answers, correct) {
        this.questions = questions;
        this.answers = answers;
        this.correct = correct;
        
    };

    
    CheckGame.prototype.checkAnswer = function() {
        console.log(this.questions );
            for (var i = 0; i < this.answers.length; i++) {
                console.log(i + ': ' + this.answers[i])
        } 
    };
    
    CheckGame.prototype.checkCorrect = function(ans, callback) {
        var scr;
        if (ans === this.correct) {
            console.log('Correct Answer!');
            scr = callback(true);

        } else {
            console.log('Wrong! Try Again');

            scr = callback(false);
        } 
        this.displayScore(scr);
    };

    CheckGame.prototype.displayScore = function(score) {
        console.log('your current score is: ' + score);
        console.log('----------------------------------------');
    };

    
    
    var q1 = new CheckGame(
        'is JS the best language?',
        ['no', 'idk', 'definitely', 'yes'],
        2
    );
    
    var q2 = new CheckGame(
        'are you fast learner?',
        ['no', 'idk', 'definitely', 'yes'],
        0
    );
    
    var q3 = new CheckGame(
        'are you beginner developer?',
        ['no', 'idk', 'definitely', 'yes'],
        3
    );

    var question = [q1, q2, q3];

    function score() {
        var scr = 0;
        return function(correct) {
            if(correct) {
                scr++;
            }
            return scr;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * question.length);
        
    
        question[n].checkAnswer();
        var answer = prompt('please enter correct number');
        
        
        
        if (answer !== 'exit') {
            question[n].checkCorrect(parseInt( answer), keepScore);
            nextQuestion();
        }
        
    
    
    }
    
    nextQuestion()
    
       
})()








