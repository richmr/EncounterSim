if (typeof Weapons == "undefined") {
  var Weapons = {};
}

Weapons["Martial"] = {}

Weapons["Martial"]["Melee"] = {
  Scimitar: function(attackBonus = 0, damageBonus = 0) {
    return Weapons.Damage.Slashing(attackBonus, damageBonus);
  },

  Test: function() {
    return "GT";
  }
}
