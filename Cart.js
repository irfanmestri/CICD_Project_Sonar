// Simple cart array to hold the selected products
let cart = [];

// Products data
const products = [
    { id: 1, name: 'Apple', price: 2 },
    { id: 2, name: 'Banana', price: 1 },
    { id: 3, name: 'Carrot', price: 3 }
];

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear existing cart items
    cartItemsContainer.innerHTML = '';

    // Add items to cart
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    // Update total price
    totalPriceElement.textContent = total;
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.closest('.product').dataset.id);
        addToCart(productId);
    });
});

// Checkout functionality (placeholder)
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Checkout successful!');
        cart = []; // Clear cart after checkout
        updateCart();
    } else {
        alert('Your cart is empty!');
    }
});
