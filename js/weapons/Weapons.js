if (typeof Weapons == "undefined") {
  var Weapons = {};
}

Weapons["Damage"] = {
  Slashing: function (AttackBonus, DamageBonus) {
    var result = {NoSave: {
      AttackRoll: Dice.rollDouble20(AttackBonus),
      Type: "Slashing",
      Magic: false,
      Magnitude: Dice.roll("1d6",DamageBonus)
    }}
  }
}
