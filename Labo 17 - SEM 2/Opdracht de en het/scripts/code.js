const setup = () => {
    let zin = " Gisteren zat de jongen op de stoep en at de helft van de appel";
    let array = zin.split(" ");
    for(let i =0; i<array.length; i++){
        if(array[i] === "de"){
            array[i] = "het";
        } else if(array[i] === "De"){
            array[i] = "Het";
        }
    }

    console.log(array.join(" "));

}


window.addEventListener("load", setup);