console.log("js connected!!");

/*
Task List
1. declare the DOM elements
2. fetch the country data
3. update the ui
*/

const container = document.getElementById("container");
const allCountryAPI = "https://restcountries.com/v3.1/all";
let countryList = [];

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

function updateUI() {
  const card = `<div class="shadow-md rounded overflow-hidden">
                <img class="w-full h-36 object-cover" src="##FLAG##" alt="##NAME##" />
                <div class="p-4">
                <h2 class="text-sm font-medium text-slate-800">
                    ##OFFICIAL##
                </h2>
                <p class="text-sm">##REGION##</p>
                <div class="mt-2">
                    <div class="flex items-center text-xs space-x-4 mb-2">
                    <img src="./exchange.png" class="h-4" />
                    <p>##CURRENCY##</p>
                    </div>
                    <div class="flex items-center text-xs space-x-4">
                    <img src="./team.png" class="h-4" />
                    <p>##POPULATION##</p>
                    </div>
                </div>
                </div>
             </div>`;

  countryList.map((country) => {
    const currentCard = card
      .replace("##FLAG##", country.flags.svg)
      .replace("##OFFICIAL##", country.name.official)
      .replace("##REGION##", country.region)
      .replace("##POPULATION##", country.population)
      .replace("##CURRENCY##", Object.keys(country.currencies).join(", "));

    container.insertAdjacentHTML("beforeend", currentCard);
  });
}

async function fetchCountry() {
  const res = await fetch(allCountryAPI);
  const data = await res.json();
  countryList = countryList.concat(data);
  updateUI();
}

fetchCountry();

function add() {
  return 4 + 3;
}

add();
