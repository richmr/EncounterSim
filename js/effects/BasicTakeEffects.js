var BasicTakeEffects = {};

BasicTakeEffects["ProcessDamage"] = function(DamageObjects, EntityDetails) {
  // Expects an array of DamageObjects
  var results = [];
  DamageObjects.Attacks.forEach(function(thisDamageObject) {
    if (thisDamageObject.Save) {
      results.push(BasicTakeEffects.SaveDamage(thisDamageObject, EntityDetails));
    } else {
      results.push(BasicTakeEffects.NoSaveDamage(thisDamageObject, EntityDetails));
    }
  });
  return results;
}

BasicTakeEffects["NoSaveDamage"] = function(DamageObject, EntityDetails) {
  var result = {
    EntityID: EntityDetails.entityID,
    WasDamaged: 0
  };

  if ((DamageObject.CriticalHit) || (DamageObject.AttackRoll[1] >= EntityDetails.Characteristics.AC)) {
    // We take this damage.. maybe
    if (EntityDetails.DamageResistance.includes(DamageObject.Type)) {
      // Half damage
      // Don't directly edit the damage object!  If it's being passed to other entities it will be affect them too
      result.WasDamaged = Math.floor(DamageObject.Magnitude/2.0);
    } else if (EntityDetails.DamageImmunity.includes(DamageObject.Type)) {
      result.WasDamaged = 0;
    } else {
      result.WasDamaged = DamageObject.Magnitude;
    }
    EntityDetails.Characteristics.HitPoints -= result.WasDamaged;
    if (EntityDetails.Characteristics.HitPoints <= 0) {
      // Sim only lets them fall, full death not checked
      EntityDetails.Characteristics.HitPoints = 0;
      EntityDetails.CurrentCondition = EntityConditions.Dead;
    }
    // TODO: OnHit continuations will need to go here (Banes, etc..)
  }
  return result;
}
