//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 9;
// if (a === 10) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 35;
// if (min >= 0 && min < 15) {
//     console.log(1);
// } else if (min >= 15 && min < 30) {
//     console.log(2);
// } else if (min >= 30 && min < 45) {
//     console.log(3);
// } else if (min >= 45 && min < 60) {
//     console.log(4);
// } else {
//     console.log("error");
// }

//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const min = 5;
// switch (min) {
//     case 1:
//         console.log("winter");
//         break;
//   case 2:
//         console.log("spring");
//         break;
//       case 3:
//         console.log("summer");
//         break;
//       case 4:
//         console.log("autumn");
//         break;

//     default:
//         console.log("error");
//         break;
// }

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50
// let i = 0;
// while (i <= 50) {
//     console.log(i);
//     i += 1;
// }
//TODO: 5 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// const min = 0;
// const max = 100;
// let sum = 0;
// for (let i = max; i > min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log("Парні числа: ", i);
//       sum += i;
//   }
// }
// console.log("Сума усіх парних чисел: ", sum);
// let sum1 = 0
// const numbers = [1, 2, 4, 5, 6];
// for (const number of numbers) {
//     sum1 += number;
// }
// console.log("Сума всіх чисел: ",  sum1);

//TODO: 7 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = 'abcde';
// if (string.startsWith('a')) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// string.startsWith('a') ? console.log(true) : console.log(false)

//TODO: 8 ===================================
// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']

// function fillArray(length, value) {
//     let newArray = []
//     for (let i = 0; i < length; i += 1) {
//         newArray.push(value);
//     }
//     return newArray
// }
// console.log(fillArray(10, 125));

//TODO: 9 ===================================
// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN
// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function clearArray(array) {
//   const newArray = [];
//   for (const element of array) {
//     if (element) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }
// console.log(clearArray(array));

//TODO:  ===================================
// Перевірити два масиву і дізнатися, чи вони рівні

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];
// const arr9 = [1, 2, 3, 4];
// const arr10 = [1, 2, 3, 4];
// function checkArray(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const element of arr1) {
//     if (!arr2.includes(element)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkArray(arr9, arr10));

