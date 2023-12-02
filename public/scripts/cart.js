//Cart Modal


document.addEventListener('DOMContentLoaded', function () {
    const cardContainers = document.querySelectorAll('.food-card-container');
    const cartItems = [];

    var totalPrice = 0;
    localStorage.setItem('TotalPrice', totalPrice);

    cardContainers.forEach(cardContainer => {
        const getFoodButtons = cardContainer.querySelectorAll('#get-food');

        getFoodButtons.forEach(getFoodButton => {
            getFoodButton.addEventListener('click', () => {
                console.log('get food button clicked');
                const foodId = getFoodButton.dataset.foodId;
                const cartItems = document.getElementById('cart-items-container');
               // const cartItemQuantity = document.querySelector('.cart-item-quantity');
                const cartCount = document.querySelector('#cart-count');
                const foodName = cardContainer.querySelector('.food-title h2').textContent;
                const foodPrice = cardContainer.querySelector('#food-price').textContent;
                const foodDescription = cardContainer.querySelector('.food-description p').textContent;
                const foodImage = cardContainer.querySelector('#food-image').src;

                const foodCard = {
                    id: foodId,
                    name: foodName,
                    price: foodPrice,
                    foodDescription: foodDescription,
                    foodImage: foodImage
                    // Add other properties as needed
                };

               

                addToCart(foodCard);
                cartCount.innerHTML = ` ` + cartItems.childElementCount;

                var singleFoodPrice = parseInt(foodPrice) * parseInt(document.querySelector('.cart-item-quantity').textContent);
                totalPrice += singleFoodPrice;
                //console.log(totalPrice);
                localStorage.setItem('TotalPrice', totalPrice);

               
            });
        });
    });

    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.getElementById('close-cart-modal');

    // Attach click event listener to the cart button
    const cartButton = document.getElementById('cart-link');
    if (cartButton) {
        cartButton.addEventListener('click', () => {
            console.log('cart Button clicked');
            cartModal.showModal();
            updateCartDisplay();
        });
    }

    if (closeCartButton) {
        closeCartButton.addEventListener('click', () => {
            cartModal.close();
        });
    }

    function addToCart(foodCard) {
        const existingItem = cartItems.find(item => item.id === foodCard.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            foodCard.quantity = 1;
            cartItems.push(foodCard);
        }

        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartItemImage = document.querySelector('.cart-item-image');
        const cartItemName = document.querySelector('.cart-item-name');
        const cartItemDescription = document.querySelector('.cart-item-description');
        const cartItemQuantity = document.querySelector('.cart-item-quantity');

        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';

            if (cartItems.length > 0) {
                cartItems.forEach(item => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.classList.add('cart-item-card');
                    //cartItemName.textContent = `${item.name}`;
                    //cartItemDescription.textContent = `${item.foodDescription}`;
                    //cartItemQuantity.textContent = `${item.quantity}`;

                    cartItemElement.innerHTML = ` <div class="cart-item-image">
                                                        <img src="${item.foodImage}" alt="Image of the food in the cart" />
                                                    </div>
                                                    <div class="cart-item-name">${item.name}</div>
                                                    <div class="cart-item-description">${item.foodDescription}</div>
                                                    <div class="cart-item-quantity">${item.quantity}</div>`

                    //cartItemElement.textContent = `Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`;
                    cartItemsContainer.appendChild(cartItemElement);
                    
                });
            } else {
                cartItemsContainer.innerHTML = `<div class="cart-no-item">
                                                    <p> No items in the Basket</p>

                                                </div>`;
            }
        }
    }
});
