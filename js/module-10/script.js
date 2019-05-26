"use strict";

// let url = `https://api.myjson.com/bins/k9i31`;
// let url2 = `https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`;
// fetch(url2)
//   .then(response => {
//     if (response.ok) return response.json();

//     throw new Error("Error");
//   })
//   .then(data =>
//     data.forEach(el => {
//       console.log(el.ccy);
//     })
//   )
//   .catch(err => console.error("ERROR!!!", err));

// function getPost(what, post) {
//   return fetch(`https://jsonplaceholder.typicode.com/${what}/${post}`).then(
//     response => response.json()
//   );
// }

// getPost(`albums`, 2).then(data => console.log(`${data.title}, \n ${data.id}`));

// const newObj = {
//   name: `English`,
//   num: `006`,
//   car: {
//     first: `Lada`,
//     second: `Fiat`
//   },
//   kill: false
// };

// const nObj = JSON.stringify(newObj);
// console.log(nObj);

// const url = `https://jsonplaceholder.typicode.com/posts`;

// const settings = {
//   method: `POST`,
//   body: JSON.stringify(newObj),
//   headers: {
//     "Content-Type": "application/json"
//   }
// };

// fetch(url, settings)
//   .then(res => res.json())
//   .then(data => console.log(data));

// const putObj = {
//   title: `Happy title`
// };

// const putSettings = {
//   method: `PUT`,
//   body: JSON.stringify(putObj),
//   headers: {
//     "Content-Type": "application/json"
//   }
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/3`, putSettings)
//   .then(res => res.json())
//   .then(data => console.log(data));

// LOCAL Storage

// const newLoc = {
//   name: `Enlgish`,
//   age: 30
// };

// localStorage.setItem(`login`, "Pasha");
// localStorage.setItem(`test`, JSON.stringify(newLoc));
// // localStorage.removeItem(`login`);

// let result = JSON.parse(localStorage.getItem(`test`));

// console.log(result);

// ДОП ЗАДАНИЯ №1

/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://restcountries.eu/rest/v2/name/";

// form.addEventListener("submit", fetchCountryData);
// /*
//   @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//   evt.preventDefault();
//   return fetch(API_URL + input.value)
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error("Error");
//     })

//     .then(data =>
//       data.forEach(el => {
//         result.innerHTML = null;
//         result.innerHTML += `<p>Country name: ${el.name}</p>`;
//         result.innerHTML += `<p>Capital: ${el.capital}</p>`;
//         result.innerHTML += `<p>Main currency: ${el.currencies.reduce(
//           (acc, el) => (acc = el.name),
//           ``
//         )}</p>`;

//         result.innerHTML += `<p>Flag:  <img src="${
//           el.flag
//         }" alt="" class="img"></p>`;
//       })
//     )
//     .catch(err => {
//       result.innerHTML = `<p>ERROR!</p>`;
//       console.error("ERROR!!!", err);
//     });
// }

// ДОП ЗАДАНИЯ №2

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://api.github.com/users/";

// form.addEventListener("submit", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//   evt.preventDefault();
//   console.log(API_URL + input.value);

//   return fetch(API_URL + input.value)
//     .then(response => response.json())

//     .then(data => {
//       if (data.message) {
//         result.innerHTML = null;
//         result.innerHTML += `<p>ERROR!!</p>`;
//         result.innerHTML += `<p>${data.message}</p>`;
//       } else {
//         result.innerHTML = null;
//         result.innerHTML += `<p>Username : ${data.login}</p>`;
//         result.innerHTML += `<p>Avatar : <img src="${
//           data.avatar_url
//         }" alt="" class="img"></p>`;
//         result.innerHTML += `<p>Bio : ${
//           data.bio ? data.bio : `Не заполненно`
//         }</p>`;
//         result.innerHTML += `<p>Public repos : ${data.public_repos}</p>`;
//       }
//     })

//     .catch(() => {
//       result.innerHTML = `<p>ERROR!</p>`;
//       console.error("ERROR!!!");
//     });
// }

// ДОП ЗАДАНИЕ №3
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");
// const API_URL = "https://jsonplaceholder.typicode.com/users/ ";

// form.addEventListener("submit", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(evt) {
//   evt.preventDefault();
//   return fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//       userTable.innerHTML = null;
//       data.forEach(el => {
//         userTable.innerHTML += `<tr><td>${el.name}</td><td>${
//           el.email
//         }</td><td>${el.address.city}</td><td>${el.website}</td><td>${
//           el.company.name
//         }</td></tr>`;
//       });
//     });
//   // ...
// }

// ДОП ЗАДАНИЕ №4
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://jsonplaceholder.typicode.com/users/";

// form.addEventListener("submit", getUserById);

// function getUserById(evt) {
//   evt.preventDefault();
//   return fetch(API_URL + Number(input.value))
//     .then(response => {
//       if (response.ok) return response.json();

//       throw new Error("123");
//     })

//     .then(data => {
//       result.innerHTML = null;
//       console.log(data);
//       result.innerHTML += `<p>Name : ${data.name}</p>`;
//     })

//     .catch(err => {
//       result.innerHTML = null;
//       result.innerHTML += `Ошибка! Пользователя с таким id не существует`;
//       console.log("321");

//       console.error(err);
//       console.log(err);
//     });
// }

// HW
/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.


  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const wrapper_form = document.querySelectorAll(`.wrapper_form`);
const btnGetAll = document.querySelector(`.getAll`);
const btnReset = document.querySelector(`.wrapper_form > .reset`);
const btnSearch = document.querySelector(`.searchBtn`);
const container = document.querySelector(`.container`);
const result = document.querySelector(`.result`);
const inputSearch = document.querySelector(`.searchById`);

const API_URL = "https://jsonplaceholder.typicode.com/users/";

const magic = ev => {
  ev.preventDefault();
  // console.log(wrapper_form);

  const hideEl = () => {
    wrapper_form.forEach(el => {
      if (!el.classList.contains(`reset`)) {
        el.classList.add(`hidden`);
      }
    });
  };

  const showAll = () => {
    wrapper_form.forEach(el => {
      el.classList.remove(`hidden`);
    });
  };

  const getAll = () => {
    hideEl();
    return fetch(API_URL)
      .then(resp => resp.json())
      .then(data => {
        result.innerHTML = null;
        data.forEach(el => {
          result.innerHTML += `<p> id: ${el.id}</p>`;
          result.innerHTML += `<p> Name: ${el.name}</p>`;
          result.innerHTML += `<p> Website: ${el.website}</p>`;
        });
      });
  };

  const searchById = () => {
    hideEl();
    console.log(inputSearch.value);

    return fetch(API_URL)
      .then(resp => resp.json())
      .then(data => {
        result.innerHTML = null;
        data.forEach(el => {
          if (el.id === Number(inputSearch.value)) {
            result.innerHTML += `<p> id: ${el.id}</p>`;
            result.innerHTML += `<p> Name: ${el.name}</p>`;
            result.innerHTML += `<p> Website: ${el.website}</p>`;
          }
        });
      });
  };

  if (ev.target === btnGetAll) {
    getAll();
  } else if (ev.target === btnReset) {
    showAll();
    result.innerHTML = null;
  } else if (ev.target === btnSearch) {
    searchById();
  }
};

container.addEventListener(`click`, magic);
