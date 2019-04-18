"use strict";

// КАРУСЕЛЬ

// let forward = document.querySelector(`.forward`);
// let back = document.querySelector(`.back`);
// let images = document.querySelectorAll(`.images img`);

// console.log(images);

// // let img = document.querySelectorAll(`.images img`);
// // console.log(img);
// let i = 0;
// forward.onclick = function() {
//   images[i].classList.remove(`showed`);
//   i++;
//   if (i === images.length) {
//     i = 0;
//   }
//   images[i].classList.add(`showed`);
// };

// back.onclick = function() {
//   images[i].classList.remove(`showed`);
//   i = i - 1;
//   if (i < 0) {
//     i = images.length -1;
//   }
//   images[i].classList.add(`showed`);
// };

// ДОП ЗАДАНИЕ №1
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// const a = document.querySelectorAll(`.categories > li`);

// a.forEach(el => {
//   let name = String(el.firstChild.textContent);
//   let count = el.firstElementChild.childElementCount;
//   // console.log(`Категория: ${name}`)
//   // console.log(`Количество вложенных li: ${count}`);

//   console.log(name.split(``));

//   ;
// });

// ДОП ЗАДАНИЕ №2
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const a = document.querySelector(`.list`);

// a.firstElementChild.style.color = `red`;
// a.lastElementChild.style.color = `blue`;

// let btn = document.querySelector(`.btn`);

// btn.onclick = function() {
//   console.log(a.firstElementChild);
// };

// ДОП ЗАДАНИЕ №3

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ["HTML", "CSS", "JavaScript", "React", "Node"];

// let b = elements.reduce((acc, el) => {

//  return acc + `<li>${el}</li>`;
//   // console.log(acc);

// }, '');

// // let b = elements.reduce((acc, el) => acc + `<li>${el}</li>`, ``);

// let a = document.querySelector(`.list`);
// a.innerHTML += b;
// console.log(b);

// ДОП ЗАДАНИЕ №4

// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Two Brown Hen and One Red Rooster"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Macaw Birds"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "2 Lion on Grass Field during Daytime"
//   }
// ];

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const a = document.querySelector(`.gallery`);

// let b = galleryItems.reduce(
//   (acc, el) =>
//     acc + `<li><img src="${el.url}" alt="${el.alt}" class="galleryImg"></li>`,
//   ""
// );

// // let b = galleryItems.reduce(
// //   (acc, el) =>
// //     acc + `<li><img ${el} class="galleryImg"></li>`,
// //   ""
// // );

// a.innerHTML = b;
// console.log(b);

// ДОП ЗАДАНИЕ №5

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let inputs = document.querySelectorAll(`.size-filter > li > label > input`);

// inputs = Array.from(inputs);

// const collectInputData = inp => {
//   return inp.reduce((acc, el) => {
//   //   if (el.checked) {
//   //     acc += `${el.value}, `;
//   //   }
//   //   return acc;
//   // }, ``);

//     if (el.checked) {
//       acc.push(el.value);
//     }
//     return acc;
//   }, []);
// };

// let btn = document.querySelector(`.btn`);
// btn.onclick = function() {
//   console.log(collectInputData(inputs));
// };

// ДОП ЗАДАНИЕ №6

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// let forward = document.querySelector(`.forward`);
// forward.onclick = function() {

// let btn = document.querySelector(`.up`);

// btn.onclick = function() {
//   const task06 = document.querySelector(`.up`);
//   let div = document.createElement(`div`);
//   task06.after(div);
//   div = document.querySelector(`div`);

//   div.className = `movie`;
//   let img = document.createElement(`img`);
//   div.append(img);
//   img.className = `movie__image`;
//   img.setAttribute(
//     `src`,
//     `http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg`
//   );
//   img.setAttribute(`alt`, `movie image`);
//   let div2 = document.createElement(`div`);
//   div.append(div2);
//   div2.className = `movie__body`;
//   let h2 = document.createElement(`h2`);
//   div2.append(h2);
//   h2.className = `movie__title`;
//   h2.textContent = `The Godfather`;
//   let p = document.createElement(`p`);
//   div2.append(p);
//   p.className = `movie__description`;
//   p.textContent = `Spanning the years 1945 to 1955, a chronicle of the fictional
// Italian-American Corleone crime family. When organized crime family
// patriarch, Vito Corleone barely survives an attempt on his life, his
// youngest son, Michael steps in to take care of the would-be killers,
// launching a campaign of bloody revenge.`;
//   let p2 = document.createElement(`p`);
//   div2.append(p2);
//   p2.className = `movie__date`;
//   p2.textContent = `Released: 1972-03-14`;
//   let p3 = document.createElement(`p`);
//   div2.append(p3);
//   p3.className = `movie__rating`;
//   p3.textContent = `Rating: 8.6`;
// };

// ДОП ЗАДАНИЕ №7
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

let root = document.querySelector(`#root`);
const createBoxes = function(num) {
  let div = document.createElement(`div`);
  root.append(div);
  div.className = `container`;
  let a = 0;
  let w = 30;
  let random = function() {
    return Math.floor(Math.random() * 255);
  };

  while (num > a) {
    a++;

    div.innerHTML += `<div style = "background-color: rgb(${random()}, ${random()}, ${random()}); width: ${w}px; height: ${w}px;">${a}</div>`;
    w += 10;
  }
};

createBoxes(9);

// let d  = 1;

// while(d <= 10) {
//   d++
//   console.log(d);
// }
