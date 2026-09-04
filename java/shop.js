count = 0;
// function add() {
//     var show = document.getElementById('cycle').style.display = "Block";
//     count++;
//     document.getElementById("add-number").innerText = count;
// }

function dele(name) {
    var show = document.getElementById('cycle').style.display = "Block";
     if (count > 0) {
        count--;
    }
    document.getElementById("add-number").innerText = count;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity -= 1; // Decrease quantity

        if (existingItem.quantity <= 0) {
            cart = cart.filter(item => item.name !== name); // Remove item if quantity reaches 0
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    // If on the cart page, refresh cart display
    if (document.getElementById("cart-items")) {
        loadCart();
    }

}

function delinput() {
    document.getElementById('input').value = "";
}

function add(name, price, img) {
    var show = document.getElementById('cycle').style.display = "Block";
    count++;
    document.getElementById("add-number").innerText = count;


    let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1, img });
            }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    // Get cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the cart count element
    let cartCountElement = document.getElementById("cycle");
    let cartNumberElement = document.getElementById("add-number");

    // Calculate total quantity
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalQuantity > 0) {
        cartNumberElement.textContent = totalQuantity;
        cartCountElement.style.display = "block"; // Show the cart count
    } else {
        cartCountElement.style.display = "none"; // Hide if cart is empty
    }
}

// Run function on page load
document.addEventListener("DOMContentLoaded", updateCartCount);
