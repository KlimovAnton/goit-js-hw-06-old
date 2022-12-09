const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allEl = document.querySelector('#ingredients');

//** forOf */

// const elements = [];

// for (const ingredient of ingredients) {
//   const listEl = document.createElement('li'); 
//   listEl.textContent = ingredient;
//   listEl.classList.add(`item`);

//   elements.push(listEl);
// }


//** .map */

const elements = ingredients.map(option => {
  const listEl = document.createElement("li"); 
  listEl.classList.add(`item`);
  listEl.textContent = option;

  return listEl;
});

allEl.append(...elements);










