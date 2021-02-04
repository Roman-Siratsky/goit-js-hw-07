const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const mainListRef = document.querySelector('#ingredients');

const ingredient1 = document.createElement('li');
ingredient1.textContent = ingredients[0];

const ingredient2 = document.createElement('li');
ingredient2.textContent = ingredients[1];

const ingredient3 = document.createElement('li');
ingredient3.textContent = ingredients[2];

const ingredient4 = document.createElement('li');
ingredient4.textContent = ingredients[3];

const ingredient5 = document.createElement('li');
ingredient5.textContent = ingredients[4];

const ingredient6 = document.createElement('li');
ingredient6.textContent = ingredients[5];

mainListRef.append(ingredient1
    , ingredient2
    , ingredient3
    , ingredient4
    , ingredient5
    , ingredient6)

// ==============================================================