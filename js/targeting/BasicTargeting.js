var BasicTargeting = {
  FirstLivingEnemy: function(TeamObj, Details) {
    // Finds first living enemy in the list
    const target = TeamObj[Details.Other].find(enemy => enemy["CurrentHP"] > 0);
    if (target != null) {
      return target.EntityID;
    } else {
      // Everyone is dead?
      return false;
    }
  }
};
