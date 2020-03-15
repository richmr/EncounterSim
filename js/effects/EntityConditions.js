// Cheesy enumeration

var EntityConditions = {
  Normal: 0,
  Dead: 1,
  Blinded: 2,
  Charmed: 3,
  Deafened: 4,
  Fatigued: 5,
  Frightened: 6,
  Grappled: 7,
  Incapacitated: 8,
  Invisible: 9,
  Paralyzed: 10,
  Petrified: 11,
  Poisoned: 12,
  Prone:13,
  Restrained:14,
  Stunned: 15,
  Unconscious: 16,
  Exhaustion: 17,

  rollTypeFromConditionForEntity: function (condition, checkType) {
    // Returns appropriate rollType (adv/dis) for entity based on condition
    // and roll type
    switch (condition) {
      case EntityConditions.Normal:
        return Dice.rollType.Normal;
        break;
      default:
        return Dice.rollType.Normal;
    }
  }
};
