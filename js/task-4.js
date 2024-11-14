// const loginForm = document.querySelector(".login-form");

// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const form = event.target;
//   const email = form.elements.email.value.trim();
//   const password = form.elements.password.value.trim();
//   if (email === "" || password === "") {
//     alert("All form fields must be filled in");
//   } else {
//     const dataForm = {
//       email,
//       password,
//     };
//     console.log(dataForm);
//     form.reset();
//   }
// });

//* Task1 Напиши скрипт, який дозволить користувачеві додавати завдання до списку. Під час сабміту форми:
//* Якщо інпут порожній, виводь alert з попередженням "Please enter a task".
//* Якщо інпут містить текст, додай новий елемент <li> із цим текстом до списку <ul id="tasks">.
//* Очисть значення інпуту після додавання завдання.

// const form = document.querySelector("#task-form");
// const list = document.querySelector("#tasks");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const text = form.elements.text.value.trim(); // Отримуємо значення поля вводу і обрізаємо зайві пробіли
//   if (text === "") {
//     alert("Please enter a task");
//     return;
//   }

//   const item = document.createElement("li");
//   item.textContent = text;
//   list.append(item); // Додаємо елемент до списку
//   // Очищаємо поле вводу після додавання
//   form.reset();
// }

//* Task2 Напиши скрипт, який створить список фільмів. Кожен елемент списку <li> повинен містити:
//* Назву фільму у заголовку <h3>.
//* Зображення постера <img> з відповідним src та alt.
//* Додай усі елементи до DOM за одну операцію.

// const movies = [
//   {
//     title: "The Shawshank Redemption",
//     poster: "https://link-to-shawshank-poster.jpg",
//   },
//   {
//     title: "The Godfather",
//     poster: "https://link-to-godfather-poster.jpg",
//   },
//   {
//     title: "The Dark Knight",
//     poster: "https://link-to-dark-knight-poster.jpg",
//   },
// ];

// const moviesList = document.querySelector(".movie-list");
// moviesList.insertAdjacentHTML("beforeend", createMarkup(movies));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ title, poster }) => `
//       <li class="movie-item">
//       <h3 class="movie-title">${title}
//       </h3>
//       <img src=${poster} alt=${title}/></li>
// `
//     )
//     .join("");
// }

//* Task3 Є форма з полями для введення імені, електронної пошти та коментаря:
//* При натисканні на кнопку "Submit Comment":
//* Якщо всі поля заповнені, створити новий <li> у <ul class="comments-list">, який містить ім'я, email і коментар.
//* Якщо хоча б одне поле пусте, вивести повідомлення про необхідність заповнення всіх полів.
//* Після додавання коментаря очистити форму

// const commentForm = document.querySelector(".comment-form");
// const commentList = document.querySelector(".comments-list");

// commentForm.addEventListener("submit", createList);

// function createList(event) {
//   event.preventDefault();

//   const { name, email, comment } = commentForm.elements;
//   const fields = [name.value.trim(), email.value.trim(), comment.value.trim()];

//   if (fields.includes("")) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   commentList.insertAdjacentHTML("beforeend", createMarkup(...fields));

//   // Очищаємо форму після додавання коментаря
//   commentForm.reset();
// }

// // Функція для створення HTML-розмітки на основі даних
// function createMarkup(name, email, comment) {
//   return `
//     <li class="comment-item">
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Comment:</strong> ${comment}</p>
//     </li>
//   `;
// }

//* Task4 Напиши скрипт, який:
//* Збільшує значення лічильника на 1 при натисканні на кнопку +1.
//* Зменшує значення лічильника на 1 при натисканні на кнопку -1.
//* Показує поточне значення лічильника в елементі <span id="value"

//* При натисканні на кнопку "SHOW ME", потрібно в консоль
//* вивести значення, яке будемо вводити в інпут.

// const inputText = document.querySelector("#alertInput");
// const inputButton = document.querySelector("#alertButton");

// inputButton.addEventListener("click", handleBtn);

// function handleBtn(event) {
//   console.log(inputText.value);
// }

//* При натисканні на кнопку "Приховати" потрібно введені користувачем
//* символи в інпут відображати у вигляді крапок замість звичайного
//* тексту, а також змінити назву кнопки на "Показати", при повторному
//* натисканні знову будемо відображати символи, а назва кнопки зміниться
//* на "Приховати".

// const input = document.querySelector("#passwordInput");
// const button = document.querySelector("#passwordButton");

// button.addEventListener("click", handleButton);

// function handleButton(event) {
//   if (input.type === "text") {
//     input.type = "password";
//     button.textContent = "Показати";
//   } else {
//     input.type = "text";
//     button.textContent = "Приховати";
//   }
// }

//   console.dir(input); // type: 'text'
// потрібно замінити на type: password - тест прихований

//* Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
//* Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const box = document.querySelector("#box");
// const decreaseBtn = document.querySelector("#decrease");
// const increaseBtn = document.querySelector("#increase");

// decreaseBtn.addEventListener("click", onClickDecrease);
// increaseBtn.addEventListener("click", onClickIncrease);

// console.dir(box);

// function onClickDecrease() {
//   box.style.width = `${box.offsetWidth - 10}px`;
//   box.style.height = `${box.offsetHeight - 10}px`;
// }

// function onClickIncrease() {
//   box.style.width = `${box.offsetWidth + 10}px`;
//   box.style.height = `${box.offsetHeight + 10}px`;
// }

//* При кліку на кнопку "Подвоїти" збільшувати значення в кожному елементі списку в два рази.

// const list = document.querySelectorAll(".listItem");
// const button = document.querySelector("#double");

// button.addEventListener("click", createMarkup);

// function createMarkup(event) {
//   list.forEach((item) => (item.textContent = item.textContent * 2));
// }

//* При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const checkboxForm = document.querySelector(".checkboxForm");
// const checkboxWrapper = document.querySelectorAll(".checkboxWrapper");

// checkboxForm.addEventListener("submit", onformSubmit);

// function onformSubmit(event) {
//   event.preventDefault();
//   const filterList = [...checkboxWrapper].filter(
//     (item) => item.lastElementChild.checked
//   );
//   filterList.forEach((item) => item.remove());
// }

//* Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const input = document.querySelector(".contactsFilter");
// const container = document.querySelector(".contact");
// const list = [...container.children];
// input.addEventListener("input", handleInput);

// function handleInput(event) {
//   const value = input.value.toLowerCase();
//   console.log(value);
//   const filtredItems = list.filter((item) =>
//     item.textContent.toLowerCase().includes(value)
//   );
//   container.innerHTML = "";
//   container.append(...filtredItems);
// }

//* Є масив об'єктів з популярними фільмами і форма пошуку за назвою фільму.
// 1. Зроби так, щоб при першому завантаженні сторінки користувач
// бачив весь перелік фільмів (назву, рік виробництва, рейтинг і країну виробник).
// Для рендеру розмітки використовуємо шаблонні рядки та метод insertAdjacentHTML.
// 2. Реалізуй пошук потрібного фільму за назвою. При кліку на кнопку "Пошук" у
// списку залишаються тільки ті фільми, котрі мають повне або часткове співпадіння
// за назвою фільму.

// const popularMovies = [
//   {
//     title: "Avengers: Endgame",
//     year: 2019,
//     rating: 8.4,
//     country: "USA",
//   },
//   {
//     title: "Parasite",
//     year: 2019,
//     rating: 8.6,
//     country: "South Korea",
//   },
//   {
//     title: "Joker",
//     year: 2019,
//     rating: 8.5,
//     country: "USA",
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     year: 2018,
//     rating: 8.4,
//     country: "USA",
//   },
//   {
//     title: "The Irishman",
//     year: 2019,
//     rating: 7.9,
//     country: "USA",
//   },
//   {
//     title: "Knives Out",
//     year: 2019,
//     rating: 7.9,
//     country: "USA",
//   },
//   {
//     title: "Black Panther",
//     year: 2018,
//     rating: 7.3,
//     country: "USA",
//   },
//   {
//     title: "Mad Max: Fury Road",
//     year: 2015,
//     rating: 8.1,
//     country: "Australia",
//   },
// ];

// const form = document.querySelector("#searchForm");
// const container = document.querySelector("#movieList");
// container.insertAdjacentHTML("beforeend", createMarkup(popularMovies));
// form.addEventListener("submit", filterName);

// function createMarkup(movies) {
//   return movies
//     .map(
//       (item) => `<li>
//   <p>Назва фільму ${item.title}</p>
//   <p>Рік виробництва ${item.year}</p>
//   <p>Рейтинг ${item.rating}</p>
//   <p>Країна виробник ${item.country}</p>
// </li>`
//     )
//     .join("");
// }

// function filterName(event) {
//   event.preventDefault();
//   const value = event.currentTarget.searchInput.value.trim().toLowerCase(); // звертаємось за імʼям інпуту  name="searchInput"
//   console.log(value);
//   const filtredMovies = popularMovies.filter((item) =>
//     item.title.toLowerCase().includes(value)
//   );
//   container.innerHTML = "";

//   container.insertAdjacentHTML("beforeend", createMarkup(filtredMovies));
// }

// Якщо ви хочете зробити код динамічним і незалежним від конкретного масиву, можна передати масив як аргумент у функцію фільтрації та рендеру. Таким чином, код працюватиме з будь-яким масивом, переданим у функцію.

// // HTML-елементи
// const form = document.querySelector("#searchForm");
// const container = document.querySelector("#movieList");

// // Ініціалізація: використовуємо будь-який масив, наприклад, popularMovies
// renderMovies(popularMovies);

// // Слухач для форми
// form.addEventListener("submit", (event) => filterMovies(event, popularMovies));

// // Функція створення розмітки
// function createMarkup(movies) {
//   return movies
//     .map(
//       (item) => `<li>
//         <p>Назва фільму: ${item.title}</p>
//         <p>Рік виробництва: ${item.year}</p>
//         <p>Рейтинг: ${item.rating}</p>
//         <p>Країна виробник: ${item.country}</p>
//       </li>`
//     )
//     .join("");
// }

// // Функція рендеру
// function renderMovies(movies) {
//   container.innerHTML = createMarkup(movies);
// }

// // Функція фільтрації
// function filterMovies(event, movieArray) {
//   event.preventDefault();

//   const searchValue = event.currentTarget.searchInput.value.trim().toLowerCase();
//   const searchField = event.currentTarget.searchField.value;

//   // Фільтруємо динамічний масив
//   const filteredMovies = movieArray.filter((item) =>
//     item[searchField].toString().toLowerCase().includes(searchValue)
//   );

//   // Рендеримо відфільтрований список
//   renderMovies(filteredMovies);
// }
