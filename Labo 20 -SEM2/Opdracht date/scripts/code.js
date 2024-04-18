const setup = () => {
    let d = new Date();
    let mijnGeboorte = new Date(2005, 4, 8);
    let verschilInLMilli = d-mijnGeboorte;
    let aantaldagen = Math.floor(verschilInLMilli/(1000*60*60*24));
    console.log(aantaldagen);
}
window.addEventListener("load", setup);