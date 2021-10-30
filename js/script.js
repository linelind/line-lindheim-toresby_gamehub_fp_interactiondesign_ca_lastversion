const gameContainer = document.querySelector(".gameDetails");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "http://linelind.one/GameHubAPI/wp-json/wc/store/products/" + id;


async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        const image = details.images;

        for(let i = 0; i < image.length; i++) {
        }

        let inStock = details.is_in_stock;

        if (inStock === true) {
            inStock = `<i class="fas fa-check-circle"></i>`;
        } else {
            inStock = `<i class="fas fa-times-circle"></i>`;
        };

        gameContainer.innerHTML =  `<div>
                                        <h1>${details.name}</h1>
                                        <p>${details.short_description}</p>
                                        <div class="productImage">                           
                                            <img src="${image[1].src}" alt="${image[1].alt}"/> 
                                        </div>
                                        <div class="productDescription">  
                                            <p>${details.price_html}</p>
                                            <button type="button" class="cta_orange addToCartButton">Add to cart</button>
                                            <p>${details.description}</p>
                                            <p>Is the item in stock: ${inStock}</p>
                                        </div>
                                    </div>`;
      
    
    
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
    
                                }
    catch(error) {
        console.log(error);
        gameContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();
