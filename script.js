document.addEventListener("DOMContentLoaded", function () {
    fetch('web.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const productnameElement = document.createElement("p");
            nameElement.textContent = "Product name: " + data.productname;

            const brandElement = document.createElement("p");
            ageElement.textContent = "Brand: " + data.brand;

            const priceElement = document.createElement("p");
            cityElement.textContent = "Price: " + data.price;

            const quantityElement = document.createElement("p");
            nameElement.textContent = "Quantity: " + data.quantity;

            const totalElement = document.createElement("p");
            ageElement.textContent = "Total: " + data.total;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(productnameElement);
            dataDisplay.appendChild(brandElement);
            dataDisplay.appendChild(priceElement);
            dataDisplay.appendChild(quantityElement);
            dataDisplay.appendChild(totalElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});