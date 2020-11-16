var duck = document.getElementById('duck');
var move = document.getElementById('duck');
var position = 0;

duck.style.position = 'relative';

move.onclick = function() {
	position += 75;
  duck.style.left = position + 'px';
}


