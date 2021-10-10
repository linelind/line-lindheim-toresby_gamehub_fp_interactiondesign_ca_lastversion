const button = document.querySelector(".addToCartButton");
const shoppingCart = document.querySelector(".shoppingCart");



let count = 0;

function cartCount() {
    count++
    shoppingCart.style.display = "block";
    shoppingCart.innerHTML = count;
    button.innerHTML = "Game added";
    button.style.backgroundColor = "var(--successgreen-colour)";

    setTimeout(function() {
        button.innerHTML = "Add to cart";
        button.style.backgroundColor = "var(--darkorange-colour)";

    }, 1000);

}

button.addEventListener("mouseup", cartCount);

