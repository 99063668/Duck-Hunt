//Variabelen
var duck = document.getElementById('duck');
duck.style.position = 'relative';
var score = 0
var score1 = 0
var timing = setInterval(moveduck, 5000);
var hit = 0
var miss = 0
var count = 0
var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var move = 75;
var top;
var left;
duck.style.left='200px';

duck.onclick= moveduck;

centerduck(duck)

function centerduck(center){
  var top= (document.documentElement.clientHeight - center.offsetHeight)
  var left= (document.documentElement - center.offsetWidth)

  duck.style.position-"relative";
  duck.style.top= top+ "px";
  duck.style.left= left+ "px";
}

//Laat de eend bewegen
function moveduck(){
  var direction=Math.floor(Math.random() * directions.length);
  var top=parseInt(duck.style.top, 8);
  var left=parseInt(duck.style.left, 10);

  console.log('Duck left :'+duck.style.left);
  console.log('left+=move : ' + left+move);

  switch(directions[direction]){
    case "N":
      top-=move;
      break;

    case "NE":
      top-=move;
      left+=move;
      break;

    case "E":
      console.log('huidige positie : ' +left);
      left+=move;
      console.log('nieuwe positie : ' +left);
      break;

    case "SE":
      top+=move;
      left-=move;
      break;

    case "S":
    top-=move;
      break;

    case "SW":
      left-=move;
      break;

    case "W":
    left+=move;
      break;

    case "NW":
      top+=move;
      left-=move;
      break;
  }

  duck.style.top= top+ "px";
  duck.style.left= left+ "px";
};



//Laat het scoreboard zien
function showBoard(){
  document.getElementById('container').innerHTML =''
}
document.addEventListener("click", function(e){
count++


//Telt de score op
if(score + score1 >= 20){
  document.getElementById('score3').innerHTML = 'Game Over!'
  showBoard()
}

if(e.target.id === 'duck'){
  hit++
  score++
  moveduck()
  document.getElementById('score').innerHTML = score

}else{
  miss++
  score1++
  document.getElementById('score1').innerHTML = score1
}
})

moveduck()











//Laat de eend in beeld
/*function inscreen(){
  if(moveduck == ){

  }
  else{
    moveduck()
  }
}*/


//Laat de eend stoppen na afloop
/*if(score + score1 == 20){
  moveduck()
  return;
}*/


//scoreboard
/*
if(score > score1){
  document.getElementById('score4').innerHTML = 'You Win!'
  showBoard()
}

if(score < score1){
  document.getElementById('score4').innerHTML = 'You Lose!'
  showBoard()
}*/


//Laat de eend bewegen
/*function moveduck(){
  var top = Math.floor(Math.random() * 750);
  var left = Math.floor(Math.random() * 750);
  var right = Math.floor(Math.random() * 750);
  var bottom = Math.floor(Math.random() * 750);
  duck.style.top = top + 'px';
  duck.style.left = left + 'px';
  duck.style.right = right + 'px';
  duck.style.bottom = bottom + 'px';
  score++
};*/
