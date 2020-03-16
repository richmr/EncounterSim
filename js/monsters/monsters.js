class monster extends EntityBase {
  constructor(entityID, name, type, CR) {
    super(entityID, name, type);
    this.Details.CR = CR;
    this.Details.Team = "monster";
    this.Details.Other = "players";
  }
}
