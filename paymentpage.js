document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedItem = urlParams.get('item');
    const itemPrice = parseFloat(urlParams.get('price'));
    const itemImage = urlParams.get('image');

    document.getElementById('selected-item').textContent = selectedItem;

    function calculateTotalPrice() {
        const quantity = document.getElementById('quantity').value;
        const totalPrice = (itemPrice * quantity).toFixed(2);
        document.getElementById('total-price').textContent = totalPrice;
    }
    calculateTotalPrice();

    document.getElementById('quantity').addEventListener('input', calculateTotalPrice);

    const verifyBtn = document.getElementById('verify-btn');
    const payBtn = document.getElementById('pay-btn');
    const upiIdInput = document.getElementById('upi-id');

    verifyBtn.addEventListener('click', function() {
        if (upiIdInput.value.trim() !== "") {
            alert('UPI ID Verified Successfully');
            verifyBtn.style.display = 'none';
            payBtn.style.display = 'block';
        } else {
            alert('Please enter a valid UPI ID');
        }
    });

    payBtn.addEventListener('click', function() {
        alert('Payment successful! Your order has been confirmed.');

        const itemQuantity = document.getElementById('quantity').value;
        const totalPrice = document.getElementById('total-price').textContent;

        const confirmationUrl = `billpage.html?item=${encodeURIComponent(selectedItem)}&image=${encodeURIComponent(itemImage)}&quantity=${encodeURIComponent(itemQuantity)}&total=${encodeURIComponent(totalPrice)}`;

        window.location.href = confirmationUrl;
    });
});
