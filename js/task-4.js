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

//* Task3 Є форма з полями для введення імені, електронної пошти та коментаря:
//* При натисканні на кнопку "Submit Comment":
//* Якщо всі поля заповнені, створити новий <li> у <ul class="comments-list">, який містить ім'я, email і коментар.
//* Якщо хоча б одне поле пусте, вивести повідомлення про необхідність заповнення всіх полів.
//* Після додавання коментаря очистити форму

//* Task4 Напиши скрипт, який:
//* Збільшує значення лічильника на 1 при натисканні на кнопку +1.
//* Зменшує значення лічильника на 1 при натисканні на кнопку -1.
//* Показує поточне значення лічильника в елементі <span id="value"
