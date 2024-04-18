const setup = () => {
    let student1 = {
        leeftijd: 18,
        Vrienden: ['Guust', 'Andres', 'Jarne'],
        zitInKsa: false,
        adres : {
            straat: 'meidoornstraat',
            nummer: 9
        },
        zitInKsa: true
    };

    let teTonen = JSON.stringify(student1);
    console.log(teTonen);


    console.log((JSON.parse(teTonen).adres));
}
window.addEventListener("load", setup);