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
      ><h3 class="house-name house-name-slytherin" id="button-slytherin">Pick a Friend</h3>
    </a>
  </article>

  <article class="house-cards-individual">
    <img
      class="house-logo"
      src="../assets/images/slytherin.jpeg"
      alt="Slytherin logo"
    />
    <a class="house-link" href="#">
      <h3 class="house-name house-name-slytherin" id="button-spells">
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
      <h3 class="house-name house-name-slytherin id="button-potion">
        Pick Potion to learn from Snape
      </h3>
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

const SlytherinPage = () => {
  return `
        ${Header()}
        ${Section()}
        `;
};

const SlytherinPageSuccess = () => {
  return `
        ${Header()}
        ${NewSection()}
        `;
};

// get element & attach components

const slytherin = document.getElementById("main");

// if(status==200){
slytherin.innerHTML = SlytherinPage();

// } else {
//     slytherin.innerHTML = SlytherinErrorPage(); header newsection

// }

if (Response.status === 200) {
  slytherin.innerHTML = SlytherinPageSuccess();
}

// const GryffindorHero = document.getElementById("house-cards");
// GryffindorHero.innerHTML = Article();
