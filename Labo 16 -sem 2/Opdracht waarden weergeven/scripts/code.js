const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date();
    print(`Het type is: ${typeof leeftijd}`);
    print(`Het type is: ${typeof intrest}`);
    print(`Het type is: ${typeof isGevaarlijk}`);
    print(`Het type is: ${typeof vandaag}`);
}
const print = (message) => {
    console.log(message);
    document.getElementById("output").innerHTML += `<p>${message}</p>`;
}
window.addEventListener("load", setup);