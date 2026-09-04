function updateCountdown() {
    const now = new Date();
    const hours = (23 - now.getHours()).toString().padStart(2, '0');
    const minutes = (59 - now.getMinutes()).toString().padStart(2, '0');
    const seconds = (59 - now.getSeconds()).toString().padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


function scrollL() {
    // alert("hello");
    document.getElementById("scroll-container").scrollBy({ left: -300, behavior: 'smooth' });

}

function scrollRight() {
    document.getElementById("scroll-container").scrollBy({ left: 300, behavior: 'smooth' });
}
function delinput() {
    document.getElementById('input').value = "";
}
count = 0;

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

let changeIcon = function (icon) {
    icon.classList.toggle('fa-solid')

     if (icon.classList.contains('fa-solid')) {
        icon.style.color = "red"; // Change to red
    } else {
        icon.style.color = "black"; // Change to black
    }
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



 document.addEventListener("DOMContentLoaded", function () {
                let index = 0;
                let direction = 1; // 1 means moving forward, -1 means moving backward
                const images = [
                    './img/Artboard\ 1\ \(1\).jpg',
                    './img/image_2025-02-28_18-39-25.png',
                    './img/home-2.avif'
                ];
                const photoContainer = document.getElementById("photoContainer");

                // Create an element to hold all images
                const slideContainer = document.createElement("div");
                slideContainer.classList.add("photo-slide");

                // Add each image to the slide container
                images.forEach(image => {
                    const img = document.createElement("img");
                    img.src = image;
                    slideContainer.appendChild(img);
                });

                photoContainer.appendChild(slideContainer);

                // Function to slide images
                function slide() {
                    index = (index + direction + images.length) % images.length; // Adjust index based on direction
                    slideContainer.style.transform = `translateX(-${index * 100}%)`;

                    // If at the first or last image, change the direction
                    if (index === 0 || index === images.length - 1) {
                        direction *= -1; // Reverse the direction
                    }
                }

                // Set interval to slide the images automatically
                setInterval(slide, 3000);

                // Initial slide to make sure the first image is shown
                slide();
 });
            
