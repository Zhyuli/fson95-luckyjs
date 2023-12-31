//TODO:=========task-01=================
/**
 * Вам надано кілька масивів з різними фруктами (назва у масиві вказує на те, куди потрібно помістити елементи відносно ul).
 * `Створи` html - елемент списку і `додай` його у розмітку.Попрактикуйся з методами`append`, `prepend`, `after`, `before`
 * заповнивши ними список елементами з масивів.Для зручності створи допоміжну функцію`elementsOfIngridients`,
 * яка повертатиме масив елементів(масив з лішками).
 */

const appendFruitList = ["apple🍎", "banana🍌"];
const prependFruitList = ["grapes🍇", "orange🍊"];
const beforeFruitList = ["strawberry🍓", "cherry🍒"];
const afterFruitList = ["peach🍑", "kiwi🥝"];
const textElement = document.querySelector(".task-title");
const ulElement = document.createElement("ul");

// const liArray = (array) => {  
//     return array.map((element) => { 
//         const liElement = document.createElement("li"); 
//          liElement.textContent = element; 
//         return liElement;  
//     });
    
// }; 
// // ulElement.append(...liArray(beforeFruitList)); 
// // ulElement.prepend(...liArray(afterFruitList));
// ulElement.append(...liArray(appendFruitList)); 
// ulElement.insertAdjacentElement('beforebegin' , ...liArray(beforeFruitList))
// textElement.before(ulElement); 

// textElement.before(ulElement); //after
// console.log(liArray(appendFruitList));
//TODO:=========task-02=================
// 3. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

const words = text.split(/\s+/); // Розбиваємо текст на слова за допомогою роздільників (пробіли, коми, крапки і т.д.)
console.log(words);
const pElement = document.createElement("p");
for (const word of words) {
    if (word.length > 8) { 
        const spanElement = document.createElement('span');
        spanElement.style.backgroundColor = 'yellow';
        spanElement.textContent = word + " "; 
        pElement.appendChild(spanElement); 
    } else { 
        pElement.innerHTML += word + " "; 
    }
}
textElement.after(pElement); 
//TODO:=========task-03=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const BLOCKS = 400;

const divContainerEl = document.createElement('div');
divContainerEl.classList.add('number-container');

const divsArr = []

for (let i = 0; i < BLOCKS; i += 1) {
    const divEl = document.createElement('div');
    divEl.classList.add('number');
    divEl.textContent = randomNumber();

    divEl.textContent % 2 === 0
        ? divEl.classList.add('even')
        : divEl.classList.add('odd')
    
    divsArr.push(divEl)
}

divContainerEl.append(...divsArr)

console.log(divContainerEl);

textElement.after(divContainerEl)



//TODO:=========task-04=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */

// find refs
const inputEl = document.querySelector('.js-username-input');

const formEl = document.querySelector('.js-contact-form')

//TODO:===========1===============
// inputEl.addEventListener('input', (evt) => {
//     const input = evt.target;
//     if (input.value.trim().length > 6) {
//         input.classList.add('success')
//         input.classList.remove('error')

//     } else {
//         input.classList.remove('success')
//         input.classList.add('error')
//     }
// })

//TODO:===========2===============
// inputEl.addEventListener('focus', (evt) => {
//     const input = evt.target;
//     input.value.trim() === ''
//         ? input.style.outline = '3px solid red'
//         : input.style.outline = '3px solid green'
//     console.log(input === ''
// );
//  })


//TODO:===========3===============
// inputEl.addEventListener('blur', (evt) => {
//     const input = evt.target;
//     input.value.trim() === ''
//         ? input.style.outline = '3px solid red'
//         : input.style.outline = '3px solid lime'
//     console.log(input === ''
// );
//  })

//TODO:===========4===============
formEl.addEventListener('submit', onSubmit)
formEl.addEventListener('input', () => {
    spanEl.textContent = inputEl.value || 'Anonymous'
})

const spanEl = document.querySelector('.js-username-output')

function onSubmit(evt) {
    evt.preventDefault();
    const { userName, accept } = evt.target.elements;

    if (!userName.value.trim() || !accept.checked) {
        return alert('Введіть дані')
    } 

    console.log({ userName: userName.value });

    evt.target.reset()

    spanEl.textContent = 'Anonymous'

}

//TODO:=========task-05=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.
