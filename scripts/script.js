let finish_buttom = document.querySelector(".bottom-button");
let dish_selected = false;
let drink_selected = false;
let dessert_selected = false;

function enableButton(button) {
    button.classList.toggle("allow-button");
    finish_buttom.disabled = false;
}

function selectDish(seletor) {
    const lastSelect = document.querySelector(".dish-select");

    if (lastSelect !== null) { // verificação se já tinha algo selecionado
        lastSelect.classList.remove("dish-select"); // desmarca algo selecionado anteriormente
    }

    seletor.classList.add("dish-select");

    dish_selected = true;
}

function selectDrink(seletor) {
    const lastSelect = document.querySelector(".drink-select");

    if (lastSelect !== null) { // verificação se já tinha algo selecionado
        lastSelect.classList.remove("drink-select"); // desmarca algo selecionado anteriormente
    }

    seletor.classList.add("drink-select");

    drink_selected = true;
}

function selectDessert(seletor) {
    const lastSelect = document.querySelector(".dessert-select");

    if (lastSelect !== null) { // verificação se já tinha algo selecionado
        lastSelect.classList.remove("dessert-select"); // desmarca algo selecionado anteriormente
    }

    seletor.classList.add("dessert-select");

    dessert_selected = true;
}