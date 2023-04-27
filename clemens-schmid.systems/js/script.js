let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

const modeSwitch = document.querySelector('.mode-switch');
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const body = document.body;
const footer = document.querySelector('.footer');

// Prüfen, ob der User bereits einen Modus bevorzugt
let isDarkMode = localStorage.getItem('isDarkMode');
if (isDarkMode === null) {
// Standardmäßig ist der helle Modus aktiviert
isDarkMode = false;
localStorage.setItem('isDarkMode', isDarkMode);
} else {
isDarkMode = JSON.parse(isDarkMode);
setMode();
}

// Toggle-Funktion zum Umschalten des Modus
function toggleMode() {
isDarkMode = !isDarkMode;
localStorage.setItem('isDarkMode', isDarkMode);
setMode();
}

// Funktion zum Anpassen des Modus
function setMode() {
    if (isDarkMode) {
      body.classList.add('dark-mode');
      footer.style.backgroundColor = '#333';
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
      // Hintergrundfarbe für .box Klasse hinzufügen
      const boxes = document.querySelectorAll('.box');
      boxes.forEach(box => {
        box.style.backgroundColor = '#333';
      });
    } else {
      body.classList.remove('dark-mode');
      footer.style.backgroundColor = '';
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
      // Hintergrundfarbe für .box Klasse entfernen
      const boxes = document.querySelectorAll('.box');
      boxes.forEach(box => {
        box.style.backgroundColor = '';
      });
    }
  }
  

// Event-Listener zum Umschalten des Modus beim Klicken auf den Button
modeSwitch.addEventListener('click', toggleMode);
