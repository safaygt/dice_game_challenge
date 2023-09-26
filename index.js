    var img1 = document.querySelector(".dice .img1");
    var img2 = document.querySelector(".dice .img2");

    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    

    if (num1 === 1) {
      img1.setAttribute("src","./images/dice1.png");
    }
    else if (num1 === 2) {
      img1.setAttribute("src","./images/dice2.png");
    }
    else if (num1 === 3) {
      img1.setAttribute("src","./images/dice3.png");
    }
    else if (num1 === 4) {
      img1.setAttribute("src","./images/dice4.png");
    }
    else if (num1 === 5) {
      img1.setAttribute("src","./images/dice5.png");
    }
    else if (num1 === 6) {
      img1.setAttribute("src","./images/dice6.png");
    }




    if (num2 === 1) {
      img2.setAttribute("src","./images/dice1.png");
    }
    else if (num2 === 2) {
      img2.setAttribute("src","./images/dice2.png");
    }
    else if (num2 === 3) {
      img2.setAttribute("src","./images/dice3.png");
    }
    else if (num2 === 4) {
      img2.setAttribute("src","./images/dice4.png");
    }
    else if (num2 === 5) {
      img2.setAttribute("src","./images/dice5.png");
    }
    else if (num2 === 6) {
      img2.setAttribute("src","./images/dice6.png");
    }



    if (num1 > num2){
      document.querySelector("h1").innerText = "PLAYER 1 WINS!";
    }
    else if (num2 > num1){
      document.querySelector("h1").innerText = "PLAYER 2 WINS!";
    }

    else {
      document.querySelector("h1").innerText = "DRAW!";
    }