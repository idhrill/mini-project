"use strict";

let piggy = document.querySelectorAll('.boxes__box')
let audio = new Audio ('../audio/claz.mp3')
let classesToAdd = [ 'active-1', 'active-2', 'active-3', 'active-4', 'active-5', 'active-6' ];

for (let value of piggy) {
  value.addEventListener('click', () => {
    clearActiveClass();
    value.classList.add(...classesToAdd);
    audio.play()
  });
}

function clearActiveClass () {
  piggy.forEach((value) => value.classList.remove(...classesToAdd))
}
