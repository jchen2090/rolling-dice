const rollDiceBtn = document.getElementById("rollDice");
const diceOne = document.getElementById("diceOne");
const diceTwo = document.getElementById("diceTwo");
const totalDisplay = document.getElementById("total");

const generateRandomNum = () => {
  const num = Math.random() * 6 + 1;
  return Math.floor(num);
};

const rollDice = () => {
  const diceOneRoll = generateRandomNum();
  const diceTwoRoll = generateRandomNum();

  diceOne.innerHTML = diceOneRoll;
  diceTwo.innerHTML = diceTwoRoll;
  totalDisplay.innerHTML = `Total Value: ${diceOneRoll + diceTwoRoll}`;
};

rollDiceBtn.addEventListener("click", rollDice);
