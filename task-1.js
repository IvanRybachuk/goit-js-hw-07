export default class Task1 {
    constructor() {
        this.list = document.querySelector("#categories");
        this.listItems = document.querySelectorAll('.item')
        this.message = '';
    }
    showTitles() {
        this.listItems.forEach(el => {
            this.message += `Категория: ${el.querySelector('h2').textContent}\nКоличество элементов: ${el.querySelectorAll('li').length}\n\n`
        })
        console.log(this.message);
    }

}



