// Esercizio: Livello 1

// 1. Dichiarare una variabile chiamata sfida e assegnarle un valore iniziale '30 Days Of JavaScript'.

let sfida = "30 Days Of JavaScript";

// 2. Stampate la stringa sulla console del browser usando console.log().

console.log(sfida);

// 3. Stampate la lunghezza della stringa nella console del browser usando console.log().

console.log(sfida.length);

// 4. Cambiare tutti i caratteri della stringa in lettere maiuscole utilizzando il metodo toUpperCase().

console.log(sfida.toUpperCase());

// 5. Cambiare tutti i caratteri della stringa in lettere minuscole usando il metodo toLowerCase().

console.log(sfida.toLowerCase());

// 6. Tagliare (slice) la prima parola della stringa utilizzando il metodo substr() o substring().

console.log(sfida.substring(0, 2));

// 7. Tagliare la frase Giorni di JavaScript da 30 Giorni di JavaScript.
console.log(sfida.substring(3));

// 8. Verificare se la stringa contiene la parola Script utilizzando il metodo includes().

console.log(sfida.includes("Script"));

// 9. Dividere la stringa in un array usando il metodo split().

console.log(sfida.split(""));

// 10. Dividere la stringa 30 Days Of JavaScript nello spazio usando il metodo split().

console.log(sfida.split(" "));

// 11. "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" split la stringa alla virgola e la trasforma in un array.

let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(string.split(","));

// 12. Cambiare 30 Days Of JavaScript in 30 Days Of Python usando il metodo replace().

console.log(sfida.replace("JavaScript", "Python"));

// 13. Qual è il carattere all'indice 15 nella stringa '30 giorni di JavaScript'? Usate il metodo charAt().

console.log(sfida.charAt(15));

// 14. Qual è il codice del carattere J nella stringa '30 Days Of JavaScript' usando il metodo charCodeAt().

console.log(sfida.charCodeAt(11));

// 15. Usate indexOf per determinare la posizione della prima occorrenza di a in 30 Giorni Di JavaScript.

console.log(sfida.indexOf("a"));

// 16. Usate lastIndexOf per determinare la posizione dell'ultima occorrenza di a in 30 Days Of JavaScript.

console.log(sfida.lastIndexOf("a"));

// 17. Usate indexOf per trovare la posizione della prima occorrenza della parola perché nella seguente frase:
//     "Non si può terminare una frase con perché perché perché è una congiunzione".
let b =
  "Non si può terminare una frase con perché perché perché è una congiunzione";

console.log(b.indexOf("perché"));

// 18. Usate lastIndexOf per trovare la posizione dell'ultima occorrenza della parola perché nella seguente frase:
//     'Non si può concludere una frase con perché perché perché è una congiunzione'.

console.log(b.lastIndexOf("perché"));

// 19. Usare search per trovare la posizione della prima occorrenza della parola perché nella seguente frase:
//     'Non si può terminare una frase con perché perché perché è una congiunzione'

console.log(b.search("perché"));

// 20. Usate trim() per rimuovere gli spazi bianchi all'inizio e alla fine di una stringa, ad esempio ' 30 Days Of JavaScript '.

let c = " 30 Days Of JavaScript ";
console.log(c.trim());

// 21. Usate il metodo startsWith() con la stringa 30 Days Of JavaScript e rendete il risultato vero.

console.log(sfida.startsWith("30"));

// 22. Usate il metodo endsWith() con la stringa 30 Days Of JavaScript e fate in modo che il risultato sia vero.

console.log(sfida.endsWith("JavaScript"));

// 23. Usare il metodo match() per trovare tutti gli a in 30 Giorni Di JavaScript.

console.log(sfida.match(/a/g));

// 24. Usare il metodo concat() e unire '30 giorni di' e 'JavaScript' in un'unica stringa, '30 giorni di JavaScript'.

console.log("30 giorni di ".concat("JavaScript"));

// 25. Usate il metodo repeat() per stampare 30 Giorni Di JavaScript 2 volte.

console.log(sfida.repeat(2));

// Esercizio: Livello 2

// 1. Utilizzando console.log() stampate la seguente dichiarazione:
//    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.",
);

// 2. Utilizzando console.log() stampate la seguente citazione di Madre Teresa:
//    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.",
);

// 3. Verificare se typeof '10' è esattamente uguale a 10. Se non lo è, renderlo esattamente uguale.

console.log(typeof "10" === typeof 10); // false: "10" è string, 10 è number
console.log(typeof Number("10") === typeof 10); // true: entrambi number

// 4. Verificare se parseFloat('9.8') è uguale a 10. In caso contrario, renderlo esattamente uguale a 10.

console.log(parseFloat("9.8") === 10); // false
console.log(Math.ceil(parseFloat("9.8")) === 10); // true

// 5. Controllare se 'on' si trova sia in python che in jargon.

console.log("python".includes("on"));
console.log("jargon".includes("on"));

// 6. Spero che questo corso non sia pieno di jargon. Verificate se il gergo è presente nella frase.

let parola = "I hope this course is not full of jargon";
console.log(parola.includes("jargon"));

// 7. Generare un numero casuale compreso tra 0 e 100.
console.log(Math.floor(Math.random() * 101));

// 8. Generare un numero casuale compreso tra 50 e 100, incluso.
console.log(Math.floor(Math.random() * 51) + 50);

// 9. Generare un numero casuale compreso tra 0 e 255 incluso.
console.log(Math.floor(Math.random() * 256));

// 10. Accedere ai caratteri della stringa 'JavaScript' utilizzando un numero casuale.
let stringa = "JavaScript";
let randomIndex = Math.floor(Math.random() * stringa.length);
console.log(stringa[randomIndex]);

// 11. Usare console.log() e i caratteri di escape per stampare il seguente schema:
//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
console.log(
  "1 1 1 1 1" +
    "\n2 1 2 4 8" +
    "\n3 1 3 9 27" +
    "\n4 1 4 16 64" +
    "\n5 1 5 25 125",
);

// 12. Usa substr per tagliare la frase 'perché perché perché' dalla seguente frase:
//     'Non si può concludere una frase con perché perché perché è una congiunzione'
let text_perché =
  "Non si può concludere una frase con perché perché perché è una congiunzione";

console.log(text_perché.substr(36, 20));

// Esercizio: Livello 3

// 1. Contate il numero di parole 'amore' in questa frase.
let text_amore =
  "L'amore è la cosa migliore di questo mondo. Alcuni hanno trovato il loro amore e altri lo stanno ancora cercando.";

console.log(text_amore.match(/amore/g).length);

// 2. Usate match() per contare il numero di tutti i 'perché' nella seguente frase:
let text_match =
  "Non si può concludere una frase con perché perché perché è una congiunzione";

console.log(text_match.match(/perché/g).length);

// 3. Pulite il testo seguente e trovate la parola più frequente.
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const cleaned = sentence.replace(/[%$@&#;!#?]/g, "").toLowerCase();
const words = cleaned.split(" ").filter((w) => w !== "");
const freq = {};
words.forEach((w) => (freq[w] = (freq[w] || 0) + 1));
const mostFrequent = Object.keys(freq).reduce((a, b) =>
  freq[a] > freq[b] ? a : b,
);
console.log(
  "Parola più frequente:",
  mostFrequent,
  "— occorrenze:",
  freq[mostFrequent],
);

// 4. Calcolare il reddito totale annuo della persona estraendo i numeri dal testo seguente:
//    'Guadagna 5000 euro di stipendio al mese, 10000 euro di bonus annuale, 15000 euro di corsi online al mese'.

let text =
  "Guadagna 5000 euro di stipendio al mese, 10000 euro di bonus annuale, 15000 euro di corsi online al mese";

let number = text.match(/\d+/g).map((number) => parseInt(number));
let total = number[0] * 12 + number[1] + number[2] * 12;
console.log(total);
