const setup = () => {
    let herbereken = document.getElementById("knop");
    herbereken.addEventListener("click", herberekenen)
}
const herberekenen = () => {
    let Prijs = document.getElementsByClassName("prijs");
    let aantal = document.getElementsByClassName("input");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");

    let total =0;
    for (let i = 0; i < Prijs.length; i++) {
        let resultaat = Prijs[i].textContent;
        let nummer = parseFloat(resultaat);

        let resultaat2 = aantal[i].value;
        let Aantal = parseFloat(resultaat2);

        let resultaat3 = btw[i].textContent;
        let btwNummer = parseFloat(resultaat3);

        let nummerAantal = nummer * Aantal;
        let BTWnummeraantal = nummerAantal + (nummerAantal * (btwNummer/100));

        let BTWNummerAantal  = BTWnummeraantal.toFixed(2)
        subtotaal[i].innerHTML = BTWNummerAantal + " Eur";

        total += BTWnummeraantal;

    }

    totaal.innerHTML = total.toFixed(2) + " Eur"

}
window.addEventListener("load", setup);