document.addEventListener("DOMContentLoaded", function () {
    // Email QR Code
    new QRCode(document.getElementById("email-qr"), {
        text: "mailto:camezgo@info.com",
        width: 128,
        height: 128,
    });

    // Phone QR Code
    new QRCode(document.getElementById("phone-qr"), {
        text: "tel:+855 23 99 999",
        width: 128,
        height: 128,
    });

    // Location QR Code
    new QRCode(document.getElementById("location-qr"), {
        text: "https://maps.app.goo.gl/YDWQhLu1Nn1ejmdL7",
        width: 128,
        height: 128,
    });
});