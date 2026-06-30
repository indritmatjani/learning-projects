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

console.log(sfida.startsWith("Javascript"));

// 23. Usare il metodo match() per trovare tutti gli a in 30 Giorni Di JavaScript.

console.log(sfida.match("a"));

// 24. Usare il metodo concat() e unire '30 giorni di' e 'JavaScript' in un'unica stringa, '30 giorni di JavaScript'.

let concat = concat("30 giorni di", "JavaScript");

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

let stringaten = "10";
let ten = 10;

console.log(typeof ten);
console.log(typeof stringaten);
if (ten === stringaten) {
  parseInt(stringaten);
}

// 4. Verificare se parseFloat('9.8') è uguale a 10. In caso contrario, renderlo esattamente uguale a 10.

// 5. Controllare se 'on' si trova sia in python che in jargon.

// 6. Spero che questo corso non sia pieno di jargon. Verificate se il gergo è presente nella frase.

// 7. Generare un numero casuale compreso tra 0 e 100.

// 8. Generare un numero casuale compreso tra 50 e 100, incluso.

// 9. Generare un numero casuale compreso tra 0 e 255 incluso.

// 10. Accedere ai caratteri della stringa 'JavaScript' utilizzando un numero casuale.

// 11. Usare console.log() e i caratteri di escape per stampare il seguente schema:
//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125

// 12. Usa substr per tagliare la frase 'perché perché perché perché' dalla seguente frase:
//     'Non si può concludere una frase con perché perché perché è una congiunzione'

// Esercizio: Livello 3

// 1. "L'amore è la cosa migliore di questo mondo. Alcuni hanno trovato il loro amore e altri lo stanno ancora cercando."
//    Contate il numero di parole 'amore' in questa frase.

// 2. Usate match() per contare il numero di tutti i 'perché' nella seguente frase:
//    "Non si può concludere una frase con perché perché perché è una congiunzione".

// 3. Pulite il testo seguente e trovate la parola più frequente (suggerimento: usate replace ed espressioni regolari).
//    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// 4. Calcolare il reddito totale annuo della persona estraendo i numeri dal testo seguente:
//    'Guadagna 5000 euro di stipendio al mese, 10000 euro di bonus annuale, 15000 euro di corsi online al mese'.
