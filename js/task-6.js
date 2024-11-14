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
