const Header = () => {
  return `
  <div class="hogwarts-logo-container">
  <img
    class="hogwarts-logo"
    src="../assets/images/ravenclaw.jpeg"
    alt="Ravenclaw logo"
  />
  <h1 class="main__title main__title-ravenclaw">
    Hogwarts School of Witchcraft and Wizardary
  </h1>
</div>

<h3 class="main__heading main__heading-ravenclaw">
  Welcome to Ravenclaw
</h3>
          `;
};

const Section = () => {
  return `
  <section class="house-cards">
  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/ravenclaw.jpeg"
      alt="Ravenclaw logo"
    />
    <a class="house-link" href="#"
      ><h3 class="house-name house-name-ravenclaw">Pick a Friend</h3>
    </a>
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/ravenclaw.jpeg"
      alt="Ravenclaw logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name house-name-ravenclaw">
        Pick a spell to Master
      </h3></a
    >
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/ravenclaw.jpeg"
      alt="Ravenclaw logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name house-name-ravenclaw">
        Pick Potion to learn from Snape
      </h3>
    </a>
  </article>
</section>
      `;
};

const RavenclawPage = () => {
  return `
          ${Header()}
          ${Section()}
          `;
};

// get element & attach components

const ravenclaw = document.getElementById("main");

ravenclaw.innerHTML = RavenclawPage();

// const GryffindorHero = document.getElementById("house-cards");
// GryffindorHero.innerHTML = Article();
