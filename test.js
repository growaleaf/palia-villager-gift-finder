var data = require("./data.js");
var PALIA_VILLAGERS = data.PALIA_VILLAGERS;
var findGiftMatches = data.findGiftMatches;
var findVillager = data.findVillager;

var passed = 0;
var failed = 0;

function assert(cond, label) {
  if (cond) {
    passed++;
    console.log("PASS: " + label);
  } else {
    failed++;
    console.log("FAIL: " + label);
  }
}

// 1. Villager count matches source (header + 23 data rows).
assert(PALIA_VILLAGERS.length === 23, "villager count is 23");

// 2. Ashura loved gifts include Pinecone.
var ashura = findVillager("Ashura");
assert(ashura && ashura.loved.indexOf("Pinecone") !== -1, "Ashura loved includes Pinecone");

// 3. Ashura liked gifts include Sundrop Lily.
assert(ashura && ashura.liked.indexOf("Sundrop Lily") !== -1, "Ashura liked includes Sundrop Lily");

// 4. Zeki liked gifts include Pearl.
var zeki = findVillager("Zeki");
assert(zeki && zeki.liked.indexOf("Pearl") !== -1, "Zeki liked includes Pearl");

// 5. Searching "pearl" (lowercase, substring) finds multiple villagers, including Zeki.
var pearlMatches = findGiftMatches("pearl");
var pearlNames = pearlMatches.map(function (m) { return m.name; });
assert(pearlNames.indexOf("Zeki") !== -1 && pearlMatches.length >= 5, "search 'pearl' is case-insensitive substring and finds >=5 villagers including Zeki");

// 6. Searching an exact loved-only gift returns it under lovedHits, not likedHits.
var pineconeMatches = findGiftMatches("Pinecone");
var ashuraPineconeHit = pineconeMatches.filter(function (m) { return m.name === "Ashura"; })[0];
assert(ashuraPineconeHit && ashuraPineconeHit.lovedHits.indexOf("Pinecone") !== -1 && ashuraPineconeHit.likedHits.length === 0, "Pinecone search tags Ashura as a loved hit only");

// 7. Searching a nonsense item returns no matches.
assert(findGiftMatches("Nonexistent Item Xyz").length === 0, "search for nonexistent item returns no matches");

// 8. findVillager is case-sensitive to the stored name and returns null for unknown names.
assert(findVillager("Not A Real Villager") === null, "findVillager returns null for unknown villager");

// 9. Every villager has at least one loved gift and at least one liked gift listed.
var allHaveLists = PALIA_VILLAGERS.every(function (v) { return v.loved.length > 0 && v.liked.length > 0; });
assert(allHaveLists, "every villager has at least one loved and one liked gift listed");

// 10. Kenli's liked list (sourced from <p> tags, not <li>, in the raw HTML) parsed correctly.
var kenli = findVillager("Kenli");
assert(kenli && kenli.liked.indexOf("Wagon Wheel Ramen") !== -1 && kenli.liked.length === 3, "Kenli liked list parsed from non-<li> source markup");

console.log("\n" + passed + " passed, " + failed + " failed");
if (failed > 0) process.exit(1);
