const Header = () => {
  return `
    <div class="hogwarts-logo-container">
    <img
      class="hogwarts-logo"
      src="../assets/images/slytherin.jpeg"
      alt="Slytherin logo"
    />
    <h1 class="main__title main__title-slytherin">
      Hogwarts School of Witchcraft and Wizardary
    </h1>
  </div>

  <h3 class="main__heading main__heading-slytherin">
    Welcome to Slytherin
  </h3>
        `;
};

const Section = () => {
  return `
  <section class="house-cards">
  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/slytherin.jpeg"
      alt="Slytherin logo"
    />
    <a class="house-link" href="#"
      ><h3 class="house-name house-name-slytherin">Pick a Friend</h3>
    </a>
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/slytherin.jpeg"
      alt="Slytherin logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name house-name-slytherin">
        Pick a spell to Master
      </h3></a
    >
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/slytherin.jpeg"
      alt="Slytherin logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name house-name-slytherin">
        Pick Potion to learn from Snape
      </h3>
    </a>
  </article>
</section>
    `;
};

const SlytherinPage = () => {
  return `
        ${Header()}
        ${Section()}
        `;
};

// get element & attach components

const slytherin = document.getElementById("main");

slytherin.innerHTML = SlytherinPage();

// const GryffindorHero = document.getElementById("house-cards");
// GryffindorHero.innerHTML = Article();
