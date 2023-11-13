/* 
 * Random Integer reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const rollTextbox = document.getElementById('roll');
const rollOutput = document.getElementById('result');
const outcome = document.getElementById('outcome');

function rollNumber() {
  const input = rollTextbox.value;

  const roll = getRandomInt(11);
  rollOutput.innerHTML = "Roll = "+roll.toString();

  const difference = parseInt(input) - roll;
  if(Math.abs(difference) <= 3) {
    outcome.innerHTML = "You win!";
  }
  else {
    outcome.innerHTML = "Better luck next time!";
  }
}