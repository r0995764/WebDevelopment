const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", changeColor);
        sliders[i].addEventListener("input", changeColor);
    }

    let saveButton = document.getElementById("save");
    saveButton.addEventListener("click", saveSwatch);
}

const changeColor = () => {
    const redSlider = document.getElementById('red-slider').valueAsNumber;
    const greenSlider = document.getElementById('green-slider').valueAsNumber;
    const blueSlider = document.getElementById('blue-slider').valueAsNumber;

    const colorBox = document.getElementById("color-box");
    const outputRed = document.getElementById("txtOutputRed");
    const outputGreen = document.getElementById("txtOutputGreen");
    const outputBlue = document.getElementById("txtOutputBlue");

    let color = `rgb(${redSlider},${greenSlider}, ${blueSlider} )`;
    colorBox.style.backgroundColor = color;
    outputRed.innerHTML = redSlider;
    outputGreen.innerHTML = greenSlider;
    outputBlue.innerHTML = blueSlider;
}

const saveSwatch = () => {
    const redSlider = document.getElementById('red-slider').valueAsNumber;
    const greenSlider = document.getElementById('green-slider').valueAsNumber;
    const blueSlider = document.getElementById('blue-slider').valueAsNumber;

    const swatches = document.getElementById("swatches");

    const swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = `rgb(${redSlider}, ${greenSlider}, ${blueSlider})`;

    const verwijderKnop = document.createElement("knop");
    verwijderKnop.classList.add("verwijder");
    verwijderKnop.textContent = "X";
    verwijderKnop.addEventListener("click", () => {
        swatches.removeChild(swatch);
    });

    swatch.appendChild(verwijderKnop);
    swatches.appendChild(swatch);

    swatch.addEventListener("click", () => {
        document.getElementById("red-slider").value = redSlider;
        document.getElementById("green-slider").value = greenSlider;
        document.getElementById("blue-slider").value = blueSlider;
        changeColor();
    });
}

window.addEventListener("load", setup);