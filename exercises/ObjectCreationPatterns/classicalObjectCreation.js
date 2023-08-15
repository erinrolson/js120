/*
Pseudo-classical approach to OOP in JavaScript refers to the Constructor/
Constructor with Prototypes approach. The constructor function approach
essentially. 

Big takeaways: 

  1) Use `Function.prototype.call` to have a subclass 'inherit' properties
     from the parent class.
  2) Use `ChildFunction.prototype = Object.create(Parent.prototype)` to 'inherit'
     methods from the parent class
  3) Use `ChildFunction.constructor = ChildFunction` to manually reset the property
     to the appropriate constructor function. 
*/

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

Person.prototype.fullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

Person.prototype.communicate = function () {
  console.log(`I am communicating.`);
};

Person.prototype.eat = function () {
  console.log(`I am eating.`);
};

Person.prototype.sleep = function () {
  console.log(`I am sleeping.`);
};

function Doctor(firstName, lastName, age, gender, specialization) {
  // what to do with the return value...?
  Person.call(this, firstName, lastName, age, gender); 
  this.specialization = specialization;
};

//Object.setPrototypeOf(Doctor.prototype, Person.prototype);
Doctor.prototype = Object.create(Person.prototype);

Doctor.prototype.diagnose = function () {
  console.log(`I am going to diagnose you.`);
};

Doctor.prototype.constructor = Doctor;

function Professor (firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
};

//Object.setPrototypeOf(Professor.prototype, Person.prototype);
Professor.prototype = Object.create(Person.prototype);

Professor.prototype.teach = function () {
  console.log(`I am teaching blah blah blah.`);
};

Professor.prototype.constructor = Professor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
};

//Object.setPrototypeOf(Student.prototype, Person.prototype);
Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function () {
  console.log(`I am studying`);
};

Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, degree) {
  // how to handle graduate degree vs degree? if pass nothing to constructor will be undefined..
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = degree;
};

//Object.setPrototypeOf(GraduateStudent.prototype, Student.prototype);
GraduateStudent.prototype = Object.create(Student.prototype);

GraduateStudent.prototype.research = function () {
  console.log(`I am kinda sorta researching stuff.`);
};

GraduateStudent.prototype.constructor = GraduateStudent;

let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'