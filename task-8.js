const divBoxRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');
const renderBtnRef = document.querySelector('button[data-action="render"]')
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');

let targetValue = 0;
inputRef.addEventListener('input', event => {
    targetValue = event.target.value;
})

renderBtnRef.addEventListener('click', () => {
    for (let i = 0; i < targetValue; i++){
        divBoxRef.insertAdjacentHTML('afterbegin', '<div class="box-item"></div>');
    }

    const divRgb = document.querySelectorAll('.box-item');
    
    for (let j = 0; j < divRgb.length; j++){
        divRgb[j].style = "background-color: " + 
            '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() +
            ';' + "width: " + (30 + 10 * j ) + "px" + ';' + "height: " + (30 + 10 * j ) + "px";
    }

})

destroyBtnRef.addEventListener('click', () => {
    divBoxRef.remove('<div class="box-item"></div>')
})
