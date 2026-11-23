// Palia villager gift data.
// Source: https://ggrecon.com/guides/palia-best-villager-gifts
// Source page last modified: 2026-08-15 (dateModified in page metadata)
// Re-fetched and parsed: 2026-11-23
// This source lists only "Loved" and "Liked" gifts per villager; it does not
// list disliked gifts, so this tool cannot answer "what does X dislike".
// A few source list entries appear to merge two gift names into one line
// (e.g. "Garden Leafhopper Common Field Cricket" for Auni) exactly as
// published on the source page; they are kept verbatim rather than guessed apart.

var PALIA_SOURCE = {
  url: "https://ggrecon.com/guides/palia-best-villager-gifts",
  lastModified: "2026-08-15",
  fetchedOn: "2026-11-23"
};

var PALIA_VILLAGERS = [
  {
    "name": "Ashura",
    "loved": ["Pinecone", "Hearty Veggie Soup", "Fish Stew", "Blueberry Pie"],
    "liked": ["Grilled Fish", "Striped Sturgeon", "Channel Catfish", "Chapaa Meat", "Sernuk Meat", "Sundrop Lily"]
  },
  {
    "name": "Auni",
    "loved": ["Firebreathing Dragonfly", "Apple Pie"],
    "liked": ["Garden Leafhopper Common Field Cricket", "Brushtail Dragonfly", "Bahari Bee", "Common Blue Butterfly", "Silk Thread"]
  },
  {
    "name": "Badruu",
    "loved": ["Blueberry Seed", "Apple Tree Seed", "Azure Stonehopper"],
    "liked": ["Potato", "Quality-Up Fertilizer", "Pearl"]
  },
  {
    "name": "Caleri",
    "loved": ["Bahari Glowbug"],
    "liked": ["Grilled Mushroom Glass Bulb", "Sernuk Hide", "Spotted Chapaa Tail"]
  },
  {
    "name": "Chayne",
    "loved": ["Dragon's Beard Peat"],
    "liked": ["Onion Seed", "Glass Pane", "Unopened Oyster", "Silk Thread", "Onion"]
  },
  {
    "name": "Delaila",
    "loved": ["Vampire Crab"],
    "liked": ["Clay", "Quality-Up Fertilizer", "Chapaa Meat", "Sernuk Meat"]
  },
  {
    "name": "Einar",
    "loved": ["Mottled Gobi"],
    "liked": ["Gillyfin", "Prism Trout"]
  },
  {
    "name": "Elouisa",
    "loved": ["Pearl", "Fairy Mantis"],
    "liked": ["Cantankerous Koi Duskray", "Sernuk Antlers"]
  },
  {
    "name": "Eshe",
    "loved": ["TBA"],
    "liked": ["Leather", "Bluefin Tuna", "Silk Thread", "Pearl"]
  },
  {
    "name": "Hassian",
    "loved": ["Proudhorned Sernuk Antlers"],
    "liked": ["Flint", "Brightshroom", "Sernuk Antlers", "Sernuk Hide", "Spotted Chapaa Tail"]
  },
  {
    "name": "Hekla",
    "loved": ["Chub"],
    "liked": ["Grilled Meat", "Acorn", "Copper Ore", "Silk Thread"]
  },
  {
    "name": "Hodari",
    "loved": ["Stonefish"],
    "liked": ["Sernuk Antlers", "Flow-Infused Wood", "Chapaa Fur", "Copper Bar", "Grilled Meat", "Leather", "Silk Thread"]
  },
  {
    "name": "Jel",
    "loved": ["Pearl", "Willow Lampray"],
    "liked": ["Bat Ray", "Barracuda", "Fabric", "Kilima Catfish", "Pearl", "Sundrop Lily", "Crystal Lake Lotus", "Sernuk Antlers"]
  },
  {
    "name": "Jina",
    "loved": ["Mutated Angler", "Dari Cloves"],
    "liked": ["Flint", "Heat Root", "Brightshroom", "Mountain Morel", "Pearl", "Wagon Wheel"]
  },
  {
    "name": "Kenli",
    "loved": ["Loaded Potato Soup", "Bouillabaisse"],
    "liked": ["Wagon Wheel Ramen", "Grilled Meat", "Tomato"]
  },
  {
    "name": "Kenyatta",
    "loved": ["Proudhorn Sernuk Antlers", "Meaty Stir Fry"],
    "liked": ["Creamy Carrot Soup Brushtail Dragonfly", "Chapaa Fur", "Sernuk Hide", "Sernuk Antlers", "Pearl", "Silk Thread"]
  },
  {
    "name": "Najuma",
    "loved": ["Apple"],
    "liked": ["Sweet Leaf", "Copper Bar", "Bat Ray", "Coral", "Pearl", "Sardine", "Copper Ore"]
  },
  {
    "name": "Nai'o",
    "loved": ["Iron Bar", "Steak Dinner"],
    "liked": ["Rice Seed Stone Brick", "Chapaa Meat", "Sernuk Antlers", "Sernuk Hide"]
  },
  {
    "name": "Reth",
    "loved": ["Apple Jam"],
    "liked": ["Creamy Carrot Soup Potato", "Grilled Meat", "Onion", "Sweet Leaf", "Ramen"]
  },
  {
    "name": "Sifuu",
    "loved": ["Silver Ore"],
    "liked": ["Copper Ore", "Oily Anchovy", "Grilled Mushroom", "Sardine", "Sernuk Meat"]
  },
  {
    "name": "Tamala",
    "loved": ["Radiant Sunfish", "Green Pearl"],
    "liked": ["Emerald Carpet Moss", "Chapaa Fur", "Copper Ore", "Iron Ore", "Sernuk Hide"]
  },
  {
    "name": "Tish",
    "loved": ["Silk Thread", "Green Pearl"],
    "liked": ["Clay", "Dawnray", "Treasure Chests", "Green Pearl", "Elder Sernuk Antlers", "Pearl", "Sernuk Antlers", "Sundrop Lily"]
  },
  {
    "name": "Zeki",
    "loved": ["Silk Thread"],
    "liked": ["Silvery Minnow", "Fish Stew", "Silk Thread", "Silver Ore", "Pearl", "Sashimi"]
  }
];

function findGiftMatches(query) {
  var q = String(query || "").trim().toLowerCase();
  if (!q) return [];
  var results = [];
  for (var i = 0; i < PALIA_VILLAGERS.length; i++) {
    var v = PALIA_VILLAGERS[i];
    var lovedHits = v.loved.filter(function (g) { return g.toLowerCase().indexOf(q) !== -1; });
    var likedHits = v.liked.filter(function (g) { return g.toLowerCase().indexOf(q) !== -1; });
    if (lovedHits.length || likedHits.length) {
      results.push({ name: v.name, lovedHits: lovedHits, likedHits: likedHits });
    }
  }
  return results;
}

function findVillager(name) {
  for (var i = 0; i < PALIA_VILLAGERS.length; i++) {
    if (PALIA_VILLAGERS[i].name === name) return PALIA_VILLAGERS[i];
  }
  return null;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PALIA_VILLAGERS: PALIA_VILLAGERS, PALIA_SOURCE: PALIA_SOURCE, findGiftMatches: findGiftMatches, findVillager: findVillager };
}
