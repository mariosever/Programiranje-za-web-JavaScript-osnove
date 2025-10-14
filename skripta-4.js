// VJEŽBA

console.log("Pozdrav hakeri");
console.log(5 + 10 + 15);

/* Const način definiranja varijable zahtijeva deklaraciju i inicijalizaciju u istom trenutku. 
Ne dozvoljava promjenu deklaracije i nove inicijalizacije variable */
const mojaVarijabla = "Učimo varijable sa constom";
console.log(mojaVarijabla);

/* Let način definiranja varijable dozvoljava deklaraciju bez inicijalizacije. 
Ali ne dozvoljava ponovnu deklaraciju varijable.
Dozvoljeno je naknadno mijenjane vrijednosti varijable */
let mojaVarijabla2;
console.log(mojaVarijabla2);

mojaVarijabla2 = "Učimo varijable sa letom";
console.log(mojaVarijabla2);

/* Var način definiranja varijable dozvoljava deklaraciju bez inicijalizacije, ali i dozvoljava ponovnu deklaraciju.
Dozvoljeno je naknadno mijenjanje vrijednosti varijable kao i kod let-a, no također sama deklaracija će biti "hoistana", što znači
"dignuta" na početak skripte, ali bez njezine vrijednosti */
console.log(mojaVarijabla3);
var mojaVarijabla3;
var mojaVarijabla3 = "Učimo varijable sa varom";
console.log(mojaVarijabla3);

/* 
Imena varijabli ne smiju početi sa brojem, ali mogu u nastavku sadržavati broj. 
Imena varijabli mogu početi sa znakom, podcrtom i $ 
*/

// CamelCase način definiranja imena varijable.
const imePrezime = "Ivo Ivić";

// Vrste podataka u JavaScriptu

// 1. String - tekstualni niz znakova, uvijek stavljate kvačice za otvaranje i zatvaranje stringa
const _string = "Ovo je string";

// 2. Brojevi - koristimo decimale i cijele brojeve
const _brojevi = 5;
const decBroj = 3.14;

// 3. Logičke vrijednosti - Boolean - može biti samo true ili false
const _boolean = true;

// 4. Polja (Array)
let auti = ["bmw", "audi", "mercedes"];

// 5. Objekti
const ucenik = {ime: "Ana", prezime: "Anić", razred: "4.b"};


// Pomoću specijalnog operatera typeof možemo provjeriti tip vrijednost
console.log(typeof 5);
console.log(typeof "Ovo je string");
console.log(typeof imePrezime);

// Matematički operatori - npr zbrajanje | oduzimanje | mnozenje | djeljenje........
const starost = 2025;

const godStarostiJosip = starost - 2001;
const godStarostiMario = starost - 1988;

console.log(godStarostiJosip, godStarostiMario);

console.log(godStarostiJosip * 2, godStarostiMario / 2);

// Modulo - ostatak od djeljenja
console.log(8 % 3);

// Eksponent - ako želimo potencirati vrijednost
console.log(5 ** 2);

// Konkatencija stringova koristi "+" matematički operater za spajanje stringova

const ime = "Marko";
const prezime = "Markić";

console.log(ime + " " + prezime);

// USPOREDNI OPERATORI - < , >. <= , >=

console.log(godStarostiJosip > godStarostiMario);
console.log(godStarostiJosip >= 18);
console.log(godStarostiMario >= 18);

/* Redoslijed izvođenja matematički i usporednih operatera */

console.log(starost > starost - 1999);


// Primjer konkatenacije

const naziv = "Ivan";
const posao = "Vatrogasac";
const godRodjenja = 2005;
const godina = 2025;

const ispis =
  "Ja sam " +
  naziv +
  ", " +
  posao +
  ", rođen " +
  godRodjenja +
  ". Trenutno je " +
  godina +
  " godina.";

console.log(ispis);

/* Template literal način pisanja (Uveden sa ES6 Verzijom) nam omogućavaju lakše ispise ovakvih konkatenacija.
Template literale otvaramo/zatvaramo tzv. backtikovima "desni alt+7"
Znakom $ i vitičastim zagradama pozivamo vrijednost varijable unutar template literala. */

const ispis2 = `Ja sam ${naziv}, ${posao}, rođen ${godRodjenja}. godine.  Trenutno je ${godina} godina.`;
console.log(ispis2);





