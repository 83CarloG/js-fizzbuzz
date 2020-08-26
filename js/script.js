// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

// Forma lunga

// 1 Ciclo 100 numeri da 1 a 100
for (var i = 1; i < 101; i++) {
// 2 Controllo se è divisibile per 15 (5*3)
	if (i % 15 === 0) {
		console.log('FizzBuzz');
	}
// 3 Controllo se è divisibile per 3
	else if (i % 3 === 0) {
		console.log('Fizz');
	}
// 4 Controllo se è divisibile per 5
	else if (i % 5 === 0) {
		console.log('Buzz');
	}
// 5 Altrimenti stampo il numero
	else {
		console.log(i);
	}
}

// // Metodo ternario + falsy e truthy valori
// // Ciclo i numeri da 0 a 100
// for (var i = 0; i < 100;) {
// // Entro nel ternario con ++i quindi iniziando da 1 e finendo con 100
// // uso il ternario ricordandomi che 0 è "" sono falsy value
// // Sapendo che la valutazione dell'operatore logico va da sx verso destra e se il primo risultato è true Js non guarda il secondo  (ex. ("" + "" \\ 7) = 7) (ex. ("FizzBuzz" || 15) = "FizzBuzz") :
// // se c'è un false nel primo ternario stampero 'Fizz'
// // se c'è un false nel secondo ternario stamperò 'Buzz'
// // se ci sono due false nei ternari stamperò 'FizzBuzz'
// // altrimenti stamperò il numero console.log(i);
// 	console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
// }
