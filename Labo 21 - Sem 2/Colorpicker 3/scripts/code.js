const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", () => {
            changeColor();
            storeSliderValues();
        });
        sliders[i].addEventListener("input", () => {
            changeColor();
            storeSliderValues();
        });
    }

    let saveButton = document.getElementById("save");
    saveButton.addEventListener("click", saveSwatch);

    restoreSliderValues();
    restoreSwatches();
    changeColor(); // Move this after restoring to reflect the initial saved state
}

const changeColor = () => {
    const redSlider = document.getElementById('red-slider').valueAsNumber;
    const greenSlider = document.getElementById('green-slider').valueAsNumber;
    const blueSlider = document.getElementById('blue-slider').valueAsNumber;

    const colorBox = document.getElementById("color-box");
    const outputRed = document.getElementById("txtOutputRed");
    const outputGreen = document.getElementById("txtOutputGreen");
    const outputBlue = document.getElementById("txtOutputBlue");

    let color = `rgb(${redSlider},${greenSlider}, ${blueSlider})`;
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

    swatch.addEventListener("click", () => {
        document.getElementById("red-slider").value = redSlider;
        document.getElementById("green-slider").value = greenSlider;
        document.getElementById("blue-slider").value = blueSlider;
        changeColor();
    });
    const deleteButton = document.createElement("button"); // Changed from knop to button
    deleteButton.classList.add("verwijder");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
        swatches.removeChild(swatch);
        storeSwatches();
    });

    swatch.appendChild(deleteButton);
    swatches.appendChild(swatch);

    storeSwatches();
}

const storeSliderValues = () => {
    let sliders = document.getElementsByClassName("slider");
    let sliderValues = {};

    for (let slider of sliders) {
        sliderValues[slider.id] = slider.value;
    }
    localStorage.setItem("sliderValues", JSON.stringify(sliderValues));
}

const restoreSliderValues = () => {
    let savedValues = localStorage.getItem("sliderValues");

    if (savedValues) {
        savedValues = JSON.parse(savedValues);

        for (let id in savedValues) {
            document.getElementById(id).value = savedValues[id];
        }
    }
}

const storeSwatches = () => {
    let swatches = document.getElementsByClassName("swatch");
    let savedSwatches = [];

    for (let swatch of swatches) {
        savedSwatches.push(swatch.style.backgroundColor);
    }
    localStorage.setItem("swatches", JSON.stringify(savedSwatches));
}

const restoreSwatches = () => {
    let savedSwatches = localStorage.getItem("swatches");

    if (savedSwatches) {
        savedSwatches = JSON.parse(savedSwatches);

        const swatches = document.getElementById("swatches");

        for (let color of savedSwatches) {
            const swatch = document.createElement("div");
            swatch.classList.add("swatch");
            swatch.style.backgroundColor = color;

            swatch.addEventListener("click", () => {
                const rgb = color.match(/\d+/g);
                document.getElementById("red-slider").value = rgb[0];
                document.getElementById("green-slider").value = rgb[1];
                document.getElementById("blue-slider").value = rgb[2];
                changeColor();
            });

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("verwijder");
            deleteButton.textContent = "X";
            deleteButton.addEventListener("click", () => {
                swatches.removeChild(swatch);
                storeSwatches();
            });

            swatch.appendChild(deleteButton);
            swatches.appendChild(swatch);
        }
    }
}

window.addEventListener("load", setup);
