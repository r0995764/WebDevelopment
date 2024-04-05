
const setup = () => {
    const slider = document.getElementsByClassName("slider")
    const redSlider = document.getElementById('red-slider').valueAsNumber;
    const greenSlider = document.getElementById('green-slider').valueAsNumber;
    const blueSlider = document.getElementById('blue-slider').valueAsNumber;
    for(let i =0; i<slider.length;i++){
        slider[i].addEventListener("change", changeColor);
        slider[i].addEventListener("input", changeColor);
    }
    changeColor();
    let save = document.getElementById("save");
    save.addEventListener("click",  () =>{
        saveSwatch(redSlider, greenSlider, blueSlider);
    });

}
const changeColor = () =>{
    const redSlider = document.getElementById('red-slider').valueAsNumber;
    const greenSlider = document.getElementById('green-slider').valueAsNumber;
    const blueSlider = document.getElementById('blue-slider').valueAsNumber;
    const colorBox = document.getElementById("color-box");
    const OutputRed = document.getElementById("txtOutputRed");
    const outputGreen = document.getElementById("txtOutputGreen");
    const outputBlue = document.getElementById("txtOutputBlue");

    let color = `rgb(${redSlider},${greenSlider}, ${blueSlider} )`;
    colorBox.style.backgroundColor = color;
    OutputRed.innerHTML = redSlider;
    outputGreen.innerHTML = greenSlider;
    outputBlue.innerHTML = blueSlider;

}
const saveSwatch = (red,green,blue) =>{
    const swatches = document.getElementById("swatches");

    const swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    const verwijderKnop = document.createElement("knop");
    verwijderKnop.classList.add("verwijder");
    verwijderKnop.textContent = "X";

    verwijderKnop.addEventListener("click", () => {
        swatch.remove();
    });

    swatch.appendChild(verwijderKnop);
    swatches.appendChild(swatch);

    swatch.addEventListener("click" , () =>{
        document.getElementById("red-slider").value = red;
        document.getElementById("green-slider").value = green;
        document.getElementById("blue-slider").value = blue;
        changeColor();
    })
}