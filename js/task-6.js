const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object // У змінній savedSettings буде рядок, що представляє об'єкт, тому ми розпарсюємо це значення, і у змінній parsedSettings отримуємо повноцінний об'єкт із властивостями.
