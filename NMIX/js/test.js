var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


ctx.arc(40, 40, 25, 0, 2 * Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();