document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemName = decodeURIComponent(urlParams.get('item'));
    const itemImage = decodeURIComponent(urlParams.get('image'));
    const itemQuantity = decodeURIComponent(urlParams.get('quantity'));
    const itemTotalPrice = decodeURIComponent(urlParams.get('total'));
    const timestamp = new Date().getTime() + 330 * 60000;

    document.getElementById('itemName').textContent = itemName;
    document.getElementById('itemQuantity').textContent = itemQuantity;
    document.getElementById('itemTotalPrice').textContent = itemTotalPrice;
    document.getElementById('item-image').src = itemImage;
    document.getElementById('item-image').alt = itemName;

    generateQRCode();

    function generateQRCode() {
        const details = `${itemName}, ${itemQuantity}, ₹${itemTotalPrice}, ${timestamp}`;
        const encodedURL = encodeURIComponent(details);
        const qrCodeImage = new Image();
        qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedURL}`;
        const qrCodeContainer = document.getElementById("qrcode");
        qrCodeContainer.innerHTML = ""; // Clear any existing QR codes
        qrCodeContainer.appendChild(qrCodeImage);
    }

});
