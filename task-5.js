export default class Task5 {
    constructor() {
        this.input = document.querySelector('#name-input');
        this.span = document.querySelector('#name-output');
        this.input.addEventListener('input', this.inputHandler.bind(this));

    }
    inputHandler() {
        this.input.value === "" ? this.span.textContent = 'незнакомец' 
        : this.span.textContent = this.input.value;
    }
};