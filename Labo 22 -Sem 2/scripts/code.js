const setup = () => {
    let go = document.getElementById("go")
    go.addEventListener("click", searchPage);
}

const searchPage = () => {
    let commando = document.getElementById("commando").value;
    let commandoMetPrefix = commando.substring(0,2);
    let zoekopdracht = commando.substring(3);
    zoekopdracht = zoekopdracht.replace("/\s+/g", "+");
    if(commandoMetPrefix === "/g"){
        window.open("https://www.google.com/search?q=" + zoekopdracht );
    }else if(commandoMetPrefix === "/y"){
        window.open("https://www.youtube.com/results?search_query=" + zoekopdracht);
    }else if(commandoMetPrefix === "/t"){
        window.open("https://twitter.com/hashtags/" + zoekopdracht);
    }else if(commandoMetPrefix === "/i"){
        window.open("https://www.instagram.com/explore/tags/"+ zoekopdracht + "/");
    }
    else{
        alert("ongeldig commando")
    }

}
window.addEventListener("load", setup);