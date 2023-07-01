let score = 0;
let cross = true;
document.onkeydown = function (e) {
  if (e.keyCode == 38) {
    let dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.keyCode == 39) {
    let dino = document.querySelector(".dino");
    let dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    let dino = document.querySelector(".dino");
    let dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  let dino = document.querySelector(".dino");
  let gameOver = document.querySelector(".gameOver");
  let obstacle = document.querySelector(".obstacle");

  let dx = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("left")
  );
  let dy = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("top")
  );

  let ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  let oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  let offsetX = Math.abs(dx - ox);
  let offsetY = Math.abs(dy - oy);
  console.log(offsetX, offsetY);
  if (offsetX < 73 && offsetY < 52) {

    gameOver.style.visibility = "visible";
    obstacle.classList.remove("obstacleAni");

  } else if (offsetX < 145 && cross) {
    
    score++;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);

    setTimeout(() => {
      let aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );

      let newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 10);

function updateScore(score) {
  scoreCont.innerHTML = "Your Score: " + score;
}
