if (typeof Weapons == "undefined") {
  var Weapons = {};
}

Weapons["Damage"] = {
  BasicDamage: function (type, damageDice, AttackBonus, DamageBonus, rollType, critLevel, magic) {
    // This gets harder and harder
    // rollType = ["normal", "advantage", "disadvantage"];
    var result = {
      Save: false,
      Magic: magic,
      Type: type,
      RollType: rollType
    }
    if (rollType=Dice.rollType.Advantage) {
      thisRoll = Dice.rollWithAdvantage("1d20", AttackBonus);
      result["AttackRoll"] = thisRoll[0];
      result["RawRolls"] = thisRoll[1];
    } else if (rollType=Dice.rollType.Disadvantage) {
      thisRoll = Dice.rollWithDisadvantage("1d20", AttackBonus)
      result["AttackRoll"] = thisRoll[0];
      result["RawRolls"] = thisRoll[1];
    } else {
      result["AttackRoll"] = Dice.roll("1d20", AttackBonus);
      result["RawRolls"] = [thisRoll];
    }
    damage = 0;
    if (Dice.critCheck(result.AttackRoll, critLevel)) {
      // Bonuses are not added to the doubled crit
      damage = Dice.roll(damageDice)[1];
      damage += Dice.roll(damageDice)[1];
      damage += DamageBonus;
      result["CriticalHit"] = true;
    } else {
      result["CriticalHit"] = false;
      damage = Dice.roll(damageDice, DamageBonus)[1];
    }
    result["Magnitude"] = damage;

    return result;
  },

  Slashing: function (damageDice, AttackBonus, DamageBonus, rollType="normal", critLevel=20, magic=false) {
    return this.BasicDamage("slashing", damageDice, AttackBonus, DamageBonus, rollType, critLevel, magic);
  }
}
