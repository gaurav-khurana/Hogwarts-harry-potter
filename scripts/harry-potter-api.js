import { GryffindorPageSuccess } from "./gryffindor.js";

// Harry Potter API Setup
const spellUrl = "https://hp-api.onrender.com/api/spells";
const gryffindorUrl =
  "https://hp-api.onrender.com/api/characters/house/gryffindor";
const ravenclawUrl =
  "https://hp-api.onrender.com/api/characters/house/ravenclaw";
const hufflepuffUrl =
  "https://hp-api.onrender.com/api/characters/house/hufflepuff";
const slytherinUrl =
  "https://hp-api.onrender.com/api/characters/house/slytherin";
const potionsUrl = "https://api.potterdb.com/v1/potions";

// GET functions
async function getSpells() {
  const spellResponse = await axios.get(spellUrl);
  return spellResponse.data;
}

async function getPotions() {
  const potionResponse = await axios.get(potionsUrl);
  return potionResponse.data.data;
}

async function getGryffindor() {
  const gryffindorResponse = await axios.get(gryffindorUrl);
  return gryffindorResponse.data;
}

async function getRavenclaw() {
  const ravenclawResponse = await axios.get(ravenclawUrl);
  return ravenclawResponse.data;
}

async function getHufflepuff() {
  const hufflepuffResponse = await axios.get(hufflepuffUrl);
  return hufflepuffResponse.data;
}

async function getSlytherin() {
  const slytherinResponse = await axios.get(slytherinUrl);
  return slytherinResponse.data;
}

// Get random index
function getRandomIndex(array) {
  const randomDecimal = Math.random();
  return Math.floor(randomDecimal * array.length);
}

// Submit handlers for different houses
export const friendGryffindor = {
  // image: image,
  name: "",
  wandWood: "",
  wandCore: "",
  // wand: ""
};

async function submitGryffindor(event) {
  const dataGryffindor = await getGryffindor();
  console.log("dataGryffindor");
  const randomIndex = getRandomIndex(dataGryffindor);
  const personGryffindor = dataGryffindor[randomIndex];

  friendGryffindor.name = personGryffindor.name;
  // friendGryffindor.image = personGryffindor.image;
  friendGryffindor.wandWood = personGryffindor.wand.wood;
  friendGryffindor.wandCore = personGryffindor.wand.core;
  // friendGryffindor.wand = 'Wand wood is '+ friendGryffindor.wandWood + " & " + 'wand core is ' + friendGryffindor.wandCore;
  const gryffindor = document.getElementById("main");
  gryffindor.innerHTML = GryffindorPageSuccess();
  console.log(friendGryffindor);
  // Call rendering function.
}

async function submitSlytherin(event) {
  const dataSlytherin = await getSlytherin();
  const randomIndex = getRandomIndex(dataSlytherin);
  const personSlytherin = dataSlytherin[randomIndex];

  const name = personSlytherin.name;
  const image = personSlytherin.image;
  const wandWood = personSlytherin.wand.wood;
  const wandCore = personSlytherin.wand.core;

  const friendSlytherin = {
    image: image,
    name: name,
    wandWood: wandWood,
    wandCore: wandCore,
  };

  console.log(friendSlytherin);
  // Call rendering function.
}

async function submitRavenclaw(event) {
  const dataRavenclaw = await getRavenclaw();
  const randomIndex = getRandomIndex(dataRavenclaw);
  const personRavenclaw = dataRavenclaw[randomIndex];

  const name = personRavenclaw.name;
  const image = personRavenclaw.image;
  const wandWood = personRavenclaw.wand.wood;
  const wandCore = personRavenclaw.wand.core;

  const friendRavenclaw = {
    image: image,
    name: name,
    wandWood: wandWood,
    wandCore: wandCore,
  };

  console.log(friendRavenclaw);
  // Call rendering function.
}

async function submitHufflepuff(event) {
  const dataHufflepuff = await getHufflepuff();
  const randomIndex = getRandomIndex(dataHufflepuff);
  const personHufflepuff = dataHufflepuff[randomIndex];

  const name = personHufflepuff.name;
  const image = personHufflepuff.image;
  const wandWood = personHufflepuff.wand.wood;
  const wandCore = personHufflepuff.wand.core;

  const friendHufflepuff = {
    image: image,
    name: name,
    wandWood: wandWood,
    wandCore: wandCore,
  };

  console.log(friendHufflepuff);
  // Call rendering function.
}

// Submit Handlers for Spell
async function submitSpells(event) {
  const dataSpells = await getSpells();
  const randomIndex = getRandomIndex(dataSpells);
  const masterSpells = dataSpells[randomIndex];

  spells.name = masterSpells.name;
  spells.description = masterSpells.description;

  console.log(spells);
  // Call rendering function
}
export const spells = {
  name: "",
  description: "",
};

export const potion = {
  name: "",
  effects: "",
};
// Submit Handler for Potions
async function submitPotions(event) {
  const dataPotions = await getPotions();
  const randomIndex = getRandomIndex(dataPotions);
  const havePotions = dataPotions[randomIndex];

  potion.name = havePotions.attributes.name;
  potion.effects = havePotions.attributes.effect;

  console.log(potion);
  // Call rendering function
}

setTimeout(() => {
  const buttonGryffindor = document.getElementById("button-gryffindor");
  console.log(buttonGryffindor);
  const buttonSlytherin = document.getElementById("button-slytherin");
  const buttonRavenclaw = document.getElementById("button-ravenclaw");
  const buttonHufflepuff = document.getElementById("button-hufflepuff");
  const buttonSpell = document.getElementById("button-spells");
  const buttonPotion = document.getElementById("button-potion");

  buttonGryffindor?.addEventListener("click", submitGryffindor);
  buttonSlytherin?.addEventListener("click", submitSlytherin);
  buttonRavenclaw?.addEventListener("click", submitRavenclaw);
  buttonHufflepuff?.addEventListener("click", submitHufflepuff);
  buttonSpell?.addEventListener("click", submitSpells);
  buttonPotion?.addEventListener("click", submitPotions);
}, 1000);
// Event Listener onClick
