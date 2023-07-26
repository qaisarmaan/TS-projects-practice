//console.log("hello, Qaisar would you like to learn typescript.");
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "qaisar Maan";
// Convert the name to lowercase
var lowercaseName = personName.toLowerCase();
// Convert the name to uppercase
var uppercaseName = personName.toUpperCase();
// Convert the name to title case
var titlecaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
// Printing the results
console.log("Original Name: " + personName);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Titlecase Name: " + titlecaseName);
