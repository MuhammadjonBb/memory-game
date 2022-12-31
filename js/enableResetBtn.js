import { createApp } from "./main.js";

export default function enableResetBtn(successCards, container) {
  const resetBtn = document.querySelector('.reset-btn');
  resetBtn.classList.add('display');
  successCards.splice(0);

  resetBtn.addEventListener('click', () => {
    resetBtn.classList.remove('display');
    container.innerHTML = '';

    createApp()
  });
}
