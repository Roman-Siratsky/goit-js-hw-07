const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const mainListRef = document.querySelector('#gallery');

const firstLiRef = document.createElement('li');
const secondLiRef = document.createElement('li');
const thirdLiRef = document.createElement('li');

firstLiRef.insertAdjacentHTML('afterbegin', `<img src = '${images[0].url}' alt = '${images[0].alt}'>`);
secondLiRef.insertAdjacentHTML('afterbegin', `<img src = '${images[1].url}' alt = '${images[1].alt}'>`);
thirdLiRef.insertAdjacentHTML('afterbegin', `<img src = '${images[2].url}' alt = '${images[2].alt}'>`);

mainListRef.append(firstLiRef, secondLiRef, thirdLiRef);

mainListRef.classList.add('image__container');

// console.log(mainListRef);

// ========================================= БЕЗ использования insertAdjacentHTML =======================
// const firstImgRef = document.createElement('img');
// firstImgRef.src = images[0].url;
// firstImgRef.alt = images[0].alt;
// const secondImgRef = document.createElement('img');
// secondImgRef.src = images[1].url;
// secondImgRef.alt = images[1].alt;
// const thirdImgRef = document.createElement('img');
// thirdImgRef.src = images[2].url;
// thirdImgRef.alt = images[2].alt;


// firstLiRef.appendChild(firstImgRef)
// secondLiRef.appendChild(secondImgRef)
// thirdLiRef.appendChild(thirdImgRef)

// mainListRef.append(firstLiRef, secondLiRef, thirdLiRef);

