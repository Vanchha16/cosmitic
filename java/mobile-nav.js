// Mobile Navigation & Responsive Helper for Cosmetic Website
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");
    const menuIcon = menuToggle ? menuToggle.querySelector("i") : null;

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.toggle("active");
            const isOpen = menu.classList.contains("active");

            if (menuIcon) {
                if (isOpen) {
                    menuIcon.classList.remove("fa-bars");
                    menuIcon.classList.add("fa-xmark");
                } else {
                    menuIcon.classList.remove("fa-xmark");
                    menuIcon.classList.add("fa-bars");
                }
            }
        });

        // Close menu when clicking on a link
        const menuLinks = menu.querySelectorAll("a");
        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                menu.classList.remove("active");
                if (menuIcon) {
                    menuIcon.classList.remove("fa-xmark");
                    menuIcon.classList.add("fa-bars");
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (e) {
            if (menu.classList.contains("active") && !menu.contains(e.target) && !menuToggle.contains(e.target)) {
                menu.classList.remove("active");
                if (menuIcon) {
                    menuIcon.classList.remove("fa-xmark");
                    menuIcon.classList.add("fa-bars");
                }
            }
        });
    }

    // Ensure cart count displays properly
    function syncCartCount() {
        try {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartCountElement = document.getElementById("cycle");
            const cartNumberElement = document.getElementById("add-number");
            
            if (cartCountElement && cartNumberElement) {
                const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
                if (totalQuantity > 0) {
                    cartNumberElement.textContent = totalQuantity;
                    cartCountElement.style.display = "flex";
                } else {
                    cartCountElement.style.display = "none";
                }
            }
        } catch (err) {
            console.error("Error reading cart:", err);
        }
    }

    syncCartCount();
});
