const Header = () => {
  return `
    <div class="hogwarts-logo-container">
    <img
            class="hogwarts-logo"
            src="../assets/images/hufflepuff.jpeg"
            alt="Hufflepuff logo"
        />
        <h1 class="main__title">Hogwarts School of Witchcraft and Wizardary</h1>
    </div>

    <h3 class="main__heading">Welcome to Hufflepuff</h3>
      `;
};

const Section = () => {
  return `
  <section class="house-cards">
  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/hufflepuff.jpeg"
      alt="Hufflepuff logo"
    />
    <a class="house-link" href="#"
      ><h3 class="house-name" id="button-hufflepuff">Pick a Friend</h3>
    </a>
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/Hufflepuff.jpeg"
      alt="Hufflepuff logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name" id="button-spells">Pick a spell to Master</h3></a
    >
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/Hufflepuff.jpeg"
      alt="Hufflepuff logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name" id="button-potion">Pick Potion to learn from Snape</h3>
    </a>
  </article>
</section>
  `;
};

const NewSection = (
  src,
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
        src="${src}"
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
        src="../assets/images/spells.jpeg"
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

const HufflepuffPage = () => {
  return `
      ${Header()}
      ${Section()}
      `;
};

const HufflepuffPageSuccess = () => {
  return `
      ${Header()}
      ${NewSection()}
      `;
};

// get element & attach components

const hufflepuff = document.getElementById("main");

hufflepuff.innerHTML = HufflepuffPage();

if (Response.status === 200) {
  hufflepuff.innerHTML = HufflepuffPageSuccess();
}

// const GryffindorHero = document.getElementById("house-cards");
// GryffindorHero.innerHTML = Article();
