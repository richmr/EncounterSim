
class DumbMeleeGoblin extends monster {
  constructor(entityID, name="goblin", type="melee", CR=.25) {
    super(entityID, name, type, CR);
    var startingHP = Dice.roll("2d6")[1];
    this.Details.Characteristics = {
        HitPoints: startingHP,
        MaxHitPoints: startingHP,
        AC: 15,
        level: 1,
        Proficiency: 0
    };
    this.Details.Attributes = {
      STR: 8,
      DEX: 14,
      CON: 10,
      INT: 10,
      WIS: 8,
      CHA: 8,
    };
    this.Details.Saves["Proficient"] = [];
    this.CalcSaves();
  }

  RoundStart(DataObj) {
    //Not needed
    return null;
  }

  YourTurn(TeamObj, TryAgainObj = null) {
    // This goblin just picks the first live foe in the list and attacks
    // Am I dead
    if (this.Details.Characteristics["HitPoints"] <= 0) {
      return UnableToActReasons.ImDead;
    }

    var targetID = BasicTargeting.FirstLivingEnemy(TeamObj, this.Details)
    if (targetID) {
      const action = {
        Target:targetID,
        RemainingActions:0,
        Attacks: [Weapons.Martial.Melee.Scimitar(4,2)]
      };
      this.Details.LastAction = action;
      return action;
    } else {
      return UnableToActReasons.AllEnemiesDead;
    }
  }

  TurnEnd(DataObj) {
    // Not needed
    return null;
  }

  ReactionCheck(DataObj) {
    // No reactions
    return null;
  }

  // TakeEffect not overridden for EntityBase

  ActionResult(DataObj) {
    return null;
  }

  Reset() {

    return null;
  }

}
