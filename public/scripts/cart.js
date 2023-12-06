document.addEventListener('DOMContentLoaded', function () {
    const cardContainers = document.querySelectorAll('.food-card-container');
    const cartItems = [];
    var totalPrice = 0;
    localStorage.setItem('TotalPrice', totalPrice);

    cardContainers.forEach(cardContainer => {
        const getFoodButtons = cardContainer.querySelectorAll('#get-food');

        getFoodButtons.forEach(getFoodButton => {
            getFoodButton.addEventListener('click', () => {
                const foodId = getFoodButton.dataset.foodId;
                const cartItemsContainer = document.getElementById('cart-items-container');
                const cartCount = document.querySelector('#cart-count');
                const foodName = cardContainer.querySelector('.food-title h2').textContent;
                const foodPrice = cardContainer.querySelector('#food-price').textContent;
                const foodDescription = cardContainer.querySelector('.food-description p').textContent;
                const foodImage = cardContainer.querySelector('#food-image').src;
                const foodVideo = cardContainer.querySelector('#food-video').src;

                const foodCard = {
                    id: foodId,
                    name: foodName,
                    price: foodPrice,
                    foodDescription: foodDescription,
                    foodImage: foodImage,
                    foodVideo: foodVideo,
                    quantity: 1
                };

                addToCart(foodCard);
                cartCount.innerHTML = ` ` + cartItemsContainer.childElementCount;

                var singleFoodPrice = parseInt(foodPrice) * parseInt(document.querySelector('.cart-item-quantity').textContent);
                totalPrice += singleFoodPrice;
                localStorage.setItem('TotalPrice', totalPrice);
            });
        });
    });

    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.getElementById('close-cart-modal');
    const cartButton = document.getElementById('cart-link');

    closeCartButton.addEventListener('click', () => {
        cartModal.close();
    });

    if (cartButton) {
        cartButton.addEventListener('click', () => {
            cartModal.showModal();
            updateCartDisplay();
        });
    }

    function addToCart(foodCard) {
        const existingItem = cartItems.find(item => item.id === foodCard.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push(foodCard);
        }

        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items-container');

        cartItemsContainer.innerHTML = '';

        if (cartItems.length > 0) {
            cartItems.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item-card');

                cartItemElement.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.foodImage}" alt="Image of the food in the cart">
                    </div>
                    <div class="cart-item-video">
                        <video src="${item.foodVideo}" autoplay loop muted></video>
                    </div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-description">${item.foodDescription}</div>
                    <div class="cart-item-quantity">${item.quantity}</div>`;

                cartItemsContainer.appendChild(cartItemElement);
            });
        } else {
            cartItemsContainer.innerHTML = `<div class="cart-no-item">
                                                <p> No items in the Basket</p>
                                            </div>`;
        }
    }
});
