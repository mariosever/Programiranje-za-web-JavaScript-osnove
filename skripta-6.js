// Funkcije u JavaScriptu

// Definiranje funkcije
function mojaFunkcija() {
    console.log("Pozdrav iz funkcije!");
}
// Pozivanje funkcije
mojaFunkcija();


// Funkcije s argumentima
function zbroji(a, b) {
    return a + b;
}

console.log(zbroji(2,3));
console.log(zbroji(18,56));
console.log(zbroji(123,456));


function pozdrav(ime) {
    console.log("Dobar dan " + ime + "!");
}

pozdrav("Ivo");
pozdrav("Ana");
pozdrav("Filip");


// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Call the toCelcius() function
let value = toCelsius(77);
console.log(value);

