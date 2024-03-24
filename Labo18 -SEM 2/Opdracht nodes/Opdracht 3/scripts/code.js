
const setup = () =>{
document.getElementById("knop").addEventListener("click", maakAppend);
}

const maakAppend=() =>{
    let pElement = document.createElement("p");
    let divElement = document.getElementById("myDIV");
    let tekst = document.createTextNode("Dit is een random tekstbestandje die door de duw op de knop tevoorschijnkomt.");
    pElement.appendChild(tekst);

    divElement.appendChild(tekst);
}
window.addEventListener("load", setup);