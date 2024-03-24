const setup = () => {
    let tekstToChange = document.querySelectorAll("body p")[0];
    tekstToChange.innerHTML = "Good Job!";
}
window.addEventListener("load", setup);