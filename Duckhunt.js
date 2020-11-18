var duck = document.getElementById('duck');
duck.style.position = 'relative';
var score = 0
var timing2 = setInterval(movedog, 8000);
var timing = setInterval(moveduck, 5000);


function movedog(){
  var move=document.getElementById('dogwalk').offsetTop;
  move= move +1;
  document.getElementById('dogwalk').style.left= move + "px";
};


function moveduck() {
  var top = Math.floor(Math.random() * Math.min(750, window.innerHeight));;
  var left = Math.floor(Math.random() * Math.min(750, window.innerWidth));
  var right = Math.floor(Math.random() * Math.min(750, window.innerWidth));
  var bottom = Math.floor(Math.random() * Math.min(750, window.innerHeight));
  duck.style.top = top + 'px';
  duck.style.left = left + 'px';
  duck.style.right = right + 'px';
  duck.style.bottom = bottom + 'px';
  score++
};

var duck = document.getElementById('duck');
duck.style.position = 'relative';
var score = 0
var miss = 0
var hit = 0
var count = 0
var timing = setInterval(moveduck, 5000);


function moveduck() {
  var top = Math.floor(Math.random() * 750);
  var left = Math.floor(Math.random() * 750);
  var right = Math.floor(Math.random() * 750);
  var bottom = Math.floor(Math.random() * 750);
  var vertical = Math.floor(Math.random() * 750);
  var horizontal = Math.floor(Math.random() * 750);
  duck.style.top = top + 'px';
  duck.style.left = left + 'px';
  duck.style.right = right + 'px';
  duck.style.bottom = bottom + 'px';
  duck.style.vertical = vertical + 'px';
  duck.style.horizontal = horizontal + 'px';
};

function showBoard(){
  document.getElementById('container').innerHTML =''
  document.getElementById('container').innerHTML += `<div>shot fired: ${count}, hits/missed: ${hit}/${miss}, accuracy: ${(hit/count * 100).toFixed(2)}%, Total: ${score}</div>`
}

document.addEventListener("click", function(e){
count++
if(score === -1){
  score = 0
  document.getElementById('score').innerHTML = 'Game over!'
  console.log('game over')
  showBoard()
  }

if(score >= 20){
  document.getElementById('score').innerHTML = 'You Win!'
  console.log('Win')
  showBoard()
  }

if (e.target.id === 'duck'){
  hit++
  score++
  moveduck()
  document.getElementById('score').innerHTML = score

}else {
  miss++
  score--
  document.getElementById('score').innerHTML = score
  }
})
