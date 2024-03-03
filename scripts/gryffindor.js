import { friendGryffindor, spells, potion } from "./harry-potter-api.js";

const Header = () => {
  return `
    <div class="hogwarts-logo-container">
    <img
      class="hogwarts-logo"
      src="../assets/images/gryffindor.jpeg"
      alt="Hogwarts logo"
    />
    <h1 class="main__title main__title-gryffindor">
      Hogwarts School of Witchcraft and Wizardary
    </h1>
  </div>
  <h3 class="main__heading main__heading-gryffindor">
    Welcome to Gryffindor
  </h3>
    `;
};

const Section = () => {
  return `
  <section class="house-cards" id="house-cards">
  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/gryffindor.jpeg"
      alt="Gryffindor logo"
    />
    <a class="house-link" href="#"
      ><h3 class="house-name house-name-gryffindor" id="button-gryffindor">Pick a Friend</h3>
    </a>
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/gryffindor.jpeg"
      alt="Gryffindor logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name house-name-gryffindor" id="button-spells">
        Pick a spell to Master
      </h3></a
    >
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/gryffindor.jpeg"
      alt="Gryffindor logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name house-name-gryffindor" id="button-potion">
        Pick Potion to learn from Snape
      </h3>
    </a>
  </article>
</section>
`;
};

const NewSection = (
  friendName,
  friendWand,
  spellName,
  spellEffect,
  potionsName,
  potionsEffect
) => {
  return `
    <section class="house-cards">
    <article class="house-cards-individual">
      <img
        class="house-logo"
        src="../assets/images/default image 2.jpeg"
        alt="Slytherin logo"
      />
      <a class="house-link" href="#">
        <h3 class="house-name house-name-slytherin">${friendName}</h3>
        <h4 class="friend-name house-name-slytherin">${friendWand}</h3>
      </a>
    </article>
  
    <article class="house-cards-individual">
      <img
        class="house-logo"
        src="../assets/images/spells 2.jpeg"
        alt="Slytherin logo"
      />
      <a class="house-link" href="#">
        <h3 class="house-name house-name-slytherin">${spellName}</h3>
        <h3 class="friend-name house-name-slytherin">${spellEffect}</h3>
        
        </a>
    </article>
  
    <article class="house-cards-individual">
      <img
        class="house-logo"
        src="../assets/images/potions.jpeg"
        alt="Slytherin logo"
      />
      <a class="house-link" href="#">
        <h3 class="house-name house-name-slytherin">${potionsName}</h3>
        <h3 class="friend-name house-name-slytherin">${potionsEffect}</h3>
      </a>
    </article>
  </section>
      `;
};

const GryffindorPage = () => {
  return `
    ${Header()}
    ${Section()}
    `;
};
console.log(friendGryffindor);
export const GryffindorPageSuccess = () => {
  return `
    ${Header()}
    ${NewSection(
      friendGryffindor.name,
      friendGryffindor.wandCore,
      spells.name,
      spells.description,
      potion.name,
      potion.effects
    )}
    `;
};

// get element & attach components

const gryffindor = document.getElementById("main");
// console.log(gryffindor);

gryffindor.innerHTML = GryffindorPage();

if (Response.status === 200) {
  gryffindor.innerHTML = GryffindorPageSuccess();
}

// const GryffindorHero = document.getElementById("house-cards");
// GryffindorHero.innerHTML = Article();

// Event Listeners
// const buttonGryffindor = document.getElementById("button-gryffindor");
// buttonGryffindor.addEventListener("click", submitGryffindor);
