export default class Task7 {
    constructor() {
        this.input = document.querySelector('#font-size-control');
        this.span = document.querySelector('#text');
        this.input.addEventListener('change', this.inputSize.bind(this));
    }
    inputSize() {
        this.span.style.fontSize = this.input.value +"px";
    }
}
