const setup = () => {
    let string = "onoorbaar";
    for(let i = 0; i < string.length - 2; i++){
        let trigram = string.slice(i, i+3);
        console.log(trigram);
    }
}
window.addEventListener("load", setup);