const setup = () => {
    let pElement = document.getElementById("knop");
    pElement.addEventListener("click", wijzig);
}

const wijzig = () => {
    let woord = document.getElementById("txtOutput");
    if (woord.innerHTML === "Hello world!") {
        woord.innerHTML = "Welkom";
    } else {
        woord.innerHTML = "Hello world!";
    }
}

window.addEventListener("load", setup);