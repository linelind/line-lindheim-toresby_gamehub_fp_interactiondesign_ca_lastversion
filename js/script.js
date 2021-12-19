const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

const gameContainer = document.querySelector(".gameDetails");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://linelind.one/GameHubAPI/wp-json/wc/store/products/" + id;

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        const image = details.images;

        for(let i = 0; i < image.length; i++) {
        }

        let inStock = details.is_in_stock;

        if (inStock === true) {
            inStock = `<i class="fas fa-check-circle"></i>`;
        } else {
            inStock = `<i class="fas fa-times-circle"></i>`;
        };

        const gameOnSale = details.on_sale;

        if(gameOnSale === true){

            gameContainer.innerHTML =  `<div class="gameDetailHeader">
                                            <h1>${details.name}</h1>
                                            <p class="shortDescription">${details.short_description}</p>
                                        </div>
                                        <div class="flexProductContainer">
                                            <div class="productImage"> 
                                                <p class="saleLabel saleLabelGame">Sale</p>  
                                                <i class="fas fa-search-plus"></i>                        
                                                <img src="${image[1].src}" alt="${image[1].alt}"/> 
                                            </div>
                                            <div class="productDescription">
                                                <div class="ctaContainer">  
                                                    <p class="productPrice">${details.price_html}</p>
                                                    <button type="button" class="cta_orange addToCartButton">Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="detailsContainer">
                                            <p>${details.description}</p>
                                            <p class="inStockInfo">Is the item in stock? ${inStock}</p>
                                        </div>`;
        } else {
            gameContainer.innerHTML =  `<div class="gameDetailHeader">
                                        <h1>${details.name}</h1>
                                        <p class="shortDescription">${details.short_description}</p>
                                    </div>
                                    <div class="flexProductContainer">
                                        <div class="productImage">
                                            <i class="fas fa-search-plus"></i>                             
                                            <img src="${image[1].src}" alt="${image[1].alt}" class="productImage-specific"/> 
                                        </div>
                                        <div class="productDescription">
                                            <div class="ctaContainer">  
                                                <p class="productPrice">${details.price_html}</p>
                                                <button type="button" class="cta_orange addToCartButton">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="detailsContainer">
                                        <p>${details.description}</p>
                                        <p class="inStockInfo">Is the item in stock? ${inStock}</p>
                                    </div>`;
        }


        const title = document.querySelector("title");

        title.innerHTML = `Game Hub | ${details.name}`;

        const button = document.querySelector(".addToCartButton");
        const shoppingCart = document.querySelector(".shoppingCart");

        let count = 0;

        function cartCount() {
            count++
            shoppingCart.style.display = "block";
            shoppingCart.innerHTML = count;
            button.innerHTML = "Added";
            button.style.backgroundColor = "var(--successgreen-colour)";

            setTimeout(function() {
            button.innerHTML = "Add to cart";
            button.style.backgroundColor = "var(--darkorange-colour)";
            }, 700);
        }   

        button.addEventListener("mouseup", cartCount);


        const modalImage = document.querySelector(".productImage img");
        const modalZoomIcon = document.querySelector(".fa-search-plus");
        
        modalImage.addEventListener("click", displayModal);
        modalZoomIcon.addEventListener("click", displayModal);
        
        function displayModal() {
            modal.style.display = "block"; 

            modalContent.innerHTML = `<div>
                                        <img src="${image[1].src}" alt="${image[1].alt}"/> 
                                    </div>`;  
        }

        modal.onclick = function() {
            modal.style.display = "none";
        }


    }

    catch(error) {
        gameContainer.innerHTML = createMessage("Oh no! An error occured while fetching the products.");
    }
    
}

fetchGame();


