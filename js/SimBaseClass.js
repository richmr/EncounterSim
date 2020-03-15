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
    const iam = {EntityID: this.entityID, Name: this.name};
    return iam;
  }

  RoundStart(DataObj) {
    console.log("SimBase.RoundStart(): " + this.name + " did not override RoundStart");
    return null;
  }

  YourTurn(DataObj) {
    console.log("SimBase.YourTurn(): " + this.name + " did not override YourTurn");
    return null;
  }

  TurnEnd(DataObj) {
    console.log("SimBase.TurnEnd(): " + this.name + " did not override TurnEnd");
    return null;
  }

  ReactionCheck(DataObj) {
    console.log("SimBase.ReactionCheck(): " + this.name + " did not override ReactionCheck");
    return null;
  }

  TakeEffect(DataObj) {
    console.log("SimBase.TakeEffect(): " + this.name + " did not override TakeEffect");
    return null;
  }

  ActionResult(DataObj) {
    console.log("SimBase.ActionResult(): " + this.name + " did not override ActionResult");
    return null;
  }

  Reset() {
    console.log("SimBase.Reset(): " + this.name + " did not override Reset");
    return null;
  }
}

class EntityBase extends SimBase {
  Details = {
    type: "Not Set",
    // I'm on
    Team: "Not Set",
    // I attack the
    Other: "Not Set",
    CurrentCondition: EntityConditions.Normal,
    LastAttacker: -1,
    LastTarget: -1,
    Characteristics: {
      MaxHitPoints: 0,
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
    DamageResistance: [],
    DamageImmunity: []
  }

  constructor(entityID, name, type) {
    super(name);
    this.entityID = entityID;
    this.Details.type = type;
  }

  WhoAmI() {
    var iAm = {
      Name:this.name,
      EntityID: this.entityID,
      MaxHP: this.Details.Characteristics.MaxHitPoints,
      CurrentHP: this.Details.Characteristics.HitPoints,
      CurrentCondition: this.Details.CurrentCondition
    };
    return iAm;
  }

  CalcSaves() {
    // Calculate save values based on attributes and proficiency
    // Relies on SkillAndSave
    for (var save in this.Details.Attributes) {
      var newsave = SkillAndSave.bonus(this.Details.Attributes[save]);
      if (this.Details.Saves["Proficient"].includes(save)) {
        newsave += this.Details.Characteristics["Proficiency"];
      }
      this.Details.Saves[save] = newsave;
    }
  }

  TakeEffect(DataObj) {
    var results = BasicTakeEffects.ProcessDamage(DataObj, this.Details);
    return results;
  }

}


class WeaponBase extends SimBase {
  // Not sure I need this for simple weapons..
  constructor(name) {
    super(name);
  }

  // All methods are overridden for weapons so we don't have to write code we don't
  // need
  RoundStart(DataObj) {
    return null;
  }

  YourTurn(DataObj) {
    return null;
  }

  TurnEnd(DataObj) {
    return null;
  }

  ReactionCheck(DataObj) {
    return null;
  }

  TakeEffect(DataObj) {
    return null;
  }

  Reset() {
    return null;
  }

}

class MagicBase extends SimBase {
  constructor(name) {
    super(name);
  }

  // All methods are overridden for weapons so we don't have to write code we don't
  // need
  RoundStart(DataObj) {
    return null;
  }

  YourTurn(DataObj) {
    return null;
  }

  TurnEnd(DataObj) {
    return null;
  }

  ReactionCheck(DataObj) {
    return null;
  }

  TakeEffect(DataObj) {
    return null;
  }

  Reset() {
    return null;
  }

}
