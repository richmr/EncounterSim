/**********************
Dice things
*********************/

var Dice = {
  roll: function(dice = "1d20", bonus = 0) {
    // dice = "XdX", examples: "1d20" or "4d8"
    // bonus = integer bonus (or penalty) to add
    const finddice = /^(\d+)d(\d+)$/
    if ((diceparams = finddice.exec(dice)) != null) {
      numDice = Number(diceparams[1]);
      diceMax = Number(diceparams[2]);
      totalRoll = 0;
      for (roll = 1; roll <= numDice; roll++) {
        thisRoll = Math.floor(Math.random() * diceMax) + 1;
        thisRoll += bonus;
        totalRoll += thisRoll;
      }
      return totalRoll;
    } else {
      throw "Dice.roll(): dice input not in the form of '1d20'";
    }
  }
}
