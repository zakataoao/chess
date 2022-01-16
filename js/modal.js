let settings = document.querySelector('.settings');
let settingsBtn = document.querySelector('.header__sett');
let closeBtn = document.querySelector('.close-wrapp');
closeBtn.addEventListener('click', function() {
  settings.classList.toggle('active');
})
settingsBtn.addEventListener('click', function() {
  settings.classList.toggle('active');
})