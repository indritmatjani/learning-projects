/*ripasso generale di javascript */

//esercizi
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Esercizio 1: Declare an empty array

let Array = [];

// Esercizio 2: Declare an array with more than 5 number of elements

Array = ["a", "b", "c", "d", "e", "f"];

// Esercizio 3: Find the length of your array

Array.length;

// Esercizio 4: Get the first item, the middle item and the last item of the array

let firstItem = Array[0];
let middleItem = Array[Math.floor(Array.length / 2)];
let lastItem = Array[Array.length - 1];

// Esercizio 5: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [
  "string",
  42,
  true,
  null,
  undefined,
  { key: "value" },
  [1, 2, 3],
];
mixedDataTypes.length;

// Esercizio 6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Esercizio 7: Print the array using console.log()
console.log(itCompanies);

// Esercizio 8: Print the number of companies in the array
console.log(itCompanies.length);

// Esercizio 9: Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// Esercizio 10: Print out each company
itCompanies.forEach((company) => console.log(company));

// Esercizio 11: Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => console.log(company.toUpperCase()));

// Esercizio 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", ") + " are big IT companies.");

// Esercizio 13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Google")) {
  console.log("Google");
} else {
  console.log("Company not found");
}

// Esercizio 14: Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach((company) => {
  const countO = company.split("o").length - 1;
  if (countO > 1) {
    console.log(company);
  }
});

// Esercizio 15: Sort the array using sort() method
itCompanies.sort();

// Esercizio 16: Reverse the array using reverse() method
itCompanies.reverse();

// Esercizio 17: Slice out the first 3 companies from the array
let firstThree = itCompanies.slice(0, 3);
// Esercizio 18: Slice out the last 3 companies from the array
let lastThree = itCompanies.slice(-3);
// Esercizio 19: Slice out the middle IT company or companies from the array
let middleCompanies = itCompanies.slice(
  Math.floor(itCompanies.length / 2) - 1,
  Math.floor(itCompanies.length / 2) + 2,
);
// Esercizio 20: Remove the first IT company from the array
itCompanies.shift();
// Esercizio 21: Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length / 2) - 1, 3);
// Esercizio 22: Remove the last IT company from the array
itCompanies.pop();
// Esercizio 23: Remove all IT companies
itCompanies = [];
