const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const defaultSpanValue = spanRef.textContent;

inputRef.addEventListener('input', (event) => {
    spanRef.textContent = event.target.value;
    if (!event.target.value) {
        spanRef.textContent = defaultSpanValue;
    }
})

