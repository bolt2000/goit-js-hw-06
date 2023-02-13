const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredEl = document.querySelector('#ingredients');

// Вариант-1 Old school //

// const ingredient = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const element = ingredients[i];
//   const linkEl = document.createElement('li');
//   linkEl.classList.add('item');
//   linkEl.textContent = element;
//   ingredient.push(linkEl);
// }
// ingredEl.append(...ingredient);



//Вариант-2 с map //

// const ingredient = ingredients.map(element => {
//   const linkEl = document.createElement('li');
//   linkEl.classList.add('item');
//   linkEl.textContent = element;
//   return linkEl;
// });
// console.log(ingredient);
// ingredEl.append(...ingredient);



//Вариант-3 с function //

const createIngredients = (element) => {
  return element.map(element => {
    const linkEl = document.createElement('li');
    linkEl.classList.add('item');
    linkEl.textContent = element;
    return linkEl;

  });
};

const ingredient = createIngredients(ingredients);
ingredEl.append(...ingredient);