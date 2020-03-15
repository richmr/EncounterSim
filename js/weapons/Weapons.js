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
      Type: type
    }
    if (rollType="advantage") {
      result["AttackRoll"] = Dice.rollWithAdvantage("1d20", AttackBonus);
    } else if (rollType="disadvantage") {
      result["AttackRoll"] = Dice.rollWithDisadvantage("1d20", AttackBonus);
    } else {
      result["AttackRoll"] = Dice.roll("1d20", AttackBonus);
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
