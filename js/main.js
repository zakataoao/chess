let firstBtn = document.querySelector('.firstBtn');
let stopBtn = document.querySelector('.stopBtn');
let secondBtn = document.querySelector('.secondBtn');
let musicBtn = document.querySelector('.music');
let toggleMenu = document.querySelector('.menuBtn');
let closeMusicBtn = document.querySelector('.settings__closeMusicBtn');
let header = document.querySelectorAll('.header');
let music = new Audio('/audio/behovn.mp3');
let audio = new Audio('/audio/song.mp3');
let click = new Audio('/audio/click.mp3');
let firstIsPaused = false;
let secondIsPaused = false;
let xF = 300;
let xS = 300;
let settBtn = document.querySelector('.settings__saveBtn');
//toggle menu
header.forEach(function(item){
  toggleMenu.addEventListener('click', function() {
    item.classList.toggle('hide');
  })
})
//close/open musicBtn
closeMusicBtn.addEventListener('click', function(){
  musicBtn.classList.toggle('hide');
  let textClose = closeMusicBtn.innerHTML;
  if(textClose == 'Убрать музыку'){
    closeMusicBtn.innerHTML = 'Вернуть музыку';
  } else {
    closeMusicBtn.innerHTML = 'Убрать музыку';
  }
  settings.classList.toggle('active');
})
//toggle musicBtn
let toggleF = document.querySelector('.toggle-f');
let toggleS = document.querySelector('.toggle-s');
toggleF.addEventListener('click', function(){
  toggleF.classList.toggle('hide');
  toggleS.classList.toggle('hide');
  music.play();
})
toggleS.addEventListener('click', function(){
  toggleF.classList.toggle('hide');
  toggleS.classList.toggle('hide');
  music.pause();
})
//toggle stopBtn
let toggleFo = document.querySelector('.toggle-fo');
let toggleT = document.querySelector('.toggle-t');
toggleFo.addEventListener('click', function(){
  toggleFo.classList.toggle('hide');
  toggleT.classList.toggle('hide');
  firstIsPaused = false;
  secondIsPaused = false;
})
toggleT.addEventListener('click', function(){
  toggleFo.classList.toggle('hide');
  toggleT.classList.toggle('hide');
  firstIsPaused = true;
  secondIsPaused = false;
})
//settings 
settBtn.addEventListener('click', function(){
  var value = document.querySelector('.settings__sec').value;
  if(value <= 0){
    value = 'ERROR';
  }
  xF = value;
  xS = value;
  firstBtn.innerHTML = xF + ' Секунд';
  secondBtn.innerHTML = xS + ' Секунд';
  firstIsPaused = false;
  secondIsPaused = false;
  settings.classList.toggle('active');
})
//main timer
firstBtn.addEventListener('click', function(){
  click.play();
  firstIsPaused = false;
  secondIsPaused = true;
})
secondBtn.addEventListener('click', function(){
  click.play();
  secondIsPaused = false;
  firstIsPaused = true;
})
function countsF(){
  if(firstIsPaused){
    firstBtn.innerHTML = xF + ' Секунд';
    if(xF == 0){
      clearInterval(timerF);
      audio.play();
    }
    xF = xF - 1;
  }
}
function countsS(){
  if(secondIsPaused){
    secondBtn.innerHTML = xS + ' Секунд';
    if(xS == 0){
      clearInterval(timerS);
      audio.play();
    }
    xS = xS - 1;
  }
}
timerF = window.setInterval(countsF, 1000);
timerS = window.setInterval(countsS, 1000);