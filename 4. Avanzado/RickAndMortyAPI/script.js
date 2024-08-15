document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  //   console.log("getting dates");
  try {
    loadingData(true);
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    printCards(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};

const printCards = (data) => {
  const cards = document.querySelector("#card-dinamicas");
  const templateCard = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();
  data.results.forEach((item) => {
    const clone = templateCard.cloneNode(true);
    clone.querySelector("h5").textContent = item.name;
    clone.querySelector("p").textContent = item.species;
    clone.querySelector(".card-img-top").setAttribute("src", item.image);

    //Guardamos en el fragment para evitar el reflow.
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
//Pintamos el loading.
const loadingData = (estado) => {
  const loading = document.querySelector("#loading");
  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
