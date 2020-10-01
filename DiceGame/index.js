var randomNumber1= (Math.random()*6);
randomNumber1=Math.floor(randomNumber1);

switch (randomNumber1) {
  case 0:
    document.getElementsByClassName("img1")[0].src="images/dice1.png";
    break;
  case 1:
    document.getElementsByClassName("img1")[0].src="images/dice2.png";
    break;
  case 2:
    document.getElementsByClassName("img1")[0].src="images/dice3.png"
    break;
  case 3:
    document.getElementsByClassName("img1")[0].src="images/dice4.png"
    break;
  case 4:
    document.getElementsByClassName("img1")[0].src="images/dice5.png"
    break;
  case 5:
    document.getElementsByClassName("img1")[0].src="images/dice6.png"
    break;
  default:
    document.getElementsByClassName("img1")[0].src="images/dice6.png"
    break;
}

var randomNumber2= (Math.random()*6);
randomNumber2=Math.floor(randomNumber2);

switch (randomNumber2) {
  case 0:
    document.getElementsByClassName("img2")[0].src="images/dice1.png";
    break;
  case 1:
    document.getElementsByClassName("img2")[0].src="images/dice2.png";
    break;
  case 2:
    document.getElementsByClassName("img2")[0].src="images/dice3.png"
    break;
  case 3:
    document.getElementsByClassName("img2")[0].src="images/dice4.png"
    break;
  case 4:
    document.getElementsByClassName("img2")[0].src="images/dice5.png"
    break;
  case 5:
    document.getElementsByClassName("img2")[0].src="images/dice6.png"
    break;
  default:
    document.getElementsByClassName("img2")[0].src="images/dice6.png"
    break;
}


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 Won!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player2 Won!";
}
else{
  document.querySelector("h1").innerHTML="It is a Tie!";
}
