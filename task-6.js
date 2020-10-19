export default class Task6 {
    constructor() {
        this.input = document.querySelector('#validation-input');
        this.input.addEventListener('blur', this.inputBlur.bind(this));
    }
    inputBlur() {
        if (this.input.value.length === +this.input.dataset.length) {
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
        } else {
            this.input.classList.remove('valid');
            this.input.classList.add('invalid');
        }
    }
}

