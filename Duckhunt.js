var duck = document.getElementById('duck');
duck.style.position = 'relative';
var score = 0
var timing = setInterval(moveduck, 5000);
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");


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
  }else {
  score--
  document.getElementById('score').innerHTML = score
  }
})