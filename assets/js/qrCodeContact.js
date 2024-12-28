document.addEventListener("DOMContentLoaded", function () {
    // Email QR Code
    new QRCode(document.getElementById("email-qr"), {
        text: "mailto:abc123@gmail.com",
        width: 128,
        height: 128,
    });

    // Phone QR Code
    new QRCode(document.getElementById("phone-qr"), {
        text: "tel:+1234567890",
        width: 128,
        height: 128,
    });

    // Location QR Code
    new QRCode(document.getElementById("location-qr"), {
        text: "https://g.co/kgs/FxALYuE",
        width: 128,
        height: 128,
    });
});