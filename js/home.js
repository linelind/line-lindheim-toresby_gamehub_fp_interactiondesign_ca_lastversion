const featuredContainer = document.querySelector(".featuredGames");
const url = "https://linelind.one/GameHubAPI/wp-json/wc/store/products";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        json.forEach(function(game) {

            const categories = game.categories;                

            for(let i = 0; i < categories.length; i++) {
                
                const image = game.images;

                for(let i = 0; i < image.length; i++) {
                }

                if (categories[i].name === "featured") {

                        featuredContainer.innerHTML += `<a href="productdetails.html?id=${game.id}">
                                                        <div class="image">
                                                            <img src="${image[i].src}"/> 
                                                        </div>                                                   
                                                      </a>`; 
                }
            }
        }); 
    }
    catch(error) {
        featuredContainer.innerHTML = createMessage("Can't fetch products.");
    }
};

fetchGames();


