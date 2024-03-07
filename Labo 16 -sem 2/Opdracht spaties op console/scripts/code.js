const setup = () => {
    let spatie = document.getElementById("spatie");
    spatie.addEventListener("click", spaties);
    spaties()
}
const spaties = () =>{
    let input = document.getElementById("txtInput").value;
    let split = maakMetSpaties(input);
    console.log(split);
}
const maakMetSpaties = (input) => {
    let split = input.replace(/\s/g, '');
    return split.split('').join(' ');
}

window.addEventListener("load", setup);