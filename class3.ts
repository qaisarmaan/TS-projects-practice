//console.log("hello, Qaisar would you like to learn typescript.");
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "qaisar Maan";

// Convert the name to lowercase
let lowercaseName = personName.toLowerCase();
// Convert the name to uppercase
let uppercaseName = personName.toUpperCase();

// Convert the name to title case
let titlecaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());

// Printing the results
console.log("Original Name: " + personName);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Titlecase Name: " + titlecaseName);

// to mention any quotation.
//console.log("Quaid-i-Azam said, Work, work and work.");

//another way with author name.
let famousequote = "those who seeks find.";
let authorname = "unknown";
console.log("quote " + famousequote);
console.log("author name" + authorname);