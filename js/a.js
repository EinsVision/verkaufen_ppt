const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

// rect
context.beginPath();
context.fillRect(50, 50, 100, 100);
context.fillStyle = 'tomato';
context.fillRect(0, 0, 100, 100 );
context.clearRect(80, 80, 50, 50);
context.strokeRect(150, 150, 100, 100);
context.closePath();

// line 
context.beginPath();
context.moveTo(100, 100);
context.lineTo(300,300);
context.stroke();
context.closePath();

// circle
context.beginPath();
context.fillStyle = 'tomato';
context.arc(400, 300, 50, 0, Math.PI*2, false);
context.fill();
context.closePath();

context.beginPath();
context.arc(400, 100, 50, 0, Math.PI*2, false);
context.fill();
context.closePath();
