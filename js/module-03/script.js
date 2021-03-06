"use strict";

//================ task 1 ===============

/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// users.length
// Удалить первый элемент массива
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
// users.pop(users.length -1);
// console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
// users.unshift(`Lux`);
// console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push(`Jay`, `Kiwi`);
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// let userToDeleteIndex = users.indexOf(userToDelete);
// console.log(userToDeleteIndex);
// users.splice(userToDeleteIndex, 1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// let userToInsertIndex = users.indexOf(userToInsertBefore);
// console.log(userToInsertIndex);
// users.splice(userToInsertIndex, 0, `Kong`);
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

//=============================task 2=======

//Задание 1 Вывести числа от 4 до 400 на экран.

// let maxCount = 400;
// let count = 0;
// let countMass = [];

// // while (count.indexOf() < maxCount) {
// while (count < maxCount) {
//     countMass[countMass.push(count +=1)]
// //   count.indexOf(+1);
//   console.log(count);
// //   break;
// }

// console.log(countMass);

//=============================task 3 ===============

//Задание 2 Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

// let maxCount = 13;
// let count = 4;
// while(maxCount >= count) {
//     console.log(count);
//     count +=3
//     // break;
// }

//=============================task 4 ===============

//Задание 3 Вывести числа 654 653 652 до нуля.

// let countStart = 654;
// let count = 0;

// while (countStart >= count) {
//     console.log(countStart);
//     countStart -=1
// //   break;
// }

//=============================task 5 ===============

//Задание 4 Вывести все годы с 1983 до 2017.

// let countStart = 1983;
// // let count = 2017;

// while (countStart <= 2017) {
//     console.log(countStart);
//     countStart +=1
// //   break;
// }

//============================== task 6 ===============

//Задание 8 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num

// let n = 1000;
// let i = 0;
// while(n > 50) {
//     console.log(n);
//    n /= 2;
//    i += 1;

//     // break;
// }
// console.log(`Всего поделило ${i} раз`)

//============================== task 7 =================================

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let mass = [2, 5, 9, 15, 0, 4]
// for(let i = 0; i<mass.length; i+=1){
//         if(mass[i]>3 && mass[i]<10){
//             console.log(mass[i]);
//         }}

//==============================task 8 =================================

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let mass = [2, 5, 9, 15, 0, 4, -1, -2, -3, -4, -5];
// let massPlus = 0;
// console.log(mass.length);
// for (let i = 0; i < mass.length; i += 1) {
//   if (mass[i] > 0) {
//     massPlus += mass[i];
//   }
// }
// console.log(massPlus);

//=========================== tasks 9 =======================

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let mass = [1, 2, 5, 9, 13, 4, 10];
// for (let i = 0; i < mass.length; i += 1) {
//   if (mass[i] == 4) {
//     console.log(`Есть на ${i}`);
//     break;
//   }
// }

//============================ task 10 =====================

// Дан массив числами, например: ['10', '20', '30', '50', '235', '3000']. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let mass = ["10", "20", "30", "50", "235", "3000"];
// for (let i = 0; i < mass.length; i += 1) {
//   if (mass[i][0] == `1` || mass[i][0] == `2` || mass[i][0] == `5`) {
//     console.log(mass[i]);
//   }
// }

//=========================== task 11 =========================

/*
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента].
 *
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// for (let i = 0; i < users.length; i += 1) {
//   console.log(`Номер: ${i + 1} Значение: ${users[i]}`);
// }

//========================== task 12 =========================

/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
// console.log(words);

// Выведи в консоли длину массива words
// console.log(); // 8

// Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// console.log(price); // 80

// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;
// let step = 10;
// let words = message.split(` `);
// words = words.length;
// // console.log(words);

// for (let i = 0; i < words; i += 1) {
//   price += step;
//   //   break;
// }
// console.log(`Цена ${price}`);

//============================= task 13 ============================

/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
  PS: используй бесконечный цикл с прерыванием
*/

// let number;

// do {
//   number = Number(prompt(`Напишите цифру больше 100!`));
//   console.log(number);

//   if (number < 100 && number !== 0) {
//     alert(`Введите число больше 100!`);
//   }
//   else if (number !== NaN && number !== 0) {
//       alert(`Введите число, але`)
//   }
// } while (number);

//============================= task 14 ===============================

/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > num) {
//         matched.push(numbers[i]);
//     }
// }
// console.log(matched); // [17, 14, 14, 32, 18, 26]

//==================== task 15 ===============================================

/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you";
// let words = message.split(` `);
// let wordLength;
// let word;
// let longestWord = 0;

// for (let i = 0; i < words.length; i += 1) {
//   if (words[i].length > longestWord) {
//     longestWord = words[i].length;
//     word = words[i];
//   }
// }
// console.log(word);
//   console.log(longestWord);
// console.log(longestWord); // 'force'

//================== task 16 ===============================================

/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// let min = numbers[0];
// let max = numbers[numbers.length - 1];
// let choice;

// do {
//   choice = Number(prompt(`Число от ${min} до ${max}`));
// //   console.log(choice);
//   if (numbers.includes(choice)) {
//     alert(`Поздравляем, Вы угадали!`);
//   } else if (choice) {
//     alert(`Сожалеем, Вы не угадали!`);
//   }  else if (choice == 0){
//     alert(`Ну и пока`);
//   } else {
//     alert(`Это не число!`);
//   }
// } while (choice !== 0);

//============================= task 17 ===================================

/*
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

//============================= ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =============================

/*
  
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];

//========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

// let userInput;
// const numbers = [];
// let total = 0;

//========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

/*
  
  Напишите скрипт имитирующий авторизацию пользователя.
  
  Есть массив паролей зарегистрированных пользователей passwords. 
  
  При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
  Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  Подсказка: используйте цикл do...while.
  Если был введен пароль который есть в массиве passwords, вывести alert 
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу, 
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
  где n это оставшийся лимит. 
  
  После того как пользователь закрыл alert, запросить пароль снова. 
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
  существующий пароль, не кончатся попытки или пока пользователь 
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
  Если пользователь нажмет Cancel, прекратить выполнение цикла.
*/

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;

// HW

/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid(login), в которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  let len = login.split(``).length;
  return len <= 16 && len >= 4 ? true : false;
  // код
};

const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login);
  // код
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    if (!isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      console.log(`Логин "${login}" успешно добавлен`);
    } else {
      console.log("Такой логин уже используется!");
    }
  } else {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }
};

// Вызовы функции для проверки
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);
