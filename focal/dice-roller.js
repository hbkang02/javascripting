//finding a random num 1-6

const args = process.argv.slice(2);

//take single parameter(number) from the command line and rolls that many six-sided dice.

//generate random number that counts to 1-6
function rollDice () {
  return Math.floor(Math.random() * 6) + 1;
}

function diceRolled(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    let dice = rollDice();
    result.push(dice);
  }
  return result;
}

let result1 = diceRolled(args).join(", ");

console.log(`Rolled ${args} dice: ${result1};`);