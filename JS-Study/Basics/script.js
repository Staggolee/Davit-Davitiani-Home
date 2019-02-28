// var johnMass = 70;
// var markMass = 79;

// var markHeight = 1.80;
// var johnHeight = 1.74;

// var johnBMI = johnMass / (johnHeight * johnHeight)
// var markBMI = markMass / (markHeight * markHeight)

// var compare = johnBMI > markBMI

// console.log(johnBMI, markBMI, compare)
// console.log('Is' + ' ' + johnBMI + ' ' + 'higher than' + ' ' + markBMI + "'s?" + ' ' + compare)


// var firstName = 'John';
// var civilStatus = 'Single';

// if (civilStatus === 'married') {
//     console.log(firstName + 'is married!');
    
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + 'is married!');
    
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var johnMass = 70;
// var markMass = 79;

// var markHeight = 1.80;
// var johnHeight = 1.74;

// var johnBMI = johnMass / (johnHeight * johnHeight)
// var markBMI = markMass / (markHeight * markHeight)

// if (johnBMI > markBMI) {
//     console.log('johns bmi is higher than john')
// } else {
//     console.log('marks bmi is higher than john')
// }


// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.')
// } 
// else if (age >= 20 && age < 30){
//     console.log(firstName + ' is a young man')
// }
// else {
//     console.log(firstName + ' is a man. ');
// }

// var firstName = 'John';
// var age = 22;

// age >= 18 ? console.log(firstName + ' dreenks beer.') 
// : console.log(firstName + ' dreenks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';

// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// var job = 'instructor';

// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kides');
//         break;
//     case 'driver' :
//         console.log(firstName + 'drives');
//         break;
//     case 'designer':
//         console.log(firstName + 'designs');  
//         break; 
//     default:
//     console.log(firstName + 'somethnig else');         
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' isa boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' isa teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + '  is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man.')            
// }

// var height; 
// height = 0;

// if (height || height === 0) {
//     console.log('variable is defined')
// } else {
//     console.log('variabe is not defined')
// }


// var teamJohn = (89 + 120 + 124) / 3
// var teamMike = (116 + 94 + 129) / 3 
// var teamMary = (97 + 134 + 105) / 3

// if (teamJohn > teamMike) {
//     console.log('team johns score is higher than mikes ' + teamJohn + " : " + teamMike)
// } else if (teamJohn < teamMike) {
//     console.log('team mike score is higher than johnes ' + teamMike + " : " + teamJohn)
// } else if (teamMary > teamJohn && teamMary > teamMike){
//     console.log ('team marys score is higher than anyone : ' + teamMary)
// }
// else {
//     console.log( ' draw ' + teamJohn + " : " + teamMike + ' : ' + teamMary)
// }

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageJane, ageMike);

// function yearUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years');
//     } else {
//         console.log( firstName + ' is already retired.')
//     }
    
// }

// yearUntilRetirement(1990, 'John');
// yearUntilRetirement(1948, 'Mike');
// yearUntilRetirement(1990, 'Jane');


// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches'
//         case 'driver':
//             return firstName + 'drives'
//         case 'designer':
//             return firstName + 'designs'
//         default:
//             return firstName + 'something else'
//     }
// } 

// console.log(whatDoYouDo('teacher', 'john'));


// var John = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// var isDesigner = John.indexOf('designer') === -1 ? 
// 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);


// var bills = []
// var full = []

// var calculateTip  =  function(bill){
//     var percentage;
//     if (bill < 50) {
//     percentage = 0.2
//     return bill * percentage;
//     } else if(bill >= 50 && bill < 200){
//     percentage = 0.15
//         return bill * percentage;
//     } else {
//     percentage = 0.1
//         return bill * percentage;
//     }

// }

// function fullpay(sum){
//     var percentage;
//     if (sum < 50) {
//     percentage = 0.2
//     return sum +  (sum * percentage);
//     } else if(sum >= 50 && sum < 200){
//     percentage = 0.15
//         return sum + (sum * percentage);
//     } else {
//     percentage = 0.1
//         return sum + (sum * percentage);
//     }
// }


// bills.push(calculateTip(48));
// bills.push(calculateTip(124));
// bills.push(calculateTip(268));

// full.push(fullpay(48));
// full.push(fullpay(124));
// full.push(fullpay(268));

// console.log(bills, full)


// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarryed: false 
// }
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarryed'] = true;
// console.log(john);

// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


// var john = {
//         firstName: 'John',
//         lastName: 'Smith',
//         birthYear: 1993,
//         family: ['Jane', 'Mark', 'Bob', 'Emily'],
//         job: 'teacher',
//         isMarryed: false,
//         calcAge: function(){
//            this.age =  2018 - this.birthYear;
//         } 
//     };

//     john.calcAge();
//     console.log(john);

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 87,
//     height: 1.93,
//     calcBMI : function(){
//         this.BMI = this.mass / (this.height * 2) 
//     }
// };
// var mark = {
//     firstName: 'Mark',
//     lastName: 'Donovan',
//     mass: 75,
//     height: 1.80,
//     calcBMI : function(){
//         this.BMI = this.mass / (this.height * 2) 
//     }
// };



// function versusBMI(){
//    if (john.calcBMI() > mark.calcBMI()) {
//        console.log('John is the winner' + ' ' + john.BMI)
//    } else if(mark.BMI > john.BMI){
//     console.log('Mark is the winner' + ' ' + mark.BMI)
//    } else {
//        console.log('BMI-s are identical');
//    }
// }

// versusBMI();
// console.log(john, mark);



// for (var i = 1; i <= 20; i+= 2) {
//     // console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer',false];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// };


// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }


// var john = ['John', 'Smith', 1990, 'designer',false];

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     // console.log(john[i]);
// };

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     // console.log(john[i]);
// };


// for (var i = john.length - 1; i >= 0; i--) {
//     // if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// };


// var john = {
//     fullName : 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     tipCalc: function() {
//             this.tips = [];
//             this.fullPay = [];

//         for(var i = 0; i < this.bills.length; i++){
//             var percent;
//             var bill = this.bills[i];

//             if (bill < 50){
//                 percent = .2
//             } else if(bill >= 50 && bill < 200){
//                 percent = .15
//             }else {
//                 percent = .1
//             }
//             this.tips[i] = bill * percent;
//             this.fullPay[i] = bill + this.tips[i];
//         }
            
//     }

//     }

//     var mark = {
//         fullName : 'mark Samuel',
//         bills: [77, 475, 110, 45],
//         tipCalc: function() {
//                 this.tips = [];
//                 this.fullPay = [];
    
//             for(var i = 0; i < this.bills.length; i++){
//                 var percent;
//                 var bill = this.bills[i];
    
//                 if (bill < 100){
//                     percent = .2
//                 } else if(bill >= 100 && bill < 300){
//                     percent = .1
//                 }else {
//                     percent = .25
//                 }
//                 this.tips[i] = bill * percent;
//                 this.fullPay[i] = bill + this.tips[i];
//             }
                
//         }
    
//         }

//         function calcAverage (tips) {
//             var sum = 0
//             for (i = 0; i < tips.length; i++){
//                 sum = sum + tips[i] 
//             }
//             return sum / tips.length
//         }

//         john.tipCalc();
//         mark.tipCalc();
//         john.average = calcAverage(john.tips);
//         mark.average = calcAverage(mark.tips);

        
        
//         console.log(mark, john);

//         if(mark.average > john.average) {
//             console.log('marks family spent more then johns: ' + mark.average)
//         }
















