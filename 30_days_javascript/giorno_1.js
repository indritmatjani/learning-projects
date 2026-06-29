/*
Scrivete un commento di una sola riga che dice: "I commenti possono rendere il codice leggibile". ok

Scrivete un altro commento di una sola riga che dica: Benvenuti a 30DaysOfJavaScript. ok

Scrivete un commento di più righe che dica: "I commenti possono rendere il codice leggibile, facile da riutilizzare ed informativo". ok 

Creare un file variable.js, dichiarare le variabili e assegnare i tipi di dati string, boolean, undefined e null. ok

Creare il file datatypes.js e utilizzare l'operatore JavaScript typeof per verificare i diversi tipi di dati. Controllare il tipo di dati di ogni variabile ok

Dichiarare quattro variabili senza assegnare valori ok

Dichiarare quattro variabili con valori assegnati ok

Dichiarare le variabili per memorizzare il proprio nome, cognome, stato civile, paese ed età in più righe.

Dichiarare le variabili per memorizzare il nome, il cognome, lo stato civile, il Paese e l'età in un'unica riga. ok

Dichiarare due variabili myAge e yourAge, assegnare loro i valori iniziali e registrarli nella console del browser.
I am 25 years old.
You are 30 years old.
*/

// I commenti possono rendere il codice leggibile
// Benvenuti a 30DaysOfJavaScript

/*
I commenti possono rendere il codice leggibile, facile da riutilizzare ed informativo
*/

let firstName = "John"; // string
let age = 25; // number
let isMarried = false; // boolean
let middleName; // undefined
let lastName = null; // null

typeof firstName; // "string"
typeof age; // "number"
typeof isMarried; // "boolean"
typeof middleName; // "undefined"
typeof lastName; // "object"

let a, b, c, d; // dichiarazione di quattro variabili senza valori assegnati

let e = "Hello",
  f = 10,
  g = true,
  h = null; // dichiarazione di quattro variabili con valori assegnati

let nome;
let cognome;
let statoCivile;
let paese;
let eta;

let myAge = 25;
let yourAge = 30;

console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);
