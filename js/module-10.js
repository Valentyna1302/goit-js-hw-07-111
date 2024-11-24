//* Кожного разу при натисканні на кнопку Start буде створюватися новий інтервал, якому буде присвоєно новий ідентифікатор.
//* Натискання на кнопку Stop очистить відповідний інтервал за переданим числовим ідентифікатором.
//* Якщо потрібно очистити всі інтервали, можна, наприклад, зберігати ідентифікатори всіх запущених інтервалів у вигляді масиву, перебирати його та послідовно очищати.

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let intervalId = null; // Якщо не оголосити intervalId наперед і спробувати використати її в обробнику кнопки "Stop", виникне помилка ReferenceError, бо змінна intervalId буде недоступна.

// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`Interval ID: intervalId, ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });

//* Напишемо клас Timer, який будезапускати та зупиняти відлік часу

// const startBtn = document.querySelector("button[data-action-start]");
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clockface = document.querySelector(".clockface");

// class Timer {
//   constructor({ onTick }) {
//     // 8. Отримуємо обʼєкт і одразу деструктуризуємо
//     // 5. створюємо конструктор
//     this.isActive = false; //  в обʼєкті timer буде створена властивість
//     this.onTick = onTick; // в обє створюємо властивість onTick, яка буде зсилатись на значення onTick: updateClockfase
//     this.intervalId = null; //

//     this.init(); // щоб відпрацювала записуємо в конструкторі
//   }

//   init() {
//     const time = this.getTimeComponent(0); // створюєио обʼєкт з нулем і щоб відпрацював метод записуємо його в контрукторі. Це для того, щоб на сторінці відображались нулі, а не було пусто
//     this.onTick(time);
//   }

//   // 1. почнемо з того, що потрібно запустити таймер

//   start() {
//     if (this.isActive) {
//       // 6. робимо перевірку чи запущений таймер. Якщо тру припиняємо, якщо ні, то запускається фція start. Ми це робимо, щоб не можна було декілька разів нажимати кнопку старт
//       return;
//     }

//     const startTime = Date.now(); // отримуємо поточний час у вигляді мілісекунд
//     this.isActive = true; // вказуємо, що лічильник тепер працює

//     this.intervalId = setInterval(() => {
//       // кожну секунду буде отримувати нове значення
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime; // будемо рахувати різницю, ск часу пройшло від моменту, коли натиснули на кнопку до поточного моменту
//       const time = this.getTimeComponent(deltaTime); // 4. зберігаємо результат фуції getTimeComponent(time)

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     // зупиняємо таймер
//     clearInterval(this.intervalId);
//     const time = this.getTimeComponent(0);
//     this.onTick(time);
//     this.isActive = false;
//   }

//   getTimeComponent(time) {
//     // 3. створюємо обʼєкт з числами
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) // окпуглюємо
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs }; // повертаємо у вигляді обʼєкта
//   }

//   pad(value) {
//     return String(value).padStart(2, "0");
//   }
// }

// const timer = new Timer({ onTick: updateClockfase }); // 2. Створюємо екземпляр класу. 7.2 сюди передати обʼєкт onTick з властивістю updateClockfase. Цю фцію можемо отримати в конструкторі

// startBtn.addEventListener("click", timer.start.bind(timer)); // добавляємо слухача на кнопку старт і передаємо метод обʼєкта timer.start як колбек фцію. Втрачаємо контекст, тому потрібно вик метод bind
// stopBtn.addEventListener("click", timer.stop.bind(timer)); // то саме з кнопкою стоп

// function updateClockfase({ hours, mins, secs }) {
//   // 7. відмальовуємо дані на сторінці. Щоб передати цю фцію в клас, потрібно ...
//   clockface.textContent = `${hours}:${mins}:${secs}`;
// }

//* - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
//* - Ховаємо через певний час
//* - Ховаємо при кліці
//* - Не забуваємо чистити таймер

// const NOTIFICATION_DELAY = 3000;

// const notification = document.querySelector(".js-alert");
// let timeId;

// notification.addEventListener("click", handleClick);

// showNotification();

// function showNotification() {
//   notification.classList.add("is-visible");

//   timeId = setTimeout(() => {
//     console.log("hidden");

//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function handleClick() {
//   hideNotification();
//   clearTimeout(timeId);
// }

// function hideNotification() {
//   notification.classList.remove("is-visible");
// }

//* Promise

// У змінну promise буде записаний проміс (об'єкт) у стані pending, а через дві секунди, щойно буде викликаний resolve() або reject(), проміс перейде у стан fulfilled або rejected, і ми зможемо його обробити.

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

//* Метод then() приймає два аргументи — дві callback функції, які будуть викликані, коли проміс змінить свій стан. Результат промісу — це значення або помилка, яку функції отримають як аргументи.
//* onResolve(value) — 1-й аргумент методу then(), колбек-функція, яка буде викликана у разі успішного виконання промісу та отримає його результат як аргумент.
//* onReject(error) — 2-й аргумент методу then(), колбек-функція, яка буде викликана у разі виконання промісу з помилкою та отримає її як аргумент.
//* У прикладі нижче callback-функція onResolve буде викликана через дві секунди, якщо проміс успішно виконається, а onReject буде викликана через дві секунди у тому разі, якщо проміс виконається з помилкою.
//* Функція, яка передається першим аргументом у метод then, отримує значення, з яким виконався проміс. Якщо проміс завершився з помилкою, то ця функція не викликається. Помилку можна обробити у колбек-функції, передаючи її другим аргументом у метод then.

// const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise.then(
//   (value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   (error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

//* Метод catch()
//* На практиці в методі then() обробляють тільки успішне виконання промісу. Помилку його виконання обробляють у спеціальному методі catch() для «відловлювання» помилок.
//* Функція, яка передається аргументом у метод catch, виконається після того, як проміс буде виконано з помилкою. Тобто вона призначена для обробки помилок, які виникають під час виконання промісу.

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then((value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch((error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   });

//* Метод finally()
//* Цей метод може бути корисним, якщо необхідно виконати код після того, як проміс буде виконаний незалежно від результату (fulfilled або rejected).
//* Метод finally() дозволяє уникнути дублювання коду в обробниках then() і catch().
//* Функція, яка передається аргументом у метод finally, не отримує жодних значень або помилок від промісу.

// const isSuccess = true;
// const isSuccess = false;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

//* Ланцюжки промісів
//* Метод then() видає новий ПРОМІС, значення або статус помилки якого визначається результатом колбек-функції, переданої до методу then. Завдяки цьому можна створювати ланцюжки асинхронної обробки результатів через послідовні виклики методу then.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// const fetchData = new Promise((resolve, reject) => {
//   const serverResponse = true; // Змінити на false, щоб симулювати не успішну відповідь

//   setTimeout(() => {
//     if (serverResponse) {
//       resolve({ data: "Дані з сервера" }); // Успішна відповідь
//     } else {
//       reject("Сервер недоступний"); // Помилка сервера
//     }
//   }, 2000);
// });

// fetchData
//   .then((response) => {
//     console.log("Отримано:", response.data); // Це відпрацює тільки при успішному виконанні
//     return response.data.toUpperCase();
//   })
//   .then((modifiedData) => {
//     console.log("Модифіковані дані:", modifiedData); // Виводиться, якщо попередній then успішний
//   })
//   .catch((error) => {
//     console.error("Помилка запиту:", error); // Відпрацює, якщо сервер поверне помилку
//   })
//   .finally(() => {
//     console.log("Запит завершено."); // Виконується завжди
//   });

//* Промісифікована функція — це функція, яка призначена для виконання асинхронних операцій і повертає проміс у результаті своєї роботи.

// Для початку напишемо код, який поверне з функції проміс. Для цього створюємо в ній проміс через new Promise і повертаємо його.

// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// Отримуємо проміс у зовнішньому коді та додаємо на нього обробники в методах then і catch.

// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// const userPromise = fetchUserFromServer("Mango"); // результатом виклику fetchUserFromServer("Mango") буде проміс

// проміс обробляємо у методах then() i catch()
// userPromise
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

// Зазвичай обробники додають на результат виклику функції проміс, не записуючи його в зайву змінну.

// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// fetchUserFromServer("Mango") // результатом виклику fetchUserFromServer("Mango") буде проміс
//   .then((user) => console.log(user)) // проміс обробляємо в методі then()
//   .catch((error) => console.error(error)); // проміс обробляємо в методі catch()

// Весь код, пов'язаний із логікою роботи, додаємо всередину функції створення промісу.

// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value"); // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error"); // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

//* Виконаємо рефакторинг коду функції, яка приймає два колбеки та викликає їх за умовою.

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (!guestName) {
//     onError("Guest name must not be empty");
//   } else {
//     onSuccess(`Welcome ${guestName}`);
//   }
// };

// makeGreeting(
//   "Mango",
//   (greeting) => console.log(greeting),
//   (error) => console.error(error)
// );

// Зробимо промісифікацію функції makeGreeting для того, щоб повністю усунути її залежність від зовнішнього коду. Вона повинна просто повертати проміс.

// const makeGreeting = (guestName) => {
//   return new Promise((resolve, reject) => {
//     if (!guestName) {
//       reject("Guest name must not be empty");
//     } else {
//       resolve(`Welcome ${guestName}`);
//     }
//   });
// };

// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));

// А тепер використаємо методи класу Promise, щоб скоротити кількість коду.

// const makeGreeting = (guestName) => {
//   if (!guestName) {
//     return Promise.reject("Guest name must not be empty");
//   } else {
//     return Promise.resolve(`Welcome ${guestName}`);
//   }
// };

// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));

//* Створення промісів із затримкою

const makePromise = (options) => {
  // буде створювати і повертати проміси з різною затримкою виконання. ф-ція приймає обʼєкт з властивстями value, delay, shouldResolve
  // ...
};

makePromise({
  value: "Some value", // значення, яке буде значенням проміса
  delay: 2000, // затримка в мілісекундах, після якої буде виконуватися проміс
  shouldResolve: true, // булеве значення, що вказує, чи повинен проміс виконатися
});

// Доповнимо код функції так, щоб вона повертала проміс.

const makePromise = (options) => {
  return new Promise((resolve, reject) => {
    // ...
  });
};

// Далі зробимо так, щоб проміс виконувався або був відхиленим зі значенням, вказаним у властивості value після затримки в delay мілісекунд. За замовчуванням проміс виконуватиметься успішно, для цього вказуємо значення за замовчуванням true для властивості shouldResolve при деструктуризації.

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};

// Перевіримо роботу функції, створивши кілька промісів з різним часом затримки та значеннями.
makePromise({ value: "A", delay: 1000 })
  .then((value) => console.log(value)) // "A"
  .catch((error) => console.log(error));

makePromise({ value: "B", delay: 3000 })
  .then((value) => console.log(value)) // "B"
  .catch((error) => console.log(error));

makePromise({ value: "C", delay: 2000, shouldResolve: false })
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // "C"

// Отже, це просто перевикористана функція, яка містить у собі код створення промісу із затримкою, щоб не писати цей код щоразу, коли потрібно створити проміс. Без функції цей же код виглядав би ось так:

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Fulfilled A');
//   }, 1000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Fulfilled B');
//   }, 3000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Rejected C');
//   }, 2000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error)); // "Rejected C"
