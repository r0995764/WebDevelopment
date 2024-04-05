const setup = () => {
    let selectKip = document.getElementById("kip");
    let zin = document.getElementById("note");
let div = document.getElementById("img");
    for(let i = 0; i<=selectKip.length;i++){
        if(selectKip[i].value === "een kip zonder een ei"){
            div.classList.remove("hidden");
            let stijl = window.getComputedStyle(div);
            let div = stijl.getPropertyValue("background-image");

            zin.innerHTML ="Hierboven, " + selectKip.value;
        }
        if(selectKip[i].value === "een kip met een ei"){
            div.classList.remove("hidden");
            div.classList.add("with-egg");
        }
    }

    let counter =0;
    let zoekLetter = document.getElementById("letter").value;
    let nummer = zin.indexOf(zoekLetter);

    while(nummer !== -1){
        nummer = zin.indexOf(zoekLetter, nummer +1);
        counter++;
    }
    zin.innerHTML = "Letter " + zoekLetter + "komt 1 keer voor in bovenstaande zin."
}
window.addEventListener("load", setup);