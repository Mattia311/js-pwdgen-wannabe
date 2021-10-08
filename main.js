// chiedere nome 
const firstName = prompt("Qual'è il tuo nome?");
console.log("ciao " + firstName);

// chiedere cognome
const secondName = prompt("Qual'è il tuo cognome?");
console.log(secondName);

// chiedere colore preferito
const preferitColor = prompt("Qual'è il tuo colore preferito?");
console.log(preferitColor);

//risultato domande
document.getElementById('domande').innerHTML = "Ciao " + (firstName) + (secondName) + (preferitColor) + 21;