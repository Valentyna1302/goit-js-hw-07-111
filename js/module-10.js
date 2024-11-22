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

//* У прикладі нижче callback-функція onResolve буде викликана через дві секунди, якщо проміс успішно виконається, а onReject буде викликана через дві секунди у тому разі, якщо проміс виконається з помилкою.

const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise.then(
  (value) => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  (error) => {
    console.log(error); // "Error! Error passed to reject function"
  }
);
