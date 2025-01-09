// INFO: main variables, way to interact with html elements
const valueMain = document.getElementById("valueID");
const rollBtn = document.getElementById("rollID");
const diceImg = document.createElement("img");
let diceImgValue;
let diceValue;

function update() {
    valueMain.innerHTML = diceValue;
    diceImgValue = "dice" + diceValue + ".png";
    console.log(diceImgValue);
}

// INFO: main roll function, the main reason the dice image functionality works 
rollBtn.onclick = function() {
    diceValue = Math.floor(Math.random() * 5) + 1;
    console.log(diceValue);
    update();
    diceimage();
}

// INFO: sets the dice image functionaliy up,
function diceimage() {
    diceImg.setAttribute("src", `/assets/${diceImgValue}`);
    diceImg.setAttribute("id", "diceID")
    diceImg.setAttribute("class", "diceCLASS")
    document.getElementById("diceDIV").appendChild(diceImg);
}