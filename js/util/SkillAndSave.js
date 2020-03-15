// Collection of utilities to calculate bonuses on skills and saves

var SkillAndSave = {
  bonus: function(attrScore) {
    // Simply returns the appropriate bonus for a given attribute score
    bonuses = {1:-5,2:-4,3:-4,4:-3,5:-3,6:-2,7:-2,8:-1,9:-1,10:0,
      11:0,12:1,13:1,14:2,15:2,16:3,17:3,18:4,19:4,20:5,
      21:5,22:6,23:6,24:7,25:7,26:8,27:8,28:9,29:9,30:10};
    if ((result = bonuses[attrScore]) == undefined) {
      throw "SkillAndSave.bonus: attrScore (" + attrScore + ") is not between 1 and 30";
    }
    return result;
  },

  checkType: {
    Attack: 1,
    Skill: 2,
    Save: 3
  }
}
