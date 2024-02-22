
const setup = () => {
        document.getElementById("knop").addEventListener("click", function() {
            document.getElementById("txtOutput").innerHTML = "Welkom!";
        });
}
window.addEventListener("load", setup);
