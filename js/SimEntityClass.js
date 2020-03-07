/**********************
Base class definition for simulation entities
*********************/

class SimEntity {
  entityID = -1;
  name = "Not Set";
  type = "Not Set";
  hitPoints = 0;

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
