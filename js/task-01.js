const listElAll = document.querySelector('#categories');


// Number of categories
const categoriesAll = listElAll.children;
console.log('Number of categories:', categoriesAll.length);


// Animals
const AnimalEl = listElAll.firstElementChild;

const titleChildAnimal = AnimalEl.firstElementChild;
console.log('Category:', titleChildAnimal.textContent);

const listChildAnimal = AnimalEl.lastElementChild;

const AnimalElAll = listChildAnimal.children;
console.log('Elements:', AnimalElAll.length);


//Products
const ProductsEl = AnimalEl.nextElementSibling;

const titleChildProducts = ProductsEl.firstElementChild;
console.log('Category:', titleChildProducts.textContent);

const listChildProducts = ProductsEl.lastElementChild;

const ProductsElAll = listChildProducts.children;
console.log('Products:', ProductsElAll.length);


// Technolohies
const TechnologiesEl = listElAll.lastElementChild;

const titleChildTechnologies = TechnologiesEl.firstElementChild;
console.log('Category:', titleChildTechnologies.textContent);

const listChildTechnologies = TechnologiesEl.lastElementChild;

const TechnologiesElAll = listChildTechnologies.children;
console.log('Elements:', TechnologiesElAll.length)