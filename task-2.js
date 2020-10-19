const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


export default class Task2 {
    constructor() {
        this.ulList = document.getElementById("ingredients");
    }
    showList() {
        ingredients.forEach(ingredient => {
            let items = document.createElement("li");
            items.innerHTML = ingredient;
            this.ulList.append(items);
        });
    }
}

