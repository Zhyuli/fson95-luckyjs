//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.
const user = {
  age: 4,
  userName: "Andrian",
  userSurname: "Pohrebniak",
  userEmail: "fff@ff",
  getInfo() {
    return this;
  },
  modify(key, newValue) {
    if (key !== "userName" && key !== "userSurname") {
      return "Error";
    }
    if (newValue[0] !== newValue[0].toUpperCase() || newValue.length < 3) {
      return "error"
    }
    return (this[key] = newValue);
  },
};
// console.log(person.getInfo());
// const user = Object.create(person);
// user.name = "Pavlo";
// console.log(user.getInfo());
//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

// console.log(user.modify("userSurname", "Appp"));
// console.log(user.getInfo());
// console.log(user.info());

//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:
function addProperty(key, value) {
  this[key] = value;
}
user.addProperty = addProperty
user.addProperty('friends', [
  {
    firstName: 'Mary',
    lastName: 'Smith',
    age: 32,
    email: 'marysmith@hotmail.com',
  },
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    age: 45,
    email: 'alex.johnson@yahoo.com',
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    age: 19,
    email: 'emilydavis@gmail.com',
  },
]);


// console.log(user.getInfo());

//TODO:=========task-04=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lastName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

const obj = {
  name: 'Bob',
  lastName: 'Lasso',
  age: 50,
  email: 'BodLasso@gmail.com',
};

// console.log(user.getInfo.call(obj));

//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

const showFullName = function (message, number) {
  console.log(`${message} ${this.name} ${this.lastName} ${number}`);
};

// showFullName.call(obj, 'Hello ', 5);
// showFullName.apply(obj, ['Hello ', 5]);


//TODO:=========task-06=================
// Виправте помилки, щоб код працював

const product = {
  price: 5000,

  showPrice() {
    console.log(this.price);
  },
};

function callAction(callback) {
  callback();
}

// callAction(product.showPrice.bind(product));


//* Прототипи та класи
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */
class Calculator {
  constructor() {
    this.results = 0;
  }
  
  number(number) {
    this.results = number;
    return this;
  }
  getResult() {
    return this.results;
  }
  add(number) {
    this.results += number;
    return this;
  }
   subtract(number) {
    this.results-= number;
    return this;
  }
   divide(number) {
    this.results /= number;
    return this;
  }
   multiply(number) {
    this.results *= number;
    return this;
  }
 }

const calculator = new Calculator()

const res = calculator
  .number(10)
  .add(10)
  .divide(2)
  .multiply(4)
  .subtract(5)
  .getResult();

//  console.log(res);

const res2 = calculator
  .number(20)
  .subtract(40)
  .multiply(-8)
  .divide(160)
  .add(20)
  .getResult();

//  console.log(res2);
//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

class Client{
  #login;
  #email;
  constructor(login, email) {
    this.#email = email;
      this.#login = login;
  }
  // get getemail() {
  //   console.log(this.#email);
  // }
  // get getlogin() {
  //   console.log(this.#login);
  // }
  set changeEmail(newEmail) {
    this.#email = newEmail;
  }
  set changeLogin(newLogin) {
    this.#login = newLogin;
  }
  get getClientData() {
    return {
      login: this.#login,
      email: this.#email
    }
  }
}
const client = new Client('mango', 'mango@gmail.com');

// client.changeEmail = 'mango555@gmail.com';
// console.log(client.getClientData.email);
// client.changeLogin = '12345';
// console.log(client.getClientData.login);
// console.log(client);
//! Статичний метод
//TODO:=========task-03=================
/**
 * Напиши клас Notes який управляє колекцією нотаток у властивості items.
 * Нотатка - це об'єкт із властивостями text і priority.
 * Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
 * Додай методи
 * - addNote(note),
 * - removeNote(text)
 * - updatePriority(text, newPriority)
 */

// class Notes {
//   static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     }
//   }
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     return this.items.push(note);
//   }
//   removeNote(noteText) {
//     return this.items = this.items.filter(({ text }) => text !== noteText);
//   }
//   updatePriority({ text, newPriority }) {
//     const index = this.items.findIndex(element => element.text === text);
//     if (index !== -1) {
//       this.items[index].priority = newPriority;
//     }
// }
  
// }
// const note1 = new Notes();

// note1.addNote({ text: 'Note1', priority: Notes.Priority().LOW });
// note1.addNote({ text: 'Note2', priority: Notes.Priority().LOW });
// console.table(note1.items);

// note1.removeNote('Note1');
// console.table(note1.items);

// note1.updatePriority({ text: 'Note2', newPriority: Notes.Priority().HIGHT });
// console.table(note1.items);
