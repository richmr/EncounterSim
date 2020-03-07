/**********************
Base class definition for simulation entities
*********************/

class SimEntity {
  entityID = -1;
  name = "Not Set";
  type = "Not Set";
  Characteristics = {
    HitPoints: 0,
    AC: 10,
    level: 1,
    Proficiency: 0
  };
  Attributes = {
    STR: 10,
    DEX: 10,
    WIS: 10,
    INT: 10,
    CHA: 10,
    CON: 10,
  };
  Saves = {
    STR: 0,
    DEX: 0,
    WIS: 0,
    INT: 0,
    CHA: 0,
    CON: 0,
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
    response = {
      "EntityID":this.entityID,
      "Name":this.Name,
      "Type":this.type
    };
    return response
  }

  // Entities MUST override
  Act() {
    throw "SimEntity.Act(): This method must be overridden by subclass";
  }

  TakeEffect() {
    throw "SimEntity.TakeEffect(): This method must be overridden by subclass";
  }
}
