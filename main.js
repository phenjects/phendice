const valueMain = document.getElementById("valueID");
const rollBtn = document.getElementById("rollID");
let diceValue;

rollBtn.onclick = function() {
    diceValue = Math.round(Math.random(1) * 6);
    console.log(diceValue);
}