export default class Task8 {
    constructor() {
        this.input = document.querySelector('#controls input');
        this.buttonRender = document.querySelector('[data-action = "render"]');
        this.buttonDestroy = document.querySelector('[data-action = "destroy"]');
        this.div = document.querySelector('#boxes');
        this.buttonRender.addEventListener('click', this.render.bind(this));
        this.buttonDestroy.addEventListener('click', this.destroy.bind(this));
    }
    render() {
        let num = this.input.value;
        const boxes = this.createBoxes(num);
        boxes.forEach(box => {
            this.div.append(box);
        })
    }

    createBoxes(amount) {
        const boxes = [];
        let height = 30;
        let width = 30;

        for (let i = 0; i < amount; i++) {
            let box = document.createElement('div');
            box.style.width = width + "px";
            box.style.height = height + "px";
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            box.style.backgroundColor = `rgb(${r},${g},${b})`;
            height += 10;
            width += 10;
            boxes.push(box)
        }
        return boxes
    }

    destroy() {
        this.div.innerHTML = '';
    }
}
