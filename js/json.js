// //* Отримання даних
// Якщо значення є примітивним типом, немає потреби його парсити.
//В іншому випадку, якщо це масив або об'єкт, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object // У змінній savedSettings буде рядок, що представляє об'єкт, тому ми розпарсюємо це значення, і у змінній parsedSettings отримуємо повноцінний об'єкт із властивостями.

//* LocalStorage

// localStorage.clear(); // повністю видаляємо локальне сховище

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, names);

// const value = localStorage.getItem(LS_KEY);
// console.log(value); // не спрацює як ми очікуємо, тут не буде масив.

//* Якщо ми хочемо зберегти складну структуру(обʼєкт, масив) мусимо привести його до рядка JSON.stringify()

// localStorage.setItem(LS_KEY, JSON.stringify(names));

// const value = localStorage.getItem(LS_KEY);
// console.log(value);

//* Щоб зробити зворотню операцію використовуємо JSON.parse()

// console.log(JSON.parse(value)); // перетворив в масив

//* видаляємо за ключем

// localStorage.removeItem(LS_KEY);

//* localStorage не може зберігати функції

//* Кейс: Форма з повідомленням

// const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// });

// Проблема
// Якщо користувач ввів повідомлення в текстове поле і перезавантажив сторінку, не надіславши форму, під час перезавантаження сторінки введене повідомлення пропадає.
//Рішення
//Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення. Для цього використовуємо локальне сховище, щоб зберегти поточне значення текстового поля під час введення.

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value); // використовуємо властивість target для запису поточного значення поля в локальне сховище.
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey); // Під час сабміту форми будемо очищати збережене значення методом removeItem.
//   form.reset();
// });

//evt.target — елемент, який викликав подію. У цьому випадку це поле вводу <textarea>.
//evt.target.value — поточне значення текстового поля (те, що ввів користувач).

//Останнім кроком необхідно додати код читання збереженого повідомлення з локального сховища і встановлення його початковим значенням для текстового поля під час завантаження сторінки.

// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message; // Доступ до елемента <textarea> у формі через його атрибут name="message".
// const localStorageKey = "goit-example-message";

// textarea.value = localStorage.getItem(localStorageKey) ?? ""; //Читає значення з локального сховища за ключем goit-example-message.Якщо в локальному сховищі ще немає збереженого повідомлення (тобто значення null), то буде встановлено порожнє значення.

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
// // Змінюючи значення текстового поля і перезавантажуючи сторінку, можна побачити той самий текст, хоча нічого ще не вводили.

//* Кейс2: Форма з повідомленням2. Цей код реалізує форму з текстовою областю, яка зберігає введений текст у localStorage для збереження даних між перезавантаженнями сторінки.

// const storageKey = "feedback-msg";

// const form = document.querySelector(".feedback-form");
// const textarea = form.querySelector("textarea");

// form.addEventListener("submit", handleSubmit);
// textarea.addEventListener("input", onTextareaInput); // подія input, щоб відпрацьовувала при кожного введенян символа

// populateText();

// function onTextareaInput(event) {
//   const value = event.target.value; // event - обʼєкт події, у target зберігається елеменет, на якому відбувалась подія, оскільки тут це textarea, витягуємо значення за допомогою value
//   localStorage.setItem(storageKey, value); // отриумємо актуальні дані value і записуємо в localStorage
// }

// function populateText() {
//   const message = localStorage.getItem(storageKey);

//   if (message) {
// якщо дані є, то перезаписуємо значення в textarea
//     textarea.value = message;
//   }
// }

// Скасовуємо стандартну поведінку, видаляємо повідомлення зі сховища і очищуємо форму

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log("Відправляю форму");
//   event.currentTarget.reset();
//   localStorage.removeItem(storageKey);
// }

//* Shop. Є масив товарів, потрібно їх відмалювати на сторінці і реалізувати можливість додавати їх до корзини. Корзина буде реалізована іншою сторінкою, куди ми зможемо переходити і дивитись додані товари

const instruments = [
  {
    id: 1,
    img: "https://static.dnipro-m.ua/cache/products/7056/catalog_origin_218728.jpg",
    name: "Шуруповерт",
    price: 150,
    description:
      "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями.",
  },
  {
    id: 3,
    img: "https://static.dnipro-m.ua/cache/products/992/catalog_origin_322784.jpg",
    name: "Шліфмашина",
    price: 1299,
    description:
      "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.",
  },
  {
    id: 4,
    img: "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
    name: "Пила",
    price: 11049,
    description:
      "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.",
  },
  {
    id: 5,
    img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_323420.jpg",
    name: "Рівень",
    price: 897,
    description:
      "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.",
  },
  {
    id: 6,
    img: "https://static.dnipro-m.ua/cache/products/9500/catalog_origin_470179.jpg",
    name: "Тример",
    price: 3699,
    description:
      "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.",
  },
  {
    id: 7,
    img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",
    name: "Мотокоса",
    price: 11049,
    description:
      "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
  },
  {
    id: 8,
    img: "https://static.dnipro-m.ua/cache/products/4980/catalog_origin_183761.jpg",
    name: "Генератор",
    price: 10890,
    description:
      "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.",
  },
];

const LS_KEY = "basket";

const container = document.querySelector(".js-list");
container.insertAdjacentHTML("beforeend", createMarkup(instruments));
container.addEventListener("click", handlerAdd); // вішаємо на контейнер, щоб відловити клік по кнопці

// 1. відмальовуємо масив товарів
function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, description }) => `
        <li class="product-card js-product" data-id="${id}">
            <img src="${img}" alt="${name}" class="product-img">
            <h2 class="product-title">${name}</h2>
            <p class="product-description">${description}</p>
            <p class="product-price">${price} грн</p>
            <button class="product-add-btn js-btn">Add to basket</button>
        </li>
    `
    )
    .join("");
}

// 2. лише якщо клікаємо по кнопці, товар попадає в корзину, якщо не клікаємо нічого не відбувається
function handlerAdd(event) {
  if (!event.target.classList.contains("js-btn")) {
    // якщо немає такого класу припиняє виконання функції
    return;
  }

  const parent = event.target.closest(".js-product"); // цей метод шукає найближчого предка (або сам елемент), який має клас .js-product.
  const productId = Number(parent.dataset.id); // витягуємо рядок тому потрібно перетворити на Number
  const currentProduct = instruments.find(({ id }) => id === productId); // знаходимо не тільки айді продукту, а й весь продукт, весь обʼєкт з товаром

  const products = JSON.parse(localStorage.getItem(LS_KEY)) || []; // якщо зліва буде null то збережи в змінну products порожній масив а якщо не буде null збережи ці дані
  const index = products.findIndex(({ id }) => id === productId); // перевіряємо чи товар по якому клікнули вже є в корзині. Якщо є отримуємо індекст, якщо немає то отримуємо -1

  // 3. Робимо перевірку чи був такий товар в корзині чи ні. Якщо ще не було, то звертаємось до обʼєкта з тим продуктом currentProduct і створюємо в ньому властивість qty і присвоюємо значення 1. І додаємо цей продукт в масив products.

  if (index === -1) {
    currentProduct.qty = 1;
    products.push(currentProduct);
  } else {
    products[index].qty += 1; //якщо продукт є, звертаємо до масива і отримуємо доступ до елемента масиву [index], оскільки цей масив складається з обʼєктів, в цього обʼєкті вже буде властивість qty (ми самі її і створили) і збільшуємо її на 1.
  }

  localStorage.setItem(LS_KEY, JSON.stringify(products)); // зберігаємо оновлений масив з продуктами
}
