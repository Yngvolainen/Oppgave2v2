const products = [
    {   
        name: "Klassisk Gitar",
        description: "Andrés Segovia",
        type: "acoustic",
        price: 1999,
        image: "assets/segovia.jpeg",
        id: 0,
        amount: 1, 
    },
    {
        name: "Frankenstrat",
        description: "Eddie Van Halen",
        type: "electric",
        price: 4999,
        image: "assets/frankenstrat.jpeg",
        id: 0,
        amount: 1,
    },
    {
        name: "Voodoo Child",
        description: "Jimi Hendrix",
        type: "electric",
        price: 9999,
        image: "assets/voodoo_child.jpeg",
        id: 0,
        amount: 1,
    },
    {
        name: "12-str Taylor Jumbo Body",
        description: "Leo Kottke",
        type: "acoustic",
        price: 2999,
        image: "assets/leokottke.png",
        id: 0,
        amount: 1,
    },
    {
        name: "8-str Ibanez Stoneman",
        description: "Fredrik Thordendal",
        type: "electric",
        price: 6999,
        image: "assets/meshuggah.jpeg",
        id: 0,
        amount: 1,
    },
    {
        name: "Stormbender",
        description: "Devin Townsend",
        type: "electric",
        price: 7999,
        image: "assets/stormbender.webp",
        id: 0,
        amount: 1,
    },
    {
        name: "Gibson SG",
        description: "Jimmy Page",
        type: "electric",
        price: 3999,
        image: "assets/jimmypage.jpeg",
        id: 0,
        amount: 1,
    },
    
];

// UPDATE PRODUCT ID
// uten en satt id kan produktlista redigeres at will, var tanken her altså 🤔
for (let i = 0 ; i < products.length ; i++) {
    products[i].id = i;
}

// SET UP EMPTY CART ARRAY
let cart = new Array;

// FYLL WEBSHOP MED PRODUKTER

function addProductsToWebshop() {
    
    products.forEach(product => {
        const webshop = document.querySelector('.webshop');
        const addWebshopItem = document.createElement('div');
        const webshopItemHeader = document.createElement('h3');
        const webshopItemDescription = document.createElement('h4');
        const webshopItemPreview = document.createElement('img');
        const webshopPricingDiv = document.createElement('div');
        const webshopPrice = document.createElement('h4');
        const webshopAddToCart = document.createElement('button');
        const addToCartButtonImage = document.createElement('img');
        
        addWebshopItem.classList.add('webshop_items');
        webshopItemHeader.innerText = product.name;
        webshopItemDescription.innerText = product.description;
        webshopItemPreview.src = product.image;
        webshopPricingDiv.classList.add('webshop_pricing');
        webshopPrice.innerText = `${product.price},-`;
        webshopAddToCart.classList.add('webshop_add_to_cart');
        webshopAddToCart.id = product.id;
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

// SET EVENT LISTENERS TO BUTTONS
function setUpButtons() {
    let buttonSetup = document.querySelectorAll('.webshop_add_to_cart');
    buttonSetup.forEach( button => 
        button.addEventListener('click', addToCart)
    );

    let deleteCartContent = document.querySelector('.empty_cart');
    deleteCartContent.addEventListener('click', emptyCart);
};

setUpButtons();

// LEGG PRODUKT I HANDLEKURV
function addToCart(product) {
    let productId = products[product.target.parentElement.id].id;    
    // finnes produktet allerede i cart?
    let updatedCart = cart
    .map( x => x.id)
    .includes(productId);
    
    if (updatedCart === true) {

        // denne brukte jeg alt for lang tid på 
        cart.find( x => x.id === productId).amount++;
        updateTotal();
        updateCartNumber();
    } else {
        pushToCart(product);
        updateTotal();
        updateCartNumber();
    }
};

// OPPRETTE HANDLEKURVELEMENTER
function pushToCart(product) {

    // unngå duplisering
    document.querySelector('.cart_frame').innerHTML = ' ';

    let productId = products[product.target.parentElement.id].id;
    
    cart.push(products[productId]);
    
    cart.forEach(product=> {
        const cart = document.querySelector('.cart_frame');
        const addCartItem = document.createElement('div');
        const addCartItemNumbers = document.createElement('div');
        const addCartItemPreview = document.createElement('div');
        const addCartItemImage = document.createElement('img')
        const addRemoveButton = document.createElement('button');
        let addItemNumbers = document.createElement('div');
        const addAddButton = document.createElement('button');
        
        addCartItem.classList.add('cart_items');
        addCartItemNumbers.classList.add('cart_item_numbers')
        addCartItemPreview.classList.add('cart_item_preview');
        addCartItemImage.src = product.image;
        addRemoveButton.classList.add('remove_item');
        addRemoveButton.innerText = '-';
        addItemNumbers.innerText = product.amount;
        addItemNumbers.id = product.id;
        addItemNumbers.classList.add('item_numbers');
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
   
}

// LEGG SAMMEN ALLE PRODUCT.AMOUNT's
function updateCartNumber() {

    let itemsInCart = document.querySelector('.items_in_cart');
    itemsInCart.innerText = cart
        .map( x => x.amount)
        .reduce( (pre, curr) => pre + curr);
    
   
        // Janeida, så det... Dette funka jo ikke i det hele tatt.
        // her skulle jeg oppdatere antallet ved siden av handlekurvbildet
        // da dette ikke funket ble koden ellers forandret, så "product"(event)
        // peker ikke mot noe

        // let productId = product.target.parentElement.id;
        // console.log(productId);
        // let individualItemsNumber = document.querySelectorAll('.item_numbers');
        // console.log(individualItemsNumber)
        // let targetedPriceElement = [...individualItemsNumber].find( x => x.id === productId).id;
        // console.log(targetedPriceElement);
        // console.log(cart.find( x => x.id === targetedPriceElement));
}

// BEREGN TOTAL PRIS
function updateTotal() {
    let totalDueElement = document.querySelector('.total_due');
    let totalDue = cart
        .map( x  => x.price * x.amount)
        .reduce( (utgangspunkt, tillegg) => utgangspunkt + tillegg);
    totalDueElement.innerText = `${totalDue},-`;
}

// TØM HANDLEKURV
function emptyCart() {
    cart = [];
    document.querySelector('.cart_frame').innerHTML = ' ';
    document.querySelector('.total_due').innerText = '0,-';
    document.querySelector('.items_in_cart').innerText = '0';
    products.forEach( x => x.amount = 1);
} 