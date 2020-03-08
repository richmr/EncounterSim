/**********************
Base class definition for simulation entities
*********************/

class SimEntity {
  entityID = -1;
  name = "Not Set";
  type = "Not Set";
  // I'm on:
  Team = "Not Set";
  // I attack the
  Other = "Not Set";
  LastAttacker = -1;
  Characteristics = {
    HitPoints: 0,
    AC: 10,
    level: 1,
    Proficiency: 0
  };
  Attributes = {
    STR: 10,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10,
  };
  Saves = {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
    // Put saves the entity is proficient in here
    // Must match "STR", "DEX", etc for auto calcs to work
    Proficient: []
  };
  // Skills not part of entities because they are generally secondary to combat
  // Don't @ me

  constructor(entityID, name, type) {
    this.entityID = entityID;
    this.name = name;
    this.type = type;
  }

  // Entities can override
  WhoAmI() {
    var response = {
      "EntityID":this.entityID,
      "Name":this.name,
      "Type":this.type
    };
    return response
  }

  CalcSaves() {
    // Calculate save values based on attributes and proficiency
    // Relies on SkillAndSave
    for (var save in this.Attributes) {
      var newsave = SkillAndSave.bonus(this.Attributes[save]);
      if (this.Saves["Proficient"].includes(save)) {
        newsave += this.Characteristics["Proficiency"];
      }
      this.Saves[save] = newsave;
    }
  }

  React(EffectObj) {
    // Entities might need to override
    const reaction = false;
    return reaction;
  }


  TakeEffect(EffectObj) {
    // Many responses are the same.  Entities can override but default responses may be adequate
    this.LastAttacker = EffectObj["EntityID"];

  }
  // Entities MUST override
  Act() {
    throw "SimEntity.Act(): This method must be overridden by subclass";
  }


}
