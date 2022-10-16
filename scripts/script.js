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

function deliveryMessage() {
    const dish = (document.querySelector(".dish-select>.plate").innerHTML); // armazena o nome do prato
    const drink = (document.querySelector(".drink-select>.plate").innerHTML); // armazena o nome da bebida
    const dessert = (document.querySelector(".dessert-select>.plate").innerHTML); // armazena o nome da sobremesa
    let price = 0; // "price" irá armazenar a soma dos valores que x receber.
    let x = (document.querySelector(".dish-select>.price").innerHTML).replace("R$ ", ""); // x receberá o valor de cada parte da refeição

    // Cálculo do preço total
    x = x.replace(",", ".");
    x = Number(x);
    price += x;    
    x = (document.querySelector(".drink-select>.price").innerHTML).replace("R$ ", ""); // preço bebida
    x = x.replace(",", ".");
    x = Number(x);
    price += x;    
    x = (document.querySelector(".dessert-select>.price").innerHTML).replace("R$ ", ""); // preço sobremesa
    x = x.replace(",", ".");
    x = Number(x);
    price += x;    

    price = String(price.toFixed(2).replace(".", ",")); // price é convertido para uma string com "," e duas casas decimais
    
    let str = `     Olá, gostaria de fazer o pedido:\n - Prato: ${dish}\n - Bebida: ${drink}\n - Sobremesa: ${dessert}\n Total: R$ ${price}`;
    str = encodeURIComponent(str);
    window.open("https://wa.me/5548984658277?text=" + str);
}