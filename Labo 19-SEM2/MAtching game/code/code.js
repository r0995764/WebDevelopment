let global = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    IMAGES: ["../images/kaart1.png", "../images/kaart2.png", "../images/kaart3.png", "../images/kaart4.png","../images/kaart5.png" , "../images/kaart6.png" ],
    BACK_IMAGE: "../images/achterkant.png"
};


const setup = () => {
    let start = document.getElementById("start");
    start.addEventListener("click", placeCards);
}


const placeCards = ()  => {
    const fotoContainer = document.getElementById("img");
    const fotoURLs = global.IMAGES;

    const maxKaarten = global.AANTAL_HORIZONTAAL * global.AANTAL_VERTICAAL;

    let kaartenToegevoegd = 0;

    for (let i = 0; i < maxKaarten; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("cards");

        const foto = document.createElement("img");
        foto.src = global.BACK_IMAGE;
        foto.alt = "Afbeelding";

        foto.addEventListener("click", () => showVoorkant(foto, i));
        gridItem.appendChild(foto);
        fotoContainer.appendChild(gridItem);
        kaartenToegevoegd++;

        if (kaartenToegevoegd === maxKaarten) {
            break;
        }
    }
}
const showVoorkant = (foto, index) => {
    foto.src = global.IMAGES[index % global.IMAGES.length];
}
window.addEventListener("load", setup);