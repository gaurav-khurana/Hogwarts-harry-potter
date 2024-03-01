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
      ><h3 class="house-name">Pick a Friend</h3>
    </a>
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/Hufflepuff.jpeg"
      alt="Hufflepuff logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name">Pick a spell to Master</h3></a
    >
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/Hufflepuff.jpeg"
      alt="Hufflepuff logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name">Pick Potion to learn from Snape</h3>
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

// get element & attach components

const hufflepuff = document.getElementById("main");

hufflepuff.innerHTML = HufflepuffPage();

// const GryffindorHero = document.getElementById("house-cards");
// GryffindorHero.innerHTML = Article();
