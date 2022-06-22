console.log("script loaded");
/*

Task to be completed

1. Grab the HTML tag.
2. fetch the required data
3. update the ui
 
 */

// API endpoint = https://pokeapi.co/api/v2/pokemon/id

// total pokemon = 50

const container = document.getElementById("container");
let pokemonList = [];
let totalPokemon = 120;

async function fetchPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); //API-Application Program interface
  let body = await res.json();
  pokemonList.push(body);
}

async function downloadData() {
  for (let i = 1; i <= totalPokemon; i++) {
    await fetchPokemon(i);
  }
}

//------

const card = `<div class="bg-green-200 p-4 rounded-md">
                    <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/##ID##.png"
                    alt="5"
                    class="rounded-full h-34 w-34 mx-auto"
                    />
                    <p class="text-center text-sm">##NAME##</p>
                </div>`;

function updateUi() {
  let index = 1;
  container.innerHTML = null;
  pokemonList.forEach((curr) => {
    let elm = card.replace("##ID##", index).replace("##NAME##", curr.name);
    container.insertAdjacentHTML("beforeend", elm);
    index++;
  });
}

//IIFY
(async () => {
  await downloadData();
  updateUi();
})();
