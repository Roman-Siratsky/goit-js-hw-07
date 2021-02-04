const inpurRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inpurRef.addEventListener('input', event => {
    spanRef.style = `font-size: ${event.target.value}px`;
})