
// Promjena boje prvog kvadrata u plavu
function promijeniUPlavu() {
    document.getElementById("box1").style.backgroundColor = "blue";
}

// Drugi kvadrat mijenja boju 3 puta: crvena → žuta → zelena
function triBoje() {
    const box2 = document.getElementById("box2");
    const boje = ["red", "yellow", "green"];
    let i = 0;

    const interval = setInterval(() => {
        box2.style.backgroundColor = boje[i];
        i++;
        if (i >= boje.length) clearInterval(interval);
    }, 500); // promjena svakih 0.5 sekundi
}

// Treći kvadrat mijenja tekst u "Pozdrav hakeri"
function promijeniTekst() {
    document.getElementById("box3").innerText = "Pozdrav hakeri";
}

// Svi kvadrati postaju zeleni
function zelenaSve() {
    const svi = document.querySelectorAll(".box");
    svi.forEach(box => {
        box.style.backgroundColor = "green";
    });
}