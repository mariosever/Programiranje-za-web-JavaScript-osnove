// If naredba
let age = 18;
let text = "You can Not drive!";

if (age >= 18) {
  text = "You can drive!";
}

console.log(text);


// JavaScript Ternary - "skraćeni" oblik pisanja
let age2 = 16;
let text2 = (age2 < 18) ?  "Minor" : "Adult";

console.log(text2);


// If Else naredba
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);


// If Else If naredba
const time = new Date().getHours();
let greeting2;
if (time < 10) {
  greeting2 = "Good morning";
} else if (time < 20) {
  greeting2 = "Good day";
} else {
  greeting2 = "Good evening";
}

console.log(greeting2);