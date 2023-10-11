const form = document.querySelector('.form');
const inputArray = document.querySelectorAll('.form-input');

let validateEmail = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(value);
let validateName = (value) => !value.length == 0;

function validateInput(input, group, func) {
    if (!func(input.value)) group.classList.add('form-group__error');
    else group.classList.remove('form-group__error');
}


if (inputArray) {
    inputArray.forEach(input => {
        input.addEventListener('input', e => {
            const { name } = e.target;
            const group = e.target.closest('.form-group');

            if (!group) return;

            if (name == 'email') validateInput(e.target, group, validateEmail);
            else if (name == 'name') validateInput(e.target, group, validateName);

        });
        
    });
}

if (form) {
    form.addEventListener('submit', e => {
        const errorFields = form.querySelectorAll('.form-group__error');

        if (errorFields) return false;
    });
}