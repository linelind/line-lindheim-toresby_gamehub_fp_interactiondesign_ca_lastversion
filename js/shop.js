const shopContainer = document.querySelector(".shopContainer");
const url = "https://linelind.one/GameHubAPI/wp-json/wc/store/products";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        shopContainer.innerHTML = "";

        json.forEach(function(game) {

            const image = game.images;

            for(let i = 0; i < image.length; i++) {
            }

            const onSale = game.on_sale;

            if(onSale === true){

                    shopContainer.innerHTML += `<a href="productdetails.html?id=${game.id}" class="gameCard">
                                                    <p class="saleLabel saleLabelShop">Sale</p>
                                                    <div class="image">
                                                        <img src="${image[0].src}" alt="${image[0].alt}"/> 
                                                    </div>
                                                    <div class="details">                                                        
                                                        <h2>${game.name}</h2>   
                                                        <p class="shopPrice">${game.price_html}</p> 
                                                        <p class="cta_orange cta_viewGame">View game</p>                                                                                                                                                     
                                                    </div>
                                                </a>`;
        
            } else {
                shopContainer.innerHTML += `<a href="productdetails.html?id=${game.id}" class="gameCard">
                                                    <div class="image">
                                                        <img src="${image[0].src}" alt="${image[0].alt}"/> 
                                                    </div>
                                                    <div class="details">                                                        
                                                        <h2>${game.name}</h2>   
                                                        <p class="shopPrice">${game.price_html}</p> 
                                                        <p class="cta_orange cta_viewGame">View game</p>                                                                                                                                                     
                                                    </div>
                                                </a>`;
            }

            function sortContent(json){

                shopContainer.innerHTML = "";
                json.forEach(function(game){

                    const image = game.images;

                    for(let i = 0; i < image.length; i++) {
                    }

                    const onSale = game.on_sale;

                    if(onSale === true){
                        shopContainer.innerHTML += `<a href="productdetails.html?id=${game.id}" class="gameCard">
                                                        <p class="saleLabel saleLabelShop">Sale</p>
                                                        <div class="image">
                                                            <img src="${image[0].src}" alt="${image[0].alt}"/> 
                                                        </div>
                                                        <div class="details">
                                                            <h2>${game.name}</h2>   
                                                            <p class="shopPrice">${game.price_html}</p> 
                                                            <p class="cta_orange cta_viewGame">View game</p>                                                                                                                                                     
                                                        </div>
                                                    </a>`;            
                    } else {
                        shopContainer.innerHTML += `<a href="productdetails.html?id=${game.id}" class="gameCard">
                                                        <div class="image">
                                                            <img src="${image[0].src}" alt="${image[0].alt}"/> 
                                                        </div>
                                                        <div class="details">
                                                            <h2>${game.name}</h2>   
                                                            <p class="shopPrice">${game.price_html}</p> 
                                                            <p class="cta_orange cta_viewGame">View game</p>                                                                                                                                                     
                                                        </div>
                                                    </a>`;
                    }
                })
            }            
            
            document.querySelector(".sortAZ").addEventListener("click", function(){
                json.sort((a,b) => (a.name > b.name) ? 1 : -1);
                sortContent(json);
            })

        }); 
    }
    catch(error) {
        shopContainer.innerHTML = createMessage("Oh no! An error occured while fetching the products.");
    }
};

fetchGames();
