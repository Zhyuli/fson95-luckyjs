// Модуль 7 Поширення подій.

//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу module_07.html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const listRef = document.querySelector('.js-accordion-list');

function handleBtnClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    event.target.nextElementSibling.classList.toggle('active');
}

listRef.addEventListener('click', handleBtnClick);

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу module_07.html для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

const ulEl = document.querySelector(".js-pagination");
ulEl.addEventListener('click', updateActivePage);
function updateActivePage(evt) {
    const currentBtn = evt.target;
    console.log(currentBtn);

    if (currentBtn.nodeName !== 'LI') {
        return;
    
    }
    const activeBtn = ulEl.querySelector('.active');
    console.log(activeBtn);

    if (currentBtn.dataset.type === 'page') {
        activeBtn.classList.remove('active');
        currentBtn.classList.add('active');
    }
    if (currentBtn.dataset.type === 'prev') {
        const prevBtnPage = activeBtn.dataset.page - 1;
        const prevBtn = ulEl.querySelector(`[data-page="${prevBtnPage}"]`);
        
        if (prevBtn) {
        activeBtn.classList.remove('active');
        prevBtn.classList.add('active');
        }
        
    }

     if (currentBtn.dataset.type === 'next') {
        const nextBtnPage = Number(activeBtn.dataset.page) + 1;
        const nextBtn = ulEl.querySelector(`[data-page="${nextBtnPage}"]`);
        
        if (nextBtn) {
        activeBtn.classList.remove('active');
        nextBtn.classList.add('active');
        }
        
    }
}
