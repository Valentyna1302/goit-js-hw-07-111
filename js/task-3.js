// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);
// // innerChild.addEventListener("click", foo); // для перевірки методу stopPropagation()

// function onParentClick(event) {
//   console.log("onParentClick target", event.target);

//   console.log("onParentClick currentTarget", event.currentTarget);
// }

// function onChildClick(event) {
//   console.log("onChildClick target", event.target); // у властивості target знаходить елемент на якому відбулась подія, тобто елемент по якому користувач клікнув
//   console.log("onChildClick currentTarget", event.currentTarget); // у властивості currentTarget зберігається посилання на елемент, на якому ми впіймали подію, тобто елемент, у якого ми викликаємо слухач події. Елемент на якого ми повісили addEventListener
// }

// function onInnerChildClick(event) {
//   //   event.stopPropagation(); // забороняє спливати
//   event.stopImmediatePropagation(); // забороняє спливати і припиняє всі інші слухачі події на цьому самому елементі
//   console.log("onInnerChildClick target", event.target);
//   console.log("onInnerChildClick currentTarget", event.currentTarget);
// }

// // function foo() { // для перевірки методу stopPropagation()
// //   console.log("foo");
// // }

//************** delegation ************/

// const container = document.querySelector(".container");
// [...container.children].forEach((box) => {
//   // children - посилання на всі квадратики, spread зробив з псевдомасива масив
//   box.addEventListener("click", handleClick); // на кожен квадрат повісили слухач подій
// });
// function handleClick(event) {
//   const color = event.currentTarget.dataset.color; // отримуємо колір
//   console.log(color);
// }

//? Для кожного чілдрена приписуємо слухача події, це погано для оптимізації. Тому існує делегування. Реалізуємо за рахунок того, що наша подія спливає. Також на батківському елементі ми можемо дізнатись по якому саме елементі користувач клікнув за допомогою властивості target.

// const container = document.querySelector(".container");

// container.addEventListener("click", handleClick); // слухача події делегували батьківському елементу

// function handleClick(event) {
//   //   console.log(event.currentTarget); // куди б зараз не клікнули,отримуємо посилання на контейнер
//   //   console.log(event.target); // отримали елемент по якому клікнули: по квадраті - квадрат, по контейнеру - контейнер
//   if (!event.target.classList.contains("box")) {
//     // contains перевіряє чи елемент має такий клас
//     return;
//   }
//   //   console.log(event.target); // тепер коли клікаємо між квадратиками, нічого не отримуємо
//   const color = event.target.dataset.color;
//   console.log(color);
// }

/*
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

// const products = [
//   {
//     id: 1,
//     img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
//     name: "Monitor",
//     price: 3000,
//     description: "23-inch monitor with Full HD resolution.",
//   },
//   {
//     id: 2,
//     img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
//     name: "Laptop",
//     price: 20000,
//     description:
//       "Lightweight and powerful laptop with a 15-inch display and SSD.",
//   },
//   {
//     id: 3,
//     img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
//     name: "Smartphone",
//     price: 8000,
//     description: "Equipped with a triple camera and a multi-core processor.",
//   },
//   {
//     id: 4,
//     img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
//     name: "Tablet",
//     price: 12000,
//     description: "10-inch tablet with high performance and a Retina display.",
//   },
// ];

// const container = document.querySelector(".products");

// container.insertAdjacentHTML("beforeend", createMarkup(products)); // Додавання HTML-коду продуктів у контейнер
// container.addEventListener("click", handleClick);

// function createMarkup(arr) {
//   return arr
//     .map(
//       (item) => `<li class="item product-item" data-id="${item.id}">
//     <img src="${item.img}" alt="${item.name}" width="300px">
//     <h2>${item.name}</h2>
//     <p>${item.price}</p>
//   </li>`
//     )
//     .join("");
// }

// function handleClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }
//   const currentProduct = event.target.closest(".product-item"); // event target елеменет по якому клінув, closest знайде найближчий батьківський елемент з таким класом
//   const id = currentProduct.dataset.id; // отримуємо айді ел по якому клікнули
//   const product = products.find((item) => item.id === +id); // з масиву продуктів знаходимо той, який відповідає нашому айдішнік?; використовуємо унарний плюс, щоб перетворити рядок в число +id

//   const instance = basicLightbox.create(`
//     <div class="modal">
//       <img src="${product.img}" alt="${product.name}">
//       <h2>${product.name}</h2>
//       <h3>${product.price} грн</h3>
//       <p>${product.description}</p>
//     </div>
//   `);
//   instance.show();
// }

// приймаємо масив і повертаємо розмітку яка нас цікавить. Ця функція виконує такі дії: Приймає масив об’єктів arr (в даному випадку products). Використовує map, щоб перетворити кожен об'єкт item на HTML-рядок із розміткою для продукту.

//Функція insertAdjacentHTML додає HTML-код у вибраний елемент (container). Метод "beforeend" вставляє HTML-код всередині container, після всіх його дочірніх елементів

//event.target !== event.currentTarget – ця умова перевіряє, чи елемент, на який натиснули (event.target), відрізняється від самого елемента-слухача події (event.currentTarget). Якщо так, то клік був на дочірньому елементі, і ми виходимо з функції, не виконуючи код.
//Якщо клік був безпосередньо на container, то умова не виконується, і функція продовжує роботу, виводячи "ok" у консоль.
