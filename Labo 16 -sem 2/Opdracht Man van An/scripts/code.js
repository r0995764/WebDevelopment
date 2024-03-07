const setup = () => {
    let counter =0;
    let zoekWoord = "an";
    let zin = "De man van An geeft geen hand aan ambetante verwanten";
    let nummer = zin.indexOf(zoekWoord);

    while(nummer !== -1){
        nummer = zin.indexOf(zoekWoord, nummer +1);
        counter++;
    }
    console.log("an komt " + counter + " keer voor gevonden door indexOf");

    counter =0;
    nummer = zin.lastIndexOf(zoekWoord);
    while(nummer !== -1){
        nummer = zin.lastIndexOf(zoekWoord, nummer - 1)
        counter++;
    }
    console.log("an komt " + counter + " keer voor gevonden door lastIndexOf");
}
window.addEventListener("load", setup);