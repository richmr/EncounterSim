class monster extends SimEntity {
  constructor(entityID, name, type, CR) {
    super(entityID, name, type);
    this.CR = CR;
  }
}

class goblin extends monster {
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
}
