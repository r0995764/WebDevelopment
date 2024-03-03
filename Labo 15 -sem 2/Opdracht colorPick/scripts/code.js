const setup = () => {
    const slider = document.getElementsByClassName("slider")

    for(let i =0; i<slider.length;i++){
        slider[i].addEventListener("change", changeColor);
        slider[i].addEventListener("input", changeColor);
    }
    changeColor();

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



window.addEventListener("load", setup);