var duck = document.getElementById('duck');
var move = document.getElementById('duck');
var position = 0;


duck.style.position = 'relative';

move.onclick = function fly(direction){
    position += 75;

    duck.style.left = position + 'px';
    duck.style.right = position + 'px';
    duck.style.top = position + 'px';
    duck.style.bottom = position + 'px';
}




var object = document.getElementById('duck');

object.onclick=function(){
  var x = Math.floor(Math.random()*75);
  var y = Math.floor(Math.random()*75);
  var z = Math.floor(Math.random()*75);
  var r = Math.floor(Math.random()*75);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
  object.style.right = z + 'px';
  object.style.bottom = r + 'px';
};
    

    
