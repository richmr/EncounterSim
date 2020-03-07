// Test cases
function testRoll() {
  testDice = ["1d2", "1d4", "1d6", "1d8", "1d10", "1d12", "1d100"];
  trials = [];
  testDice.forEach(function(die) {
    for (i = 0; i < 10000; i++) {
      trials.push(Dice.roll(die));
    }
    console.log(die + " Max:" + Math.max(...trials));
    console.log(die + " Min:" + Math.min(...trials));
  })
}
