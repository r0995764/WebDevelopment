const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring)
}

const substring = () =>{
    let txtInput = document.getElementById("txtInput").value;
    let txtOutput = document.getElementById("txtOutput");
    let leftNumber = document.getElementById("numberInputLeft").valueAsNumber;
    let rightNumber = document.getElementById("numberInputRight").valueAsNumber;
    let result = txtInput.substring(leftNumber, rightNumber);
    txtOutput.innerHTML = result;
}

window.addEventListener("load", setup);