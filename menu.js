document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-link');
    const menuItemsContainer = document.querySelector('.menu-items');

    const foodItems = {
        special: [
            { name: 'Chicken Pasta', price: '60.00', image: 'menu-assets/special1-pasta-salad.jpg' },
            { name: 'Sushi', price: '60.00', image: 'menu-assets/special2-sushi.jpg' },
            { name: 'Egg ramen', price: '60.00', image: 'menu-assets/special3-egg-ramen.jpg' },
            { name: 'Fish plate', price: '90.00', image: 'menu-assets/special4-fish.jpg' },
            // Add more items
        ],
        breakfast: [
            { name: 'Chai samosa', price: '25.00', image: 'menu-assets/breakfast2-chai-samosa.jpg' },
            { name: 'Masala Dosa', price: '30.00', image: 'menu-assets/breakfast4-masala-dosa.jpg' },
            { name: 'Sev-puri', price: '30.00', image: 'menu-assets/breakfast3-sev-puri.jpg' },
            { name: 'Dahi Paratha', price: '35.00', image: 'menu-assets/breakfast1-dahi-paratha.jpg' },
            // Add more items
        ],
        lunch: [
            { name: 'Chicken naan', price: '90.00', image: 'menu-assets/lunch1-chicken-naan.jpg' },
            { name: 'Chicken rice', price: '70.00', image: 'menu-assets/lunch2-chicken-rice.jpg' },
            { name: 'Veg thali', price: '70.00', image: 'menu-assets/lunch3-veg-thali.jpg' },
            { name: 'Omellete rice', price: '60.00', image: 'menu-assets/lunch4-omellete-rice.jpg' },
            // Add more items
        ],
        
        juices: [
            { name: 'Mojito', price: '50.00', image: 'menu-assets/drinks1-mojito.jpg' },
            { name: 'Lassi', price: '30.00', image: 'menu-assets/drinks2-lassi.jpg' },
            { name: 'Choco shake', price: '45.00', image: 'menu-assets/drinks3-choco-shake.jpg' },
            { name: 'Cutting Chai', price: '10.00', image: 'menu-assets/drinks4-cutting-chai.jpg' },
            // Add more items
        ],

        deserts: [
            { name: 'Ice cream', price: '20.00', image: 'menu-assets/desert1-ice-cream.jpg' },
            { name: 'Jalebi rabdi', price: '30.00', image: 'menu-assets/desert2-jalebi-rabdi.jpg' },
            { name: 'Mithai (options available)', price: '15.00', image: 'menu-assets/desert3-mithai.jpg' },
            { name: 'Brownie (options avalable)', price: '20.00', image: 'menu-assets/desert4-brownie.jpg' },
            // Add more items
        ],
    };

    function displayItems(category) {
        menuItemsContainer.innerHTML = '';
        const items = foodItems[category];
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('food-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p class="item-name">${item.name}</p>
                <p class="price">₹${item.price}</p>
                <button class="buy-btn" data-item="${item.name}" data-price="${item.price}" data-image="${item.image}">Buy</button>
            `;
            menuItemsContainer.appendChild(itemElement);
        });
        addBuyButtonListeners();
    }

    function addBuyButtonListeners() {
        const buyButtons = document.querySelectorAll('.buy-btn');
        buyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemName = this.getAttribute('data-item');
                const itemPrice = parseFloat(this.getAttribute('data-price'));
                const itemImage = this.getAttribute('data-image');
                window.location.href = `paymentpage.html?item=${encodeURIComponent(itemName)}&price=${itemPrice}&image=${encodeURIComponent(itemImage)}`;
            });
        });
    }

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            displayItems(category);
        });
    });

    // Display default category
    displayItems('special');
});
