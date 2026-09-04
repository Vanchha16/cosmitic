 let count = 0;

        function loadCartCount() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            document.getElementById('add-number').innerText = cart.length;
            document.getElementById('cycle').style.display = cart.length > 0 ? 'block' : 'none';
        }

        function add(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1, img });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        }

        function dele(name) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity -= 1;
                if (existingItem.quantity <= 0) {
                    cart = cart.filter(item => item.name !== name);
                }
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        }

        function updateCartCount() {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            document.getElementById('add-number').innerText = cart.length;
            document.getElementById('cycle').style.display = cart.length > 0 ? 'block' : 'none';
        }

        function delinput() {
            document.getElementById('input').value = "";
        }

        document.addEventListener('DOMContentLoaded', loadCartCount);