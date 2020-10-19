export default class Task4 {
    constructor() {
this.btn1 = document.querySelector('[data-action="decrement"]');
this.btn2 = document.querySelector('[data-action="increment"]');
this.span = document.querySelector("#value");
this.btn1.addEventListener('click', this.handlerDecrement.bind(this));
this.btn2.addEventListener('click', this.handlerIncrement.bind(this));
    }
    handlerDecrement() {
        this.span.textContent = +this.span.textContent - 1;
    };


    handlerIncrement() {
        this.span.textContent = +this.span.textContent + 1;
    };
}