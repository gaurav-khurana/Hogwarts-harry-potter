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
      ><h3 class="house-name house-name-gryffindor">Pick a Friend</h3>
    </a>
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/gryffindor.jpeg"
      alt="Gryffindor logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name house-name-gryffindor">
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
      <h3 class="house-name house-name-gryffindor">
        Pick Potion to learn from Snape
      </h3>
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

// get element & attach components

const gryffindor = document.getElementById("main");
console.log(gryffindor);

gryffindor.innerHTML = GryffindorPage();

// const GryffindorHero = document.getElementById("house-cards");
// GryffindorHero.innerHTML = Article();
