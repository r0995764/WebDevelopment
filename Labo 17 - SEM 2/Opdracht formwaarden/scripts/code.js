const setup = () => {
    let action = document.getElementById("knop");
    action.addEventListener("click", submit);
}
const submit = () => {
    console.log(document.getElementById("isRoker").checked ? "is een roker" : "is geen roker");
    let moedertaal =document.getElementsByClassName("moedertaal");
    for(let i = 0; i<=moedertaal.length; i++){

    }


}
window.addEventListener("load", setup);