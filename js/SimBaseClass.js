/*
Base class for Entities and Capabilities
*/

class SimBase {
  entityID = -1;
  name = "Not Set";

  constructor(name) {
    this.name = name;
  }

  WhoIsThis() {
    const iam = {EntityID: this.entityID, Name: this.name}
    return iam;
  }

  RoundStart() {
    console.log("SimBase.RoundStart(): " + this.name + " did not override RoundStart");
  }

  YourTurn(DataObj) {
    console.log("SimBase.YourTurn(): " + this.name + " did not override YourTurn");
  }

  ReactionCheck(DataObj) {
    console.log("SimBase.ReactionCheck(): " + this.name + " did not override ReactionCheck");
  }

  TakeEffect(DataObj) {
    console.log("SimBase.TakeEffect(): " + this.name + " did not override TakeEffect");
  }

  Reset() {
    console.log("SimBase.Reset(): " + this.name + " did not override Reset");
  }
}

class EntityBase {
  var Details = {
    name: "Not Set",
    type: "Not Set",
    // I'm on
    Team: "Not Set",
    // I attack the
    Other: "Not Set",
    LastAttacker: -1,
    Characteristics: {
      HitPoints: 0,
      AC: 10,
      level: 1,
      Proficiency: 0
    },
    Attributes: {
      STR: 10,
      DEX: 10,
      CON: 10,
      INT: 10,
      WIS: 10,
      CHA: 10
    },
    Saves: {
      STR: 0,
      DEX: 0,
      CON: 0,
      INT: 0,
      WIS: 0,
      CHA: 0,
      // Put saves the entity is proficient in here
      // Must match "STR", "DEX", etc for auto calcs to work
      Proficient: []
    },
    Capabilities: []
  }

  constructor(entityID, name) {
    super(name);
    this.entityID = entityID;
  }

  addCapability(capabilityName) {

  }
}
