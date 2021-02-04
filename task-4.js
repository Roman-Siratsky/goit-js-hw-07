const spanValueRef = document.querySelector('#value');

let counterValue = Number(spanValueRef.textContent);

const addButtonRef = document.querySelector('button[data-action="increment"]');
const minusButtonRef = document.querySelector('button[data-action="decrement"]');

function increment() {
    counterValue++;
    spanValueRef.textContent = counterValue;
}
function decrement() {
    counterValue--;
    spanValueRef.textContent = counterValue;
}

addButtonRef.addEventListener('click', increment);
minusButtonRef.addEventListener('click', decrement);





