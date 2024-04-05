let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let start = document.getElementById("start");
    start.addEventListener("click", startGame);
};

const getRandomImage = () => {
    return global.IMAGE_PATH_PREFIX + Math.floor(Math.random() * global.IMAGE_COUNT) + global.IMAGE_PATH_SUFFIX;
};

const moveImage = () => {
    let nieuwe_Image = document.getElementById("target");
    let newTop = Math.floor(Math.random() * window.innerHeight);
    let newLeft = Math.floor(Math.random() * window.innerWidth);
    nieuwe_Image.style.top = newTop + "px";
    nieuwe_Image.style.left = newLeft + "px";
};


const startGame = () => {
    let nieuwe_Image = document.getElementById("target");

    moveImage();
    nieuwe_Image.addEventListener('click', function(event) {
        if (nieuwe_Image.src.endsWith("0.png")) {
            const result = document.createElement("p");
            const resultaat = document.getElementById("playField");
            result.innerHTML = global.score + " aantal hits voor je op de bom hebt geklikt.";
            resultaat.appendChild(result);
            alert("Game Over!");
            resetGame();
            
        } else {
            moveImage();
            changeImage();
            global.score++;
        }
    });
    startTimeout();
};

const changeImage = () => {
    let nieuwe_Image = document.getElementById("target");
    nieuwe_Image.src = getRandomImage();
};

const startTimeout = () => {
    global.timeoutId = setInterval(changeImage, global.MOVE_DELAY);
};

const resetLocation = () => {
    let nieuwe_Image = document.getElementById("target");
    nieuwe_Image.style.top = "0px";
    nieuwe_Image.style.left = "60px";
};

const resetGame = () => {
    global.score = 0;
    clearInterval(global.timeoutId);
    resetLocation();
};

window.addEventListener("load", setup);