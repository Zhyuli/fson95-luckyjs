const monthNameEl = document.querySelector('.js-month');
const dayNameEl = document.querySelector('.js-day');
const dayNumEl = document.querySelector('.js-day-number');
const yearEl = document.querySelector('.js-year');

const date = new Date();
console.log(date.getDay());

const month = date.toLocaleDateString("uk-UA", { month: "long" });
monthNameEl.textContent = month;

const day = date.toLocaleDateString("uk-UA", { weekday: "long" });
dayNameEl.textContent = day;

const numb = date.toLocaleDateString("uk-UA", { day: "numeric" });
dayNumEl.textContent = numb;

const year = date.toLocaleDateString("uk-UA", { year: "numeric" });
yearEl.textContent = year;