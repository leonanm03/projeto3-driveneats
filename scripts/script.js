let finish_button = document.querySelector(".bottom-button");
finish_button.disabled = true; // desabilita o botão de finalzar o pedido

// variáveis de controle para verificar os tipos de pratos já selecionados
let dish_selected, drink_selected, dessert_selected;


function selectDish(seletor) {
    const lastSelect = document.querySelector(".dish-select");

    if (lastSelect !== null) { // verificação se já tinha algo selecionado
        lastSelect.classList.remove("dish-select"); // desmarca algo selecionado anteriormente
    }

    seletor.classList.add("dish-select");

    dish_selected = seletor.innerHTML;
    enableButton();
}

function selectDrink(seletor) {
    const lastSelect = document.querySelector(".drink-select");

    if (lastSelect !== null) { // verificação se já tinha algo selecionado
        lastSelect.classList.remove("drink-select"); // desmarca algo selecionado anteriormente
    }

    seletor.classList.add("drink-select");

    drink_selected = seletor.innerHTML;
    enableButton();
}

function selectDessert(seletor) {
    const lastSelect = document.querySelector(".dessert-select");

    if (lastSelect !== null) { // verificação se já tinha algo selecionado
        lastSelect.classList.remove("dessert-select"); // desmarca algo selecionado anteriormente
    }

    seletor.classList.add("dessert-select");
    dessert_selected = seletor.innerHTML;

    enableButton();
}

function enableButton() {

    if (dish_selected !== undefined) {
        if (drink_selected !== undefined) {
            if (dessert_selected !== undefined) {
                const finish_text = document.querySelector(".bottom-button>p");
                finish_text.innerHTML = "Fechar pedido"
                finish_button.disabled = false;
                finish_button.classList.add("allow-button");
            }
        }
    }

}