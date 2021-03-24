'use strict';

// const Person = function(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear);
//     // }
// }

// const jonas = new Person('Jonas', 1991);

// console.log(jonas); 

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 2017);
// console.log(matilda, jack);

// const jay = 'Jay';

// Person.hey = function() {
//     console.log('Hey');
//     console.log(this);
// }

// Person.hey();

// jonas.hey();
/* 
console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapients';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
   return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1); */

// class expression
// const PersonCl = class {}

// class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Instance method  
//     // Method will be added to .prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     // Set a property that aleady exist
//     set fullName(name) {
//         if(name.includes(' ')) this._fullName = name;
//         else this._fullName = name + ' Smith'
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // Static method
//     static hey() {
//         console.log('Hey');
//         console.log(this);
//     }
// }

// PersonCl.hey();
// const jessica = new PersonCl('jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// // console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function() {
// //     console.log(`Hey ${this.firstName}`);
// // }
// // jessica.greet();

// const walter = new PersonCl('Walter', 1965);

//  const account = {
//      owner: 'jonas',
//      movements: [200, 530, 120, 300],

//      get latest() {
//         return this.movements.pop();
//      },

//      set latest(mov) {
//          this.movements.push(mov);
//      },
//  };

//  console.log(account.latest);

//  account.latest = 50;
//  console.log(account.movements);

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthName) {
//         this.firstName = firstName;
//         this.birthYear = birthName;
//     }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// console.log(sarah);
// sarah.calcAge();


// const Person = function(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     }

// Person.prototype.calcAge =  function() {
//         console.log(2037 - this.birthYear);
//     }

// const Student = function(firstName, birthYear, course) {
//         Person.call(this, firstName, birthYear);
//         this.course = course;
//     }

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function() {
//         console.log(`My name is ${this.firstName} and I study ${this.course}`);
//     }

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();    
// mike.calcAge();
    
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Instance method  
//     // Method will be added to .prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     // Set a property that aleady exist
//     set fullName(name) {
//         if(name.includes(' ')) this._fullName = name;
//         else this._fullName = name + ' Smith'
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // Static method
//     static hey() {
//         console.log('Hey');
//         console.log(this);
//     }
// };

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         // Always needs to happen first!
//         super(fullName, birthYear);
//         this.course = course;
//     }

//     introduce() {
//                 console.log(`My name is ${this.fullName} and I study ${this.course}`);
//             }

//     calcAge() {
//         console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
//     }
// }

// const martha = new StudentCl('Martha', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

const PersonProto = {
        calcAge() {
            console.log(2037 - this.birthYear);
        },
    
        init(firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
        }
    };
    
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();