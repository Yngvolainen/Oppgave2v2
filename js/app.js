const products = [
    {   
    
        "name": "Klassisk Gitar",
        "description": "Andrés Segovia",
        "type": "acoustic",
        "price": 1999,
        "image": "assets/segovia.jpeg",
        
    },
    {
    
        "name": "Frankenstrat",
        "description": "Eddie Van Halen",
        "type": "electric",
        "price": 4999,
        "image": "assets/frankenstrat.jpeg",
        
    },
    {
  
        "name": "Gibson SG",
        "description": "Jimmy Page",
        "type": "electric",
        "price": 3999,
        "image": "assets/jimmypage.jpeg",
        
    },
    {
     
        "name": "12-str Taylor Jumbo Body",
        "description": "Leo Kottke",
        "type": "acoustic",
        "price": 2999,
        "image": "assets/leokottke.png",
        
    },
    {
 
        "name": "8-str Ibanez Stoneman",
        "description": "Fredrik Thordendal",
        "type": "electric",
        "price": 6999,
        "image": "assets/meshuggah.jpeg",
        
    },
    {
  
        "name": "Stormbender",
        "description": "Devin Townsend",
        "type": "electric",
        "price": 7999,
        "image": "assets/stormbender.webp",
        
    },
    {
        
        "name": "Fender Stratocaster",
        "description": "Jimi Hendrix",
        "type": "electric",
        "price": 9999,
        "image": "assets/voodoo_child.jpeg",
        
    },

]

// Gi alle produkter en unik ID, because why not

for (let i = 0 ; i < products.length ; i++) {
    products[i].id = i; 
}

console.log(products);

// FYLL WEBSHOP MED PRODUKTER

function addProductsToWebshop() {

    products.forEach(product => {
    const webshop = document.querySelector('.webshop');

    const addWebshopItem = document.createElement('div');
    addWebshopItem.classList.add('webshop_items');


    const webshopItemHeader = document.createElement('h3');
    webshopItemHeader.innerText = product.name;

    const webshopItemDescription = document.createElement('h4');
    webshopItemDescription.innerText = product.description;

    const webshopItemPreview = document.createElement('img');
    webshopItemPreview.src = product.image;

    const webshopPricingDiv = document.createElement('div');
    webshopPricingDiv.classList.add('webshop_pricing');

    const webshopPrice = document.createElement('h4');
    webshopPrice.innerText = `${product.price},-`;

    const webshopAddToCart = document.createElement('button');
    webshopAddToCart.classList.add('webshop_add_to_cart');
    webshopAddToCart.id = product.id;

    const addToCartButtonImage = document.createElement('img');
    addToCartButtonImage.src = 'assets/cart.png';

    webshop.appendChild(addWebshopItem);
    addWebshopItem.appendChild(webshopItemHeader);
    addWebshopItem.appendChild(webshopItemDescription);
    addWebshopItem.appendChild(webshopItemPreview);
    addWebshopItem.appendChild(webshopPricingDiv);
    webshopPricingDiv.appendChild(webshopPrice);
    webshopPricingDiv.appendChild(webshopAddToCart);
    webshopAddToCart.appendChild(addToCartButtonImage)


    });

}

addProductsToWebshop();


// LEGG PRODUKT TIL I HANDLEKURV

function webshopToCartButton() {
    const addToCartButton = document.querySelector('.webshop_add_to_cart');

    addToCartButton.addEventListener('click', addToCart())
};

webshopToCartButton();



// LEGG PRODUKT IO HANDLEKURV


const cartItems = [];


function addToCart() {

    ///ååååeeehhh
    const correctIndex = products.find( )  ;


    products.forEach(product=> {


    const cart = document.querySelector('.cart_frame');

    const addCartItem = document.createElement('div');
    addCartItem.classList.add('cart_items');

    const addCartItemNumbers = document.createElement('div');
    addCartItemNumbers.classList.add('cart_item_numbers')

    const addCartItemPreview = document.createElement('div');
    addCartItemPreview.classList.add('cart_item_preview');

    const addCartItemImage = document.createElement('img')
    addCartItemImage.src = product.image;

    const addRemoveButton = document.createElement('button');
    addRemoveButton.classList.add('remove_item');
    addRemoveButton.innerText = '-';

    const addItemNumbers = document.createElement('div');
    addItemNumbers.innerText = '0';
    addItemNumbers.classList.add('item_numbers');

    const addAddButton = document.createElement('button');
    addAddButton.classList.add('add_item');
    addAddButton.innerText = '+';


    cart.appendChild(addCartItem);
    addCartItem.appendChild(addCartItemNumbers);
    addCartItemNumbers.appendChild(addCartItemPreview);
    addCartItemPreview.appendChild(addCartItemImage);
    addCartItemNumbers.appendChild(addRemoveButton);
    addCartItemNumbers.appendChild(addItemNumbers);
    addCartItemNumbers.appendChild(addAddButton);
    });
};