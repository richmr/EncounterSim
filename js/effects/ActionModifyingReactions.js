// Enums to describe and handle various reactions that impact actions
// AMR = ActionModifyingReaction
var AMR = {
  // Simple Enums
  RollWithDisadvantage: 1,
  RollWithAdvantage: 2,
  SelectNewTarget: 3,
  SelectNewEnemy: 4,
  SelectNewAlly: 5,
  OnlyAttackThisTarget: 6,  // Must provide {TargetID: ID} in Data of TryAgainObj
  AddModifierToAttack: 7, // Must provide {Mod: INT}
  AddModiferToDamage: 8, // Must provide {Mod: INT}
  AddDieToAttack: 9, // Must provide {Die: "1d6"}
  AddDieToDamage: 10, // Must provide {Die: "1d6"}

  BasicWeaponAttackMod: function(TeamObj, TryAgainObj, Details) {
    // Handles these AMRs on basic weapon attack (and Spell Combat)
    // Returns the modified action (original is stored in Details.LastAction)

    var mod = TryAgainObj.Modification;
    // How do we handle multi attacks?  IDK
    var lastAction = Details.LastAction;
    var attack = lastAction.Attacks[0];

    switch (mod) {
      case AMR.RollWithDisadvantage:
        // Was this roll normal last time?
        if (attack.hasOwnProperty("RollType")) {
          if (attack.RollType == Dice.rollType.Disadvantage) {
            // Roll stands as is
            return lastAction;
          } else if (attack.RollType == Dice.rollType.Advantage) {
            // Only the first roll should stand
            lastAction.Attacks[0].AttackRoll = attack.RawRolls[0];
            return lastAction;
          } else if (attack.RollType == Dice.rollType.Normal) {
            // Need disadvantage on the recorded rolls
            lastAction.Attacks[0].AttackRoll = Dice.pickLowerRoll(attack.RawRolls);
            return lastAction;
          }
        }

        // Shouldn't get here but..
        return lastAction;
        break;
      case AMR.RollWithAdvantage:
        // Was this roll normal last time?
        if (attack.hasOwnProperty("RollType")) {
          if (attack.RollType == Dice.rollType.Advantage) {
            // Roll stands as is
            return lastAction;
          } else if (attack.RollType == Dice.rollType.Disadvantage) {
            // Only the first roll should stand
            lastAction.Attacks[0].AttackRoll = attack.RawRolls[0];
            return lastAction;
          } else if (attack.RollType == Dice.rollType.Normal) {
            // Need disadvantage on the recorded rolls
            lastAction.Attacks[0].AttackRoll = Dice.pickHigherRoll(attack.RawRolls);
            return lastAction;
          }
        }

        // Shouldn't get here but..
        return lastAction;
        break;
      case AMR.SelectNewTarget:
        // defaults to same as new enemy
        currentTargetID = Details.LastAction.Target;
        // Just find first enemy not that one
        const target = TeamObj[Details.Other].find(enemy => enemy["EntityID"] != currentTargetID);
        if (target != null) {
          lastAction.Target = target.EntityID;
          return lastAction;
        } else {
          return UnableToActReasons.CantFindTarget;
        }
        break;
      case AMR.SelectNewEnemy:
        // defaults to same as new enemy
        currentTargetID = Details.LastAction.Target;
        // Just find first enemy not that one
        const target = TeamObj[Details.Other].find(enemy => enemy["EntityID"] != currentTargetID);
        if (target != null) {
          lastAction.Target = target.EntityID;
          return lastAction;
        } else {
          return UnableToActReasons.CantFindTarget;
        }
        break;
      case AMR.SelectNewAlly:
        // This is usually a bad thing, so the current target does not matter
        var targetID = BasicTargeting.FirstLivingAlly(TeamObj, Details);
        if (targetID) {
          lastAction.Target = targetID;
          return lastAction;
        } else {
          return UnableToActReasons.CantFindTarget;
        }
        break;
      case AMR.OnlyAttackThisTarget:
        targetID = TryAgainObj.TargetID;
        lastAction.Target = targetID;
        return lastAction;
        break;
      case AMR.AddModifierToAttack:
        modifier = TryAgainObj.Mod;
        lastAction.Attacks[0].AttackRoll[1] += modifer;
        return lastAction;
        break;
      case AMR.AddModiferToDamage:
        modifier = TryAgainObj.Mod;
        lastAction.Attacks[0].Magnitude += modifer;
        return lastAction;
        break;
      case AMR.AddDieToAttack:
        moddie = TryAgainObj.Die;
        modifier = Dice.Roll(moddie)[0];
        lastAction.Attacks[0].AttackRoll[1] += modifer;
        return lastAction;
        break;
      case AMR.AddDieToDamage:
        moddie = TryAgainObj.Die;
        modifier = Dice.Roll(moddie)[0];
        lastAction.Attacks[0].Magnitude += modifer;
        return lastAction;
        break;
      default:

    }
  }
};
