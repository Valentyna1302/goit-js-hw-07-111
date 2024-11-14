const container = document.querySelector(".js-list");
const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");

const LS_KEY = "basket";

const products = JSON.parse(localStorage.getItem(LS_KEY)) || []; // отримуємо дані з localStorage, тут так само можуть бути дані, а може і не бути, тому || []
let totalCost;

if (products.length) {
  // якщо довжина не дорівнює 0
  clear.hidden = false;
  totalCost = products.reduce((acc, { qty, price }) => (acc += qty * price), 0); // тут приймаємо обєкт тому робимо детсруктуризацію { qty, price }
} // перевіряємо чи є в корзині продукти, якщо є, то кнопочку clear зробимо видимою, рахуємо загальну вартість товару

totalPrice.textContent = totalCost // це наш h1
  ? `Total cost ${totalCost} грн`
  : "Your basket is empty"; // Заповнюємо поле totalPrice. Якщо в змінній totalCost є значення, виводимо значення на сторінку, якщо нема виводимо, що корзина порожня

container.insertAdjacentHTML("beforeend", createMarkup(products)); // відмальовуємо продукти, які в корзині (добавляємо на сторінку)

clear.addEventListener("click", handleClick);

function handleClick() {
  localStorage.removeItem(LS_KEY);
  window.location.href = "/json.html"; // якщо очистили корзину переходимо на головну сторінку з товарами
}

function createMarkup(arr) {
  return arr
    .map(
      ({ img, price, qty, name }) => `
        <li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img">
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${qty * price} грн</p>
        </li>
    `
    )
    .join("");
}
