let changeIcon = function (icon) {
    icon.classList.toggle('fa-solid')

     if (icon.classList.contains('fa-solid')) {
        icon.style.color = "red"; // Change to red
    } else {
        icon.style.color = "black"; // Change to black
    }
}
function delinput() {
    document.getElementById('input').value = "";
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

