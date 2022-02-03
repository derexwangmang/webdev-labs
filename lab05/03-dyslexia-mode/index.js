/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  // toggle dyslexia support
  const pressed = window.localStorage.getItem('dyslexic') === 'true';
  if (pressed) {
    document.body.classList.add('dsylexia-mode');
  }

  // set the button to pressed if appropriate
  if (pressed) {
    document.getElementById("dyslexia-toggle").setAttribute('aria-pressed', 'true');
  }

  // attach event listener
  document.querySelector("#dyslexia-toggle").addEventListener('click', toggleDyslexiaMode);
}

const toggleDyslexiaMode = ev => {
  // get current state
  let pressed = ev.currentTarget.getAttribute('aria-pressed') === 'true';

  // toggle buton's current state
  ev.currentTarget.setAttribute('aria-pressed', String(!pressed));

  // toggle the .dyslexia-mode class:
  document.body.classList.toggle("dyslexia-mode");

  // persist the setting to local storage
  window.localStorage.setItem("dyslexic", String(!pressed));
}

// invoke initPage function
initPage();