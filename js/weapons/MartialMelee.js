if (typeof Weapons == "undefined") {
  var Weapons = {};
}

Weapons["Martial"]["Melee"] = {
  Scimitar: function(attackBonus, damageBonus = 0) {
    return Weapons.Damage.Slashing(attackBonus, damageBonus);
  }
}
