const setup = () => {
    document.getElementById("knop").addEventListener("click", kleurVeranderen);

}
const kleurVeranderen = () =>{
    let li = document.querySelectorAll(" li ");
    for(let i = 0; i<li.length;i++){
        li[i].classList.add("listitem");
    }
    let kleurVeranderen = document.createElement("style");
    kleurVeranderen.textContent= ".listitem{ color: red; }";
    document.head.appendChild(kleurVeranderen);

    let foto = document.createElement("img");
    foto.src = "Images/WIN_20240111_21_03_56_Pro.jpg"
    document.getElementById("img").appendChild(foto);
}
window.addEventListener("load", setup);