
let personen=[];

const voegPersonenToe= () =>{
    personen.push({
            voornaam: 'Jan',
            familienaam: 'Janssens',
            geboorteDatum: new Date('2010-10-10'),
            email: 'jan@example.com',
            aantalKinderen: 0
        },
        {
            voornaam: 'Mieke',
            familienaam: 'Mickelsen',
            geboorteDatum: new Date('1980-01-01'),
            email: 'mieke@example.com',
            aantalKinderen: 1
        },
        {
            voornaam: 'Piet',
            familienaam: 'Pieters',
            geboorteDatum: new Date('1970-12-31'),
            email: 'piet@example.com',
            aantalKinderen: 2
        })
        personenLijstControle();
}
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    let voornaam = document.getElementById("txtVoornaam").value;
    let familienaam = document.getElementById("txtFamilienaam").value;
    let geboorteDatum = document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById("txtEmail").value;
    let aantalKinderen = document.getElementById("txtAantalKinderen").value;

    let persoonNieuw = {
        voornaam: voornaam,
        familienaam: familienaam,
        geboorteDatum: geboorteDatum,
        email: email,
        aantalKinderen: aantalKinderen
    }
    let lstPersonen = document.getElementById("lstPersonen");
    let indexPersonen = lstPersonen.selectedIndex;
    if(indexPersonen !== -1){
        // een nieuw aangemaakte persoon voegen we toe
        personen.push(persoonNieuw);
    }else{
        // een bestaande persoon in de lijst passen we aan
        personen[indexPersonen] = persoonNieuw;
    }

    // indien ok, bewaar de ingegeven data.

    personenLijstControle();

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const personenLijstControle= () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";
    personen.forEach((persoon, index) => {
        const option = document.createElement("option");
        option.text = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = index;
        lstPersonen.add(option);
    });
}
// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};
const toonPersoonGeselecteerd = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    let indexPersonen = lstPersonen.selectedIndex;
    if(indexPersonen !== -1){
        let indexPersoon = personen[indexPersonen]
        document.getElementById("txtVoornaam").value = indexPersoon.voornaam;
        document.getElementById("txtFamilienaam").value = indexPersoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = indexPersoon.geboorteDatum;
        document.getElementById("txtEmail").value = indexPersoon.email;
        document.getElementById("txtAantalKinderen").value = indexPersoon.aantalKinderen;
    }

}
// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("click", toonPersoonGeselecteerd);

    voegPersonenToe();
};

window.addEventListener("load", setup);