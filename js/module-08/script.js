"use strict";

// ДОП ЗАДАНИЕ №1
/*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// let btn = document.querySelector(`.btn`);
// let count = 0;

// const plus = function() {
//   count++;
//   btn.textContent = count;
// };

// btn.addEventListener(`click`, plus);

// ДОП ЗАДАНИЕ №2

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// let first = document.querySelector(`.first`);
// let second = document.querySelector(`.second`);
// let result = document.querySelector(`.result`);
// let plusBtn = document.querySelector(`.plus`);
// let minusBtn = document.querySelector(`.minus`);
// let multiplyBtn = document.querySelector(`.multiply`);
// let divideBtn = document.querySelector(`.divide`);

// const a = function() {
//   return Number(first.value);
// };
// const b = function() {
//   return Number(second.value);
// };

// const plus = function() {
//   let temp = a() + b();
//   result.textContent = `Результат: ${temp}`;
// };

// const minus = function() {
//   let temp = a() - b();
//   result.textContent = `Результат: ${temp}`;
// };

// const multiply = function() {
//   let temp = a() * b();
//   result.textContent = `Результат: ${temp}`;
// };

// const divide = function() {
//   let temp = a() / b();
//   result.textContent = `Результат: ${temp}`;
// };

// plusBtn.addEventListener(`click`, plus);
// minusBtn.addEventListener(`click`, minus);
// multiplyBtn.addEventListener(`click`, multiply);
// divideBtn.addEventListener(`click`, divide);

// ДОП ЗАДАНИЕ №3
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1.

  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// let sub = document.querySelector(`.sub`);
// let add = document.querySelector(`.add`);
// let divideBtn = document.querySelector(`.divide`);
// let multiplyBtn = document.querySelector(`.multiply`);
// let val = document.querySelector(`.value`);

// const minus = function() {
//   return (val.textContent = Number(val.textContent) - 1);
// };

// const plus = function() {
//   return (val.textContent = Number(val.textContent) + 1);
// };

// const multiply = function() {
//   return (val.textContent = Number(val.textContent) * 2);
// };

// const divide = function() {
//   return (val.textContent = Number(val.textContent) / 2);
// };

// sub.addEventListener(`click`, minus);
// add.addEventListener(`click`, plus);
// multiplyBtn.addEventListener(`click`, multiply);
// divideBtn.addEventListener(`click`, divide);

// ДОП ЗАДАНИЕ №4

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Submit" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// let input = document.querySelectorAll(`input`);
// input = Array.from(input);
// let btn = document.querySelector(`.btn`);
// let result = document.querySelector(`.result`);

// const Submit = event => {
//   event.preventDefault();
//   result.textContent = `Result:`;
//   input.forEach(el => (el.checked ? (result.innerHTML += el.value) : ``));
// };

// btn.addEventListener(`click`, Submit);

// ДОП ЗАДАНИЕ №5
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// let ul = document.querySelector(`.images`);

// const show = ev => {
//   alert(ev.target.src);
// };

// ul.addEventListener(`click`, show);

// ДОП ЗАДАНИЕ №6

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой.
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// let ul = document.querySelector(`.list`);
// const del = ev =>
//   ev.target.nodeName === `BUTTON` ? ev.target.parentNode.remove() : ``;

// ul.addEventListener(`click`, del);

// ДОП ЗАДАНИЕ №7
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все
  инпуты проверяли свое содержимое на правильное количество символов.

  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
  - Если введено подходящее количество, то outline инпута становится зеленым,
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// let div = document.querySelector(`.input-list`);

// const check = ev => {
//   // ev.preventDefault();
//   let dataLength = Number(ev.target.dataset.length);
//   let inputVal = ev.target.value.length;

//   if (dataLength >= inputVal) {
//     ev.target.classList.remove("invalid");
//     ev.target.classList.add("valid");
//   } else {
//     ev.target.classList.remove("valid");
//     ev.target.classList.add("invalid");
//   }
// };

// div.addEventListener(`focusout`, check);

// ДОП ЗАДАНИЕ №8
/*
  Напишите скрипт который:

    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно
      отображаться в p.input-value
*/

// let message = document.querySelector(`.message`);
// let input = document.querySelector(`.input`);
// let curent = document.querySelector(`.input-value`);

// const inFocus = () => (message.textContent = `Input is in focus!`);

// const show = () => (curent.textContent = `Current input value: ` + input.value);

// const showNo = () => (message.textContent = ``);

// input.addEventListener(`input`, show);
// input.addEventListener(`focus`, inFocus);
// input.addEventListener(`focusout`, showNo);

// ДОП ЗАДАНИЕ №9
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.

  Напишите скрипт который реализует следующее поведение:

  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal,
    должно появляться. Для этого необходимо убрать класс modal-hidden.
    Для выбора модального модального окна используйте класс js-modal-backdrop

  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// let btn = document.querySelector(`.btn`);
// let div = document.querySelector(`.modal`);
// let btnClose = document.querySelector(`.close-btn`);
// const show = () => div.classList.remove(`modal-hidden`);

// const hide = ev =>
//   // ev.target === div || ev.target === btnClose
//   //   ? div.classList.add(`modal-hidden`)
//   //   : null;
//   void (
//     ev.target === div ||
//     (ev.target === btnClose && div.classList.add(`modal-hidden`))
//   );

// btn.addEventListener(`click`, show);
// btnClose.addEventListener(`click`, hide);
// div.addEventListener(`click`, hide);

// ДОП ЗАДАНИЕ №10

/*
  Ознакомьтесь с HTML и CSS.

  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.

  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.

  При клике по ссылкам не должна перезагружаться страница!
*/

// let ul = document.querySelector(`.menu`);
// let a = document.querySelectorAll(`.menu-link`);

// const doIt = el => {
//   el.preventDefault();
//   // if (el.target !== ul) {
//   a.forEach(elem => elem.classList.remove(`active`));
//   el.target.classList.add(`active`);
// };
// // };

// ul.addEventListener(`click`, doIt);


//================HW=========================



// 🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2


// Реализуйте функционал:

// - image - gallery есть изначально в HTML - разметке как контейнер для компонента.

//       - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
// создается динамически при загрузке страницы.

//       - preview это список маленьких изображений, обратите внимание на атрибут data - fullview,
//   он содержит ссылку на большое изображение.preview и его элементы, также создаются
// динамически, при загрузке страницы.

//       - При клике в элемент preview, необходимо подменить src тега img внутри fullview
// на url из data - атрибута выбраного элемента.

//       - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.

//       - Изображений может быть произвольное количество.

//       - Используйте делегирование для элементов preview.

//       - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

//       - CSS - оформление и имена классов на свой вкус.


// 🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
// размер.Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
// Подберите изображения одинаковых пропорций.


/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: './images/hw/preview-1.jpg', fullview: './images/hw/fullview-1.jpeg', alt: "alt text 1" },
  { preview: './images/hw/preview-2.jpeg', fullview: './images/hw/fullview-2.jpeg', alt: "alt text 2" },
  { preview: './images/hw/preview-3.jpeg', fullview: './images/hw/fullview-3.jpeg', alt: "alt text 3" },
  { preview: './images/hw/preview-4.jpeg', fullview: './images/hw/fullview-4.jpeg', alt: "alt text 4" },
  { preview: './images/hw/preview-5.jpeg', fullview: './images/hw/fullview-5.jpeg', alt: "alt text 5" },
  { preview: './images/hw/preview-6.jpeg', fullview: './images/hw/fullview-6.jpeg', alt: "alt text 6" },
];


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 1
});

/* Далее плагин работает в автономном режиме */
