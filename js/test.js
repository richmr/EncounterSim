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
  });
}

var testweap = {
  slashing: function(foo=1) {
    var result = {
      Test: "Complete"
    };
    return result;
    // The key is to end the object definition with a ;
  }
}

function testGoblinAttack() {
  var TeamObj = {
    monsters: [
      {
        Name:"Bobo",
        EntityID: 1,
        MaxHP: 15,
        CurrentHP: 15,
        CurrentState: "Alive"
      }
    ],
    players: [
      {
        Name:"Basic Fighter",
        EntityID: 2,
        MaxHP: 15,
        CurrentHP: 0,
        CurrentState: "Happy"
      },
      {
        Name:"Basic Fighter",
        EntityID: 3,
        MaxHP: 15,
        CurrentHP: 1,
        CurrentState: "Happy"
      }
    ]
  };
  console.log(TeamObj);
  var bobo = new DumbMeleeGoblin(1);
  return bobo.YourTurn(TeamObj);
}

function testGoblinGiveAndTake() {
  var giver = new DumbMeleeGoblin(1);
  var receiver = new DumbMeleeGoblin(2);
  var TeamObj = {
    monsters: [
      giver.WhoAmI()
    ],
    players: [
      receiver.WhoAmI()
    ]
  }
  console.log("Teams: " + JSON.stringify(TeamObj));
  giverAttack = giver.YourTurn(TeamObj);
  console.log("attack: " + JSON.stringify(giverAttack));
  receiverResponse = receiver.TakeEffect(giverAttack);
  console.log("response: " + JSON.stringify(receiverResponse));
  console.log("reciever stats: " + JSON.stringify(receiver.WhoAmI()));

}

console.log("EncounterSim Reloaded");
