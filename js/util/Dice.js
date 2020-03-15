/**********************
Dice things
*********************/

var Dice = {
  roll: function(dice = "1d20", bonus = 0) {
    // dice = "XdX", examples: "1d20" or "4d8"
    // bonus = integer bonus (or penalty) to add
    // Needs to return the raw + bonus and not the sum for crit purposes
    // So returns [roll, total] for each roll
    const finddice = /^(\d+)d(\d+)$/
    if ((diceparams = finddice.exec(dice)) != null) {
      numDice = Number(diceparams[1]);
      diceMax = Number(diceparams[2]);
      totalRoll = 0;
      for (roll = 1; roll <= numDice; roll++) {
        thisRoll = Math.floor(Math.random() * diceMax) + 1;
        totalRoll += thisRoll;
      }
      return [totalRoll, totalRoll+bonus];
    } else {
      throw "Dice.roll(): dice input not in the form of '1d20'";
    }
  },

  rollDouble20: function(bonus = 0) {
    // Many situations require rolling skill/attack/save with adv or dis
    // This returns an array with double roll with appropriate bonus
    // If this was intended for a normal roll, just take the first one
    result = [];
    result.push(Dice.roll("1d20", bonus));
    result.push(Dice.roll("1d20", bonus));
    return result;
  },

  rollWithAdvantage: function(dice = "1d20", bonus = 0) {
    // Rolls the dice twice and returns the max
    roll1 = Dice.roll(dice, bonus);
    //console.log("Roll1: " + roll1);
    roll2 = Dice.roll(dice, bonus);
    //console.log("Roll2: " + roll2);
    if (this.totalRoll(roll1) >= this.totalRoll(roll2)) {
      return roll1;
    } else {
      return roll2;
    }
  },

  rollWithDisadvantage: function(dice = "1d20", bonus = 0) {
    // Rolls the dice twice and returns the min
    roll1 = Dice.roll(dice, bonus);
    roll2 = Dice.roll(dice, bonus);
    if (this.totalRoll(roll1) >= this.totalRoll(roll2)) {
      return roll2;
    } else {
      return roll1;
    }
  },

  totalRoll: function(rollArray) {
    // Takes a dice roll array and returns the sum
    return rollArray[0]+rollArray[1];
  },

  critCheck: function(rollArray, critLevel=20) {
    // return true if the roll was a crit
    return (rollArray[0] >= critLevel);
  }
}
