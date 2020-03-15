// Loads EncounterSim

// Add relative path names here:
var RegisteredScriptFiles = [
  // Root
  "js/SimBaseClass.js",
  "js/test.js",

  // effects
  "js/effects/BasicTakeEffects.js",
  "js/effects/EntityConditions.js",
  "js/effects/UnableToActReasons.js",

  // monsters
  "js/monsters/monsters.js",

  // targeting
  "js/targeting/BasicTargeting.js",

  // util
  "js/util/Dice.js",
  "js/util/SkillAndSave.js",

  // Weapons
  "js/weapons/Weapons.js",
  "js/weapons/MartialMelee.js"

];

function EncounterSimScripts() {
  // Adds script elements
  // Expects jquery and existence of "jsblock" div
  RegisteredScriptFiles.forEach(function (aScript) {
    $("#jsblock").append('<script type="text/javascript" src="'+aScript+'"></script>');
  });
}

$.when( $.ready ).then(function() {
  // Document is ready.
  EncounterSimScripts();
});
