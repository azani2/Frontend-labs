$(document).ready(function() {
    let canvas = $('#canvas').get(0);
    let ctx = canvas.getContext('2d');

    let playerScore = $('#playerScore');
    let computerScore = $('#computerScore');
    let playerScUpdate = 0;
    let computerScUpdate = 0;

    function tick() {
        updateGame();
        draw();

        window.setTimeout(function() {
            tick();
        }, 1000/60)
    }

    function draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0, 640, 480);
        renderPaddle(player);
        renderPaddle(ai);
        renderBall(ball);
    }

    function paddle(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedModifier = 0;
        this.hasCollidedWith = function(ball) {
            let paddleLeftWall = this.x;
            let paddleRightWall = this.x + this.width;
            let paddleTopWall = this.y;
            let paddleBotWall = this.y + height;

            if (ball.x > paddleLeftWall && paddleRightWall > ball.x && paddleTopWall < ball.y && paddleBotWall > ball.y) {
                return true;
            }
            return false;
        }, 
        this.move = function(keyCode) {
            let nextY = this.y;
            if (keyCode == 40) {
                nextY +=5;
                this.speedModifier = 1.5;
            } else if (keyCode == 38) {
                nextY -=5;
                this.speedModifier = 1.5;
            } else {
                this.speedModifier = 0;
            }
            this.y = nextY;

            if (nextY < 0) {
                nextY = 0;
            }
            if (nextY + this.height == 480) {
                nextY = 480 - this.height;
            }
        }
    }
    let player = new paddle(5,200, 25, 100);
    let ai = new paddle(610, 200, 25, 100);

    function renderPaddle(paddle) {
        ctx.fillStyle = 'white';
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    let ball = {
        x: 320,
        y: 240,
        radius: 10, 
        xSpeed: 2,
        ySpeed: 0,
        reverseX: function() {
            this.xSpeed *= -1;
        },
        reverseY: function() {
            this.ySpeed *= -1;
        },
        isBouncing: function() {
            return ball.ySpeed != 0;
        },
        modifyXSpeedBy: function(modification) {
			modification = this.xSpeed < 0 ? modification * -1 : modification;
			let nextValue = this.xSpeed + modification;
			nextValue = Math.abs(nextValue) > 9 ? 9 : nextValue; 
        }, 
        modifyYSpeedBy: function(modification) {
            modification = this.ySpeed < 0 ? modification * -1 : modification;
            this.ySpeed += modification;
        },
        reset: function() {
            this.x = 320;
            this.y = 240;
            this.xSpeed = 2;
            this.ySpeed = 0;
        }
    }

    function renderBall(ball) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    function updateGame() {
        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;
        let collidPl = player.hasCollidedWith(ball);
        let collidAi = ai.hasCollidedWith(ball);

        if (collidPl || collidAi) {
            ball.reverseX();
            ball.modifyXSpeedBy(0.25);
            let speedUpValue = collidPl ? player.speedModifier : ai.speedModifier;
            ball.modifyYSpeedBy(speedUpValue);
        }

        for (let keyCode in heldDown) {
            player.move(keyCode);
        }

        if (ball.x < 0 || ball.x > 640) {
            if (ball.x < 0) {
                alert('You lose');
                computerScUpdate++;
                computerScore.html(computerScUpdate);
            } else {
                alert('Ypu win');
                playerScUpdate++;
                playerScore.html(playerScUpdate);
            }
            ball.reset();
        } 
        if (ball.y <= 0 || ball.y >= 480) {
            ball.reverseY();
        }

        let  aiMiddle = ai.y + (ai.height / 2);
        if (aiMiddle < ball.y) {
            ai.move(40);
        } 
        if (aiMiddle > ball.y) {
            ai.move(38);
        }
    }

    let heldDown = {};

    $(window).on('keydown', function() {
        heldDown[event.keyCode] = true;
    })

    $(window).on('keyup', function() {
        delete heldDown[event.keyCode];
    })


    tick();
})