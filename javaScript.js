// JavaScript source code

//  Variabler
// javascript bruker ikke forskjellige typer som int, String osv
let int = 8;
let desimaltall =0.9;
let string = "svein ove";
let string2 = 'kan bruke vanlig eller enkel "';
let bool = false;
let lastName = null; //kan brukes for å fjerne værdien av en eller annen let
const y = 7; // kan ikke endres som static i java

console.log("hello World");


// Endre veriabler
let forNavn = "Svein";
console.log(forNavn);
forNavn = "Svein Ove";
console.log(forNavn);


// Objekt

let person = {
    navn: "Svein Ove",
    alder: 34
};
// Endre ting i objekter
// to måter
person.navn = "Tom";
person["navn"] = "Svein Ove" // brukes når delene av objektet bestemmes under bruk slik at navn her kan endres til eksempel alder dersom det var tanken

console.log(person)