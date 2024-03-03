const setup = () => {
    const belangrijkeElementen = document.getElementsByClassName('belangrijk');
    for(let i = 0; belangrijkeElementen.length; i++){
        belangrijkeElementen[i].classList.add('opvallende');
    }
}
window.addEventListener("load", setup);