// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   },
// ];

// const gallery = document.querySelector(".gallery");
// images.forEach(({ url, alt }) => {
//   const list = document.createElement("li");
//   list.classList.add("gallery-item");

//   const img = document.createElement("img");
//   img.src = url;
//   img.alt = alt;

//   list.append(img);
//   gallery.append(list);
// });

//* Деструктуризація

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38
// console.log(author); // ReferenceError: author is not defined
// console.log(rating); // ReferenceError: rating is not defined

//* Значення за замовчуванням

// const book = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title,
//   coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"

// Якщо така властивість існує в об'єкті, у змінну буде присвоєно її значення.

// В іншому випадку змінній буде присвоєно значення за замовчуванням.

// const book = {
//   title: "The Dream of a Ridiculous Man",
// };

// const {
//   title,
//   coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;

// console.log(title); // "The Dream of a Ridiculous Man"
// console.log(bookCoverImage); // "https://via.placeholder.com/640/480"

// function printUserInfo(user) {
//   const { name, age, hobby } = user;
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
//   name: "Alice",
//   age: 25,
//   hobby: "dancing",
// }); // Name: Alice, Age: 25, Hobby: dancing

// function printUserInfo({ name, age, hobby }) {
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
// 	name: "Alice",
// 	age: 25,
// 	hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing

//* Патерн «Об'єкт параметрів»

// Якщо функція приймає більше 2-3 параметрів, дуже просто заплутатися, в якій послідовності і що передавати.

// В результаті виходить дуже неочевидний код у місці її виклику.

// function doStuffWithBook(title, pages, downloads, rating, isPublic) {
// Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
// І так далі
// }

// ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// Патерн «Об'єкт параметрів» допомагає вирішити цю проблему.

// Він заміняє набір параметрів всього одним — об'єктом з іменованими властивостями.

// function doStuffWithBook(book) {
// Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.pages);
// І так далі
// }

// Таким чином, під час її виклику передаємо один об'єкт з необхідними властивостями.

// ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// Ще одна перевага в тому, що можна деструктуризувати об'єкт у параметрі book.

// Це можна зробити в тілі функції.

// function doStuffWithBook(book) {
//   const { title, pages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(pages);
// }

// Або в сигнатурі (підписі) функції — різниці немає.

// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//   console.log(title);
//   console.log(pages);
// }

//* Глибока деструктуризація

// Найчастіше дані будуть представлені об'єктами з більш ніж одним рівнем вкладеності.
// Так, наприклад, може виглядати об'єкт, що описує користувача соцмережі.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи. Для початку напишемо код деструктуризації властивостей об'єкта користувача.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, stats } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }

// Тепер додамо глибоку деструктуризацію властивостей об'єкта stats.

// Для цього в деструктуризації після імені властивості ставимо двокрапку : та починаємо деструктуризацію об'єкта для цієї властивості.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308

// Під час глибокої деструктуризації також можна змінювати імена змінних і присвоювати значення за замовчуванням, використовуючи вже знайомий тобі синтаксис.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
