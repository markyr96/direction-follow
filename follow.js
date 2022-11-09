const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";
const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

const greeting1 = "Hello, my name is " + fullName + " and I am " + age + " years old.";

console.log(greeting1);
 
module.exports = {
	testGroup: "a",
	greeting,
	birthYear,
	thisYear,
	firstName,
	lastName
}


 module.exports = {
 	testGroup: "b",
 	greeting,
 	birthYear,
 	thisYear,
 	firstName,
 	lastName,
 	fullName,
 	age
}
