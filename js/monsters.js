class monster extends SimEntity {
  constructor(entityID, name, type, CR) {
    super(entityID, name, type);
    this.CR = CR;
    this.Team = "monster";
    this.Other = "players";
  }
}

class DumbMeleeGoblin extends monster {
  constructor(entityID, name="goblin", type="melee", CR=.25) {
    super(entityID, name, type, CR);
    this.Characteristics = {
        HitPoints: Dice.roll("2d6"),
        AC: 15,
        level: 1,
        Proficiency: 0
    };
    this.Attributes = {
      STR: 8,
      DEX: 14,
      CON: 10,
      INT: 10,
      WIS: 8,
      CHA: 8,
    };
    this.Saves["Proficient"] = [];
  }

  Act(TeamObj) {
    // This goblin just picks the first live foe in the list and attacks
    // Am I dead
    if (this.Characteristics["HitPoints"] <= 0) {
      return {UnableToAct: {Reason: "Dead"}};
    }

    const target = TeamObj[this.Other].find(enemy => enemy["CurrentHP"] > 0);
    const targetID = target.entityID;
    // Attack with my scimitar!!
    const action = {
      Target:targetID,
      RemainingActions:0,
      NoSave: {
        AttackRoll: Dice.rollDouble20(4),
        Type:"Slash",
        Magic: false,
        Magnitude: Dice.roll("1d6",2)
      }
    }
    return action;
  }
}
