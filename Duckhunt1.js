//Variabelen
var duck = document.getElementById('duck');
var duck2 = document.getElementById('duck2');
duck.style.position = 'relative';
duck2.style.position = 'relative';
var score = 0
var score1 = 0
var timing = setInterval(moveduck, 5000);
var timing2 = setInterval(moveduck2, 3000);
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");


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


//Laat de eend bewegen (2)
function moveduck2(){
  var top = Math.floor(Math.random() * 750);
  var left = Math.floor(Math.random() * 750);
  var right = Math.floor(Math.random() * 750);
  var bottom = Math.floor(Math.random() * 750);
  duck2.style.top = top + 'px';
  duck2.style.left = left + 'px';
  duck2.style.right = right + 'px';
  duck2.style.bottom = bottom + 'px';
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

if (scoreboard.target.id === 'duck'){
  hit++
  score++
  moveduck()
  document.getElementById('score').innerHTML = score
}

if (scoreboard.target.id === 'duck2'){
  hit++
  score++
  moveduck2()
  document.getElementById('score').innerHTML = score
}
  
else {
  miss++
  score1++
  document.getElementById('score1').innerHTML = score1
}
})




