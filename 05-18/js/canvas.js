var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");

var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballColor = 'rgb(235, 104, 91)';
var ballColorG = 'rgb(91,235,104)';
var ballRadius = 50;

var speedX = 5;
var speedY = 3;

var directionDown = true;
var directionRight = true;


function animate() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if (ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0) {
        directionRight = !directionRight;
    }

    if (directionRight) {
        ballX = ballX + speedX;
    } else {
        ballX = ballX - speedX;
    }

    if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        directionDown = !directionDown;
    }
    if (directionDown) {
        ballY = ballY + speedY;
    } else {
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

// SCORE

canvas.addEventListener("click", function (event) {

    var distX = Math.abs(ballX - event.offsetX);
    var distY = Math.abs(ballY - event.offsetY);

    if (distX < ballRadius && distY < ballRadius) {
        document.getElementById("score-title").innerHTML = distX + distY;

    }


})

// BALL COLOR CHANGE GREEN

function makeGreen(color) {
    ballColor = color;
}

// BALL COLOR CHANGE PURPLE

function makePurple(color) {
    ballColor = color;
}

// BALL COLOR CHANGE BLUE

function makeBlue(color) {
    ballColor = color;
}

// BALL COLOR CHANGE YELLOW

function makeYellow(color) {
    ballColor = color;
}