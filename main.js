// Your code here.

/*
//1. Get First Name

parameters 1 = object
{
  firstName: string,
  lastname: string
}

return firstName
*/
console.log("\n#1. Get First Name");
function getFirstName(person){
  return person.firstName;
}

console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Colin'
console.log(getFirstName({firstName: 'Petra', lastName: 'Solano'})) // -> 'Petra'


//2. Get Last Name
console.log("\n#2. Get Last Name");
function getLastName(person){
  return person.lastName;
}

console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Jaffe'
console.log(getLastName({firstName: 'Petra', lastName: 'Solano'})) // -> 'Solano'


//3. Get Full Name
console.log("\n#3. Get Full Name");
function getFullName(person){
  return person.fullName;
}

console.log(getFullName({fullName: 'Colin Jaffe'})) // -> 'Colin Jaffe'
console.log(getFullName({fullName: 'Petra Solano'})) // -> 'Petra Solano'

//4. Set First Name
/*

parameters: 2
1st parameter
person = {
  firstName: string,
  lastName: string
}
newFirstName: string

change firstName of person object to newFirstName
*/
console.log("\n#4. Set First Name");
function setFirstName(person, newFirstName){
  person['firstName'] = newFirstName;
//   person.firstname = newFirstName;
}

let person1 = {firstName: 'Colin', lastName: 'Jaffe'};
let person2 = {firstName: 'Petra', lastName: 'Solano'};
setFirstName(person1, 'Redacted');
setFirstName(person2, 'Anthony');

console.log(person1);
console.log(person2);


//5. Set Age
// console.log("\n#5. Set Age");
// let person3 = {firstName: 'Colin', lastName: 'Jaffe', age: 39};
// let person4 = {firstName: 'Petra', lastName: 'Solano', age: 29};


// function setAge(person, newAge){
//   person.age = newAge;
// }

// setNewAge(person3, 45);
// setNewAge(person4, 35);

// console.log(person3);
// console.log(person4);


//6. Give Birthday
/*
parameter person object
{
  firstName: string
  lastName: string
  age*: number
}
* age property might not exist, and if it doesn't exist, we have to add it and set it equal to 1

*/
console.log("\n#6. Give Birthday");
function giveBirthday(person){

  //if you are checking to see if an object includes a certain property or not, check if that property is equal to undefined
  //if property is undefined, it does not exist
  if(person.age === undefined){
    person.age = 1;
  } else {
    person.age = person.age + 1; //person.age++ OR person.age += 1 also works
  }

}

let person5 = {firstName: 'Colin', lastName: 'Jaffe', age: 39};
let person6 = {firstName: 'Petra', lastName: 'Solano', age: 29};
let person7 = {firstName: 'Baby', lastName: 'Jaffe'};

giveBirthday(person5) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 40};
giveBirthday(person6) // -> {firstName: 'Petra', lastName: 'Solano', age: 30};
giveBirthday(person7) // -> {firstName: 'Baby', lastName: 'Jaffe', age: 1};

console.log(person5);
console.log(person6);
console.log(person7);

//7. Marry
console.log("\n#7. Marry");

const person8 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
const person9 = {firstName: 'Petra', lastName: 'Solano', married: false}
marry(person8, person9)

function marry(person8, person9){
  person8.married = true
  person9.married = true
}

console.log(person8) // -> {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
console.log(person9) // -> {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}



//8. Divorce
console.log("\n#8. Divorce");
const person10 = {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
const person11 = {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}

function divorce(person10, person11){
  person10.married = false
  person11.married = false
}

console.log(person10) // -> {firstName: 'Colin', lastName: 'Jaffe', married: false} 
console.log(person11) // -> {firstName: 'Petra', lastName: 'Solano', married: false}



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
