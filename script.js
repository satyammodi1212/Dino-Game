score = 0;
cross = true;

audio = new Audio('audio.wav');
audiogo = new Audio('gameover.wav');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
        dino.style.transform = 'rotate(360deg)';
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
        dino.style.transform = 'rotateY(180deg)';
    }
}


setInterval(() => {
    gamecontainer = document.querySelector('.gamecontainer');
    btnEl = document.getElementById('btne');
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        gamecontainer.style.background = 'blue';
        // dino.style.display = "none";
        gameOver.innerHTML = "Gamae Over - Reload to Start Play again";
        obstacle.classList.remove('obstacleAni')
        btnEl.style.visibility = "visible";

        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);

    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}

function play() {
    let myvideo = document.getElementById('btn');
    if (obstacle.classList.contains('obstacleAni')) {
        // myvideo.paused();
        obstacle.classList.remove('obstacleAni');
        myvideo.innerText = 'Paly';
        obstacle.style.borderLeft= "5px solid red";
        audio.pause();

    }
    else {
        // myvideo.play();
        obstacle.classList.add('obstacleAni');
        myvideo.innerText = 'Pause';
        obstacle.style.border = "none";
        audio.play();


    }
}
// level update

// function levelupdate(){
//     let level = document.getElementById("level");
//     if(score > 5){
//         level.style.innerHTML ="Level: 2";
//     };
// };

