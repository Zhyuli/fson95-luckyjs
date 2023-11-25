const bodyEl = document.body;
const checkboxEl = document.querySelector('#theme-switch');
const SWITCH_THEME = 'Switch';

checkboxEl.addEventListener('click', onCheckboxChange);

document.addEventListener('DOMContentLoaded', renderPage);

function onCheckboxChange() {
    if (checkboxEl.checked) {
    changeDarkTheme()
    } else {
        changeLightTheme()
        }
}

function changeDarkTheme() {
    bodyEl.classList.replace('light', 'dark');
    localStorage.setItem(SWITCH_THEME, 'dark')
}

function changeLightTheme() {
    bodyEl.classList.replace('dark', 'light');
    localStorage.setItem(SWITCH_THEME, 'light')
}

function renderPage() {
    const saveData = localStorage.getItem(SWITCH_THEME);
    if (saveData === 'dark') {
        changeDarkTheme()
        checkboxEl.checked = 'true';
    } else {
        changeLightTheme()
    }
}
