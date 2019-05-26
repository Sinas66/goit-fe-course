"use strict";

// const about = [
//   {
//     img: `https://www.indiewire.com/wp-content/uploads/2018/10/Johnny-English-1.jpg?w=780`,
//     name: `Johny`,
//     about: `English`,
//     work: `Cleaner`,
//     done: true
//   },
//   {
//     img: `https://www.sideshow.com/product-asset/9032461/feature`,
//     name: `TEST`,
//     about: `TEST`,
//     // work: `Batmam`,
//     done: true
//   },
//   {
//     img: `https://cdn.vox-cdn.com/thumbor/3LI5EGLK1lbgApqkw06rr_x2h5U=/0x0:655x365/1200x800/filters:focal(249x23:353x127)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg`,
//     name: `Spiderman`,
//     about: `Spiderman`,
//     work: `Spiderman`,
//     done: false
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   },
//   {
//     img: `https://im2.kommersant.ru/ISSUES.PHOTO/WEEKEND_ONLINE/2018/06/12/spw20_p15-06.png`,
//     name: `Superman`,
//     about: `Superman`,
//     work: `Superman`,
//     done: true
//   }
// ];

// const input = document.querySelector(`.input`);
// const btn = document.querySelector(`.btn`);
// const list = document.querySelector(`.list`);
// const box = document.querySelector(`#box`).innerHTML.trim();

// let a = box.split(``);
// console.log(box);

// console.log(a);

// list.insertAdjacentHTML("afterbegin", res);
// console.log(res);

// about.forEach(el => {
//   list.innerHTML = `<div class = "el">${compik(el)}</div>`;
// });

// list.innerHTML = `<div class = "el">${compik(about)}</div>`;

// about.forEach(el => {
//   list.insertAdjacentHTML("beforebegin", compik(el));
// });

// console.log(newb);

// const compik = Handlebars.compile(box);
// const res = compik(about[0]);

// const doSome = ev => {
//   ev.preventDefault();
//   let num = input.value;
//   const newAbout = about.splice(0, num);

//   const res2 = compik(newAbout);

//   list.insertAdjacentHTML("beforebegin", res2);
// };

// btn.addEventListener(`click`, doSome);

// doSome(3);

// list.insertAdjacentHTML("afterbegin", res);

// list.insertAdjacentHTML("beforebegin", compik(about));

// ДОП ЗАДАНИЕ №1

/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон элемента списка указаного на вкладке HTML.
 * Отрендери список в DOM по данным из массива products.
 */

// const products = [
//   { name: "Apples", quantity: 50 },
//   { name: "Grapes", quantity: 44 },
//   { name: "Cheese", quantity: 128 },
//   { name: "Milk", quantity: 93 }
// ];

// const ul = document.querySelector(`.products`);
// const box = document.querySelector(`#box`).innerHTML.trim();

// const compik = Handlebars.compile(box);
// const res = compik(products);

// ul.insertAdjacentHTML(`afterbegin`, res);

// ДОП ЗАДАНИЕ №2
/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон поста указаного на вкладке HTML.
 * Отрендери список постов в DOM по данным из массива posts.
 *
 * Если в объекте поле favourite=true, в посте должна быть
 * разметка иконки избранного поста, в противном случае,
 * разметки иконки быть не должно.
 */

// const posts = [
//   {
//     title: "Phasellus volutpat metus",
//     text:
//       "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
//     favourite: true
//   },
//   {
//     title: "Nulla consequat massa",
//     text:
//       "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     favourite: false
//   },
//   {
//     title: "In enim justo",
//     text:
//       "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
//     favourite: true
//   },
//   {
//     title: "Vestibulum ante ipsum",
//     text:
//       "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.",
//     favourite: false
//   }
// ];

// const box = document.querySelector(`#box`).innerHTML.trim();
// const main = document.querySelector(`.posts`);

// const compik = Handlebars.compile(box);
// const res = compik(posts);

// main.insertAdjacentHTML(`beforebegin`, res);

// ДОП ЗАДАНИЕ №3
/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");
const container = document.querySelector(`.container`);
const box = document.getElementById(`box`).innerHTML.trim();
const ulResust = document.querySelector(`.results`);

// function validate(evt) {
//   evt.preventDefault();
// }

// submitBtn.addEventListener("click", validate);

let result = false;
let result2 = false;

const inputCheck = ev => {
  if (ev.target === firstname || ev.target === lastname) {
    const inputValue = ev.target.value;
    const find = /\d/;
    let a = inputValue.split(` `).length;

    if (a <= 2) {
      if (!find.test(inputValue) && inputValue !== ``) {
        ev.target.style.border = `3px green solid`;
        ev.target === firstname ? (result = true) : (result2 = true);
      } else {
        ev.target.style.border = `3px red solid`;
        ev.target === firstname ? (result = false) : (result2 = false);
      }
    } else {
      ev.target.style.border = `3px red solid`;
      ev.target === firstname ? (result = false) : (result2 = false);
      result = false;
    }
  }
};

const mass = [];
const check = ev => {
  ev.preventDefault();

  inputCheck(ev);

  if (ev.target === submitBtn && result && result2) {
    const obj = {
      name: firstname.value,
      lastName: lastname.value
    };
    const compik = Handlebars.compile(box);
    const res = compik(obj);
    ulResust.insertAdjacentHTML(`afterbegin`, res);
    mass.push(obj);
    console.log(mass);
  }
};

const focusMagic = ev => {
  ev.preventDefault();
  // inputCheck(ev);

  if (ev.target === firstname || ev.target === lastname) {
    result ? (firstname.style = null) : null;
    result2 ? (lastname.style = null) : null;
    // ev.target.style.borderBottom = `1px solid #9e9e9e`;
  }
};

container.addEventListener(`input`, check);
container.addEventListener(`click`, check);
container.addEventListener(`focusout`, focusMagic);
