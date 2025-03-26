function checkNumber() {
    const input = document.getElementById("numberInput").value;
    const message = document.getElementById("message");

    // Regex untuk angka biasa atau format eksponensial
    const scientificNumberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;

    if (scientificNumberRegex.test(input)) {
        message.textContent = "Yes, it is a number.";
        message.style.color = "green";
    } else {
        message.textContent = "No, it is not a number.";
        message.style.color = "red";
    }
}
