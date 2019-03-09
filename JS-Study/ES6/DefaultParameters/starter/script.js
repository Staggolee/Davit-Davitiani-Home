/// Default parameters


// function SmithPerson(firstname, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName;
//     nationality === undefined ? nationality = 'American' : nationality; 

//     this.firstname = firstname;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

/// vs ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality
= 'American') {
    this.firstName = firstName;
     this.yearOfBirth = yearOfBirth;
     this.lastName = lastName;
     this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');