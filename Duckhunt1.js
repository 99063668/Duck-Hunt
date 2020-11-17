var duck = document.getElementById('duck');
var duck2 = document.getElementById('duck2');
duck.style.position = 'relative';
duck2.style.position = 'relative';
var score = 0
var timing2 = setInterval(movedog, 8000);
var timing = setInterval(moveduck, 5000);
var timing2 = setInterval(moveduck2, 3000);
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

function movedog(){
  var move=document.getElementById('dogwalk').offsetTop;
  move= move +1;
  document.getElementById('dogwalk').style.left= move + "px";
};


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
  score++
};

function moveduck2() {
    var top = Math.floor(Math.random() * 750);
    var left = Math.floor(Math.random() * 750);
    var right = Math.floor(Math.random() * 750);
    var bottom = Math.floor(Math.random() * 750);
    var vertical = Math.floor(Math.random() * 750);
    var horizontal = Math.floor(Math.random() * 750);
    duck2.style.top = top + 'px';
    duck2.style.left = left + 'px';
    duck2.style.right = right + 'px';
    duck2.style.bottom = bottom + 'px';
    duck2.style.vertical = vertical + 'px';
    duck2.style.horizontal = horizontal + 'px';
    score++
  };

document.addEventListener("click", function(scoreboard){
if(score === -1){
    score = 0
    document.getElementById('score').innerHTML = 'Game Over!'
    alert("Game Over!")
    console.log('Game Over!')
  }
if(score === 20){
    document.getElementById('score').innerHTML = 'You Win!'
    alert("You Win!")
    console.log('You Win!')
  }
  if (scoreboard.target.id === 'duck'){
    moveduck()
     document.getElementById('score').innerHTML = score
     
  }
  if (scoreboard.target.id === 'duck2'){
    moveduck2()
     document.getElementById('score').innerHTML = score
  }
  else {
  score--
  document.getElementById('score').innerHTML = score
  }
})