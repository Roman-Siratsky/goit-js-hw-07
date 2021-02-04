const inputRef = document.querySelector('#validation-input');
const limitOfChars = Number(inputRef.dataset.length);

inputRef.addEventListener('input', validation);

function validation(event) {
    if (event.target.value) {
        if (event.target.value.length === limitOfChars) {
            inputRef.addEventListener('blur', () => {
                inputRef.classList.add('valid');
                if (inputRef.classList.contains('invalid')) {
                    inputRef.classList.remove('invalid');
                }
            });
        } else {
            inputRef.addEventListener('blur', () => {
                inputRef.classList.add('invalid');
                if (inputRef.classList.contains('invalid')) {
                    inputRef.classList.remove('valid');
                }
            });
        }
    } else {
        inputRef.addEventListener('blur', () => {
                inputRef.classList.remove('invalid');
            });
    }
}