const displayEl = document.querySelector(".js-counter-value");
const controlsBtnEl = document.querySelector(".js-counter-controls");
const saveBtnEl = document.querySelector(".js-save");

const COUNTER_KEY = "counter";
let currentCounter = Number(displayEl.textContent);
controlsBtnEl.addEventListener("click", onControlsBtnClick);
saveBtnEl.addEventListener("click", onSaveBtnClick);

function onControlsBtnClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    const clickBtn = event.target.dataset.action;
    if (clickBtn === "decrease") {
        currentCounter -= 1;
    }
    if (clickBtn === "reset") {
        currentCounter = 0;
    }
    if (clickBtn === "increase") {
        currentCounter += 1;
    }
    displayEl.textContent = currentCounter;
}

function onSaveBtnClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    const clickBtn = event.target.dataset.action;
    if (clickBtn === "save") {
        localStorage.setItem(COUNTER_KEY, currentCounter);
    }
    if (clickBtn === "clear-save") {
        localStorage.removeItem(COUNTER_KEY);
    }
}

function renderPage() {
    const saveData = localStorage.getItem(COUNTER_KEY);
    if (saveData) {
        currentCounter = Number(saveData);
        displayEl.textContent = currentCounter;
    }
}

renderPage();