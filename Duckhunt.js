//Variabelen
var duck = document.getElementById('duck');
duck.style.position = 'relative';
var score = 0
var score1 = 0
var timing = setInterval(moveduck, 5000);
var hit = 0
var miss = 0
var count = 0


//Laat de eend bewegen
function moveduck(){
  var top = Math.floor(Math.random() * 750);
  var left = Math.floor(Math.random() * 750);
  var right = Math.floor(Math.random() * 750);
  var bottom = Math.floor(Math.random() * 750);
  duck.style.top = top + 'px';
  duck.style.left = left + 'px';
  duck.style.right = right + 'px';
  duck.style.bottom = bottom + 'px';
  score++
};


//Laat het scoreboard zien
function showBoard(){
  document.getElementById('container').innerHTML =''
}
document.addEventListener("click", function(e){
count++


//Telt de score op
if(score + score1 == 20){
  document.getElementById('score3').innerHTML = 'Game Over!'
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
  score1++
  document.getElementById('score1').innerHTML = score1
  }
})
