import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');

  // Get the available quantity from the hidden input field
    var availableQuantity = parseInt(document.getElementById("availableQuantity").value);
    var quantityInput = document.getElementById("quantity");

    function decreaseQuantity() {
        var currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    }

    function increaseQuantity() {
        var currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity < availableQuantity) {
            quantityInput.value = currentQuantity + 1;
        } else {
            alert("Số lượng không thể vượt quá số lượng tồn kho.");
        }
    }

