"use strict";

// ДОП ЗАДАЧА №1
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];

// let btnStart = document.querySelector(`[data-action='start']`);
// let btnStop = document.querySelector(`[data-action='stop']`);
// let body = document.querySelector(`body`);

// let a;
// const start = el => {
//   el.target.disabled = true;

//   a = setInterval(function() {
//     let i = Math.floor(Math.random() * 6);
//     body.style.backgroundColor = colors[i];
//   }, 1000);
// };

// const stop = () => {
//   clearInterval(a);
//   btnStart.disabled = false;
// };

// btnStart.addEventListener(`click`, start);
// btnStop.addEventListener(`click`, stop);

// ДОП ЗАДАЧА №2

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   let minute = new Date(time);
//   let a = minute.getMinutes();
//   let b = minute.getSeconds();
//   let c = minute.getMilliseconds();
//   c = Math.floor(c / 100);
//   let c2 = parseInt(minute.getMilliseconds() / 100);
//   let c1 = String(c).split(``);

//   return `${a}:${b}.${c}`;
// }

// console.log(getFormattedTime(1523621052858)); // 04:12.8

// console.log(getFormattedTime(1523621161159)); // 06:01.1

// console.log(getFormattedTime(1523621244239)); // 07:24.2

// ДОП ЗАДАЧА №3
// /*
//   Напишите скрипт, реализующий базовый функционал
//   таймера, запуск отсчета времени и сброс счетчика
//   в исходное состояние.

//   Используйте возможности объекта Date для работы со временем.

//   Создайте функцию startTimer, которая будет запускать
//   отсчет времени с момента ее нажатия, она вызывается
//   при клике на кнопку с классом js-timer-start.

//   Создайте функцию stopTimer, которая будет останавливать
//   счетчик, она вызывается при клике на кнопку с классом js-timer-stop.

//   Используйте вспомогательную функцию updateClockface
//   которая обновляет значение счетчика в интерфейсе.
//   Для составления строки времени в формате xx:xx.x,
//   исользуйте функцию getFormattedTime из задания номер 3.

//   Подсказка: так как нам интересны исключительно сотни миллисекунд,
//       нет смысла выполнять пересчет времени чаще чем каждые 100мс.
// */

// // const timer = {
//   //   startTime: null,
//   //   deltaTime: null,
//   //   id: null
//   // };

//   /*
//   * Вспомогательные функции
//   */

//  /*
//  * Обновляет поле счетчика новым значением при вызове
//  * аргумент time это кол-во миллисекунд
//  */
// function updateClockface(elem, time) {
//   // Используйте функцию getFormattedTime из задания #1
//   // elem.textContent = getFormattedTime(time);
// }

// /*
// * Подсветка активной кнопки
// */

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// let inteval;
// const start = () => {
//   startBtn.disabled = true;
//   startBtn.classList.add(`active`);
//   stopBtn.classList.remove(`active`);
//   let test = Date.now();

//   const options = {
//     minute: "2-digit",
//     second: "2-digit"
//   };
//   inteval = setInterval(() => {
//     let beginsec = new Date(new Date() - test);
//     let a = beginsec.getMinutes();
//     let b = beginsec.getSeconds();
//     let c = beginsec.getMilliseconds();
//     console.log(beginsec.getTime());

//     c = Math.floor(c / 100);
//     let local = beginsec.toLocaleString(`Uk-uk`, options);
//     clockface.innerHTML = `${local}.${c}`;
//     // clockface.innerHTML = `${a}:${b}.${c}`;
//   }, 100);
// };

// const stop = () => {
//   clearInterval(inteval);
//   startBtn.disabled = false;
//   startBtn.classList.remove(`active`);
//   stopBtn.classList.add(`active`);
// };

// startBtn.addEventListener(`click`, start);
// stopBtn.addEventListener(`click`, stop);

// ДОП ЗАДАЧА №4

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 *
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 *
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 *
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 *
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 *
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
 */

// const DELAY = 1000;
// const quantity = 100;

// const processOrder = val => {
//   const promis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(resolve(val <= quantity));
//     }, 500);
//   });
//   return promis;
// };

// // Вызовы функции для проверки
// processOrder(50)
//   .then(console.log(`Ваш заказ готов!`)) // Ваш заказ готов!
//   .catch(console.log(`К сожалению на складе не достаточно товаров!`));

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!

// HW

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const clockface = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const loopBtn = document.querySelector(".js-take-lap");
const resetBtn = document.querySelector(".js-reset");
const ul = document.querySelector(`.js-laps`);

let inteval;
let inteval2;
let count = 0;
let test;
let local;
let c;
let pauseCounter;
let pauseCount = 0;

const timer = test => {
  inteval = setInterval(() => {
    let beginsec = new Date(new Date() - test);
    let a = beginsec.getMinutes();
    let b = beginsec.getSeconds();
    c = beginsec.getMilliseconds();
    c = Math.floor(c / 100);
    local = beginsec.toLocaleString(`Uk-uk`, options);
    clockface.innerHTML = `${local}.${c}`;
    // clockface.innerHTML = `${a}:${b}.${c}`;
  }, 100);
};

const pauseTimer = pauseCounter => {
  inteval2 = setInterval(() => {
    let beginPauseTimer = new Date(new Date() - pauseCounter);
    console.log(`Пауза ${beginPauseTimer.getTime()}`);
    pauseCount = beginPauseTimer.getTime();
  }, 100);
};

const options = {
  minute: "2-digit",
  second: "2-digit"
};

const start = () => {
  count++;

  if (count === 1) {
    console.log(`Count ${count}`);
    startBtn.innerHTML = `Pause`;
    startBtn.classList.add(`active`);
    test = Date.now();
    console.log(`Test ${test}`);
    timer(test);
  }

  if (count === 2) {
    console.log(`Count ${count}`);
    startBtn.innerHTML = `Continue`;
    clearInterval(inteval);
    console.log(`Test ${test}`);
    pauseCounter = Date.now();
    pauseTimer(pauseCounter);
  }

  if (count === 3) {
    test += pauseCount;
    clearInterval(inteval2);
    console.log(`Test ${test}`);
    timer(test);
    console.log(`Count ${count}`);
    startBtn.innerHTML = `Pause`;
    count = count - 2;
  }
};

const reset = () => {
  clearInterval(inteval);
  clearInterval(inteval2);
  startBtn.classList.remove(`active`);
  clockface.innerHTML = `00:00.0`;
  startBtn.innerHTML = `Start`;
  count = 0;
  ul.innerHTML = null;
};

const loop = () => {
  if (count > 0) {
    ul.innerHTML += `<li class="li">
    ${local}.${c}
    </li>`;
  }
};

startBtn.addEventListener(`click`, start);
resetBtn.addEventListener(`click`, reset);
loopBtn.addEventListener(`click`, loop);

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Выполните домашнее задание используя класс с полями и методами.

  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет
  динамически создана вся разметка для секундомера.

  Должна быть возможность создать сколько угодно экземпляров секундоментов
  на странице и все они будут работать независимо.

  К примеру:

  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);

  Где parent* это существующий DOM-узел.
*/
