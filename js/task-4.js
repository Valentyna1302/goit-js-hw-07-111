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
