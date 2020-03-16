// The files to run the actual Monte Carlo Sims

class OneRound {
  // This executes a single round of combat
  Entities = {}; // Numbered obj to Entities
  TeamObj = {}; // Named obj to Teams
  InitiativeObj = []; // List of entities in order?

  constructor(EntitiesObj, TeamObj, InitiativeObj) {
    this.Entities = EntitiesObj;
    this.TeamObj = TeamObj;
    this.InitiativeObj = InitiativeObj;
  }

  go() {
    // Tell everyone it's a round start
    InitiativeObj.forEach(function (entityID) {
      EntitiesObj[entityID].RoundStart(null); // I'm not sure what I need to pass
    });
    // Go through the initative order again
    // - YourTurn
  }
}
