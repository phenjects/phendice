function rollDice() {
  // INFO: main variables, way to interact with html elements.
  const valueMain = document.getElementById("valueID");
  const diceAmt = document.getElementById("amountID").value;
  const diceImg = [];
  const result = [];

  for (let i = 0; i < diceAmt; i++) {
    // INFO: main roll function, the main reason the dice image functionality works.
    const diceValue = Math.floor(Math.random() * 5) + 1;
    result.push(diceValue)
    console.log(diceValue);
    diceImg.push(`<img src='/assets/dice${diceValue}.png' class="diceCLASS">`);
    document.getElementById("diceimageDIV").innerHTML = diceImg.join("");
  }

  valueMain.innerHTML = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


  // INFO: sets the dice image functionality up, a visual representation of the dice so the site isn't boring as shit.
}
