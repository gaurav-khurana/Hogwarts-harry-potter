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
async function submitGryffindor(event) {
  const dataGryffindor = await getGryffindor();
  const randomIndex = getRandomIndex(dataGryffindor);
  const personGryffindor = dataGryffindor[randomIndex];

  const name = personGryffindor.name;
  const image = personGryffindor.image;
  const wandWood = personGryffindor.wand.wood;
  const wandCore = personGryffindor.wand.core;

  const friendGryffindor = {
    image: image,
    name: name,
    wandWood: wandWood,
    wandCore: wandCore,
  };

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

  const name = masterSpells.name;
  const description = masterSpells.description;

  const spells = {
    name: name,
    description: description,
  };

  console.log(spells);
  // Call rendering function
}

// Submit Handler for Potions
async function submitPotions(event) {
  const dataPotions = await getPotions();
  const randomIndex = getRandomIndex(dataPotions);
  const havePotions = dataPotions[randomIndex];

  const name = havePotions.attributes.name;
  const effects = havePotions.attributes.effect;

  const potion = {
    name: name,
    effects: effects,
  };

  console.log(potion);
  // Call rendering function
}

// Event Listener onClick
const buttonGryffindor = document.getElementById("button-gryffindor");
const buttonSlytherin = document.getElementById("button-slytherin");
const buttonRavenclaw = document.getElementById("button-ravenclaw");
const buttonHufflepuff = document.getElementById("button-hufflepuff");
const buttonSpell = document.getElementById("button-spell");
const buttonPotion = document.getElementById("button-potion");
buttonGryffindor.addEventListener("click", submitGryffindor);
buttonSlytherin.addEventListener("click", submitSlytherin);
buttonRavenclaw.addEventListener("click", submitRavenclaw);
buttonHufflepuff.addEventListener("click", submitHufflepuff);
buttonSpell.addEventListener("click", submitSpells);
buttonPotion.addEventListener("click", submitPotions);
