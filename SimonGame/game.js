var btnColors = ["blue", "green", "red", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameOn = false;
var level = 0;




if (!gameOn) {
  $(document).on("keypress", function() {
    newSequence();
    $("#level-title").text("Level " + level);
    gameOn = true;
  });

}

function newSequence() {
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);

  var newColor = btnColors[randomNumber];
  gamePattern.push(newColor);

  $("#" + newColor).fadeOut(200).fadeIn(200);
  playSound(newColor);
}

$(".btn").on("click", function() {
  var chosenColor = $(this).attr("id");
  playSound(chosenColor);
  animatePress(chosenColor);
  userClickedPattern.push(chosenColor);
  checkAnswer(userClickedPattern.lastIndexOf(chosenColor));
})


function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100)
}


function clearList(list){
  while (list.length > 0) {
    list.pop();
  } // Fastest
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");
    if (currentLevel == gamePattern.length - 1) {
      clearList(userClickedPattern);
      setTimeout(() => {
        newSequence()
      }, 1000);
    }
  } else {
    gameover();
    startOver();

  }
}
function startOver(){
    gameOn = false;
    level=0;
    clearList(userClickedPattern);
    clearList(gamePattern);
}

function gameover() {
  playSound('wrong');
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200)
  $("#level-title").text("Game Over, Press Any Key to Restart");
}
