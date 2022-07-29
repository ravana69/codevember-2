var cx;
var width;
var height;
var count = 0;

function init() {
	var c = document.querySelector('canvas');
	width = c.width = window.innerWidth;
	height = c.height = window.innerHeight;
	cx = c.getContext('2d');
	window.addEventListener('resize', function() {
	  width = c.width = window.innerWidth ;
	  height = c.height = window.innerHeight ;
	}, false);
	cx.globalCompositeOperation = 'lighter';
	window.requestAnimationFrame(go);
}

function go() {
	if (count == 1024) {
		cx.clearRect(0, 0, width, height);
		count = 0;
	}
	var x = Math.random() * width;
	var y = Math.random() * height;
	blump(x, y);
	count++;
	window.requestAnimationFrame(go);
}

function blump(x, y) {
	var baseSide = width * 0.048;
	var variance = Math.random() * (baseSide / 2);
	var r = Math.floor(Math.random() * 128);
	var g = Math.floor(Math.random() * 128);
	var b = Math.floor(Math.random() * 128);
	var a = Math.random();
	cx.fillStyle = 'rgba('+r+','+g+','+b+','+a+')';
	cx.fillRect(x, y, baseSide + variance, baseSide + variance);
}

init();