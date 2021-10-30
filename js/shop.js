const shopContainer = document.querySelector(".shopContainer");
const url = "http://linelind.one/GameHubAPI/wp-json/wc/store/products";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        shopContainer.innerHTML = "";


        json.forEach(function(game) {

            const image = game.images;

            for(let i = 0; i < image.length; i++) {
                console.log(image[i].src);
            }

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
        

        
        }); 

    }

    catch(error) {
        console.log(error);
        shopContainer.innerHTML = message("error", error);
    }

}

fetchGames();


