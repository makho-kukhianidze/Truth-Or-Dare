// Variable block - Start.
var playerOne = document.getElementById('playerOne').value;
var playerTwo = document.getElementById('playerTwo').value;
var playerThree = document.getElementById('playerThree').value;
var playerFour = document.getElementById('playerFour').value;
var playerNameEnterBtn = document.getElementById('playerNameEnterBtn');
var btn = document.getElementById('btn');
var box = document.getElementById('box');
var menu = document.getElementById('menu');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var playerOnePoint = 0;
var playerTwoPoint = 0;
var playerThreePoint = 0;
var playerFourPoint = 0;
var coins = 0;
var gameMusic = new Audio();
gameMusic.src = "assets/sounds/1.mp3";
var questionMusic = new Audio();
questionMusic.src = "assets/sounds/2.wav";
var clickBtn = new Audio();
clickBtn.src = "assets/sounds/3.wav";
// Variable block - End.

// Players names block - Start.
function playerNameEnter() {
    playerOne = document.getElementById('playerOne').value;
    playerTwo = document.getElementById('playerTwo').value;
    playerThree = document.getElementById('playerThree').value;
    playerFour = document.getElementById('playerFour').value;
    document.getElementById('playerOne').style.display = 'none';
    document.getElementById('playerTwo').style.display = 'none';
    document.getElementById('playerThree').style.display = 'none';
    document.getElementById('playerFour').style.display = 'none';
    document.getElementById('one').style.display = 'block';
    document.getElementById('two').style.display = 'block';
    document.getElementById('three').style.display = 'block';
    document.getElementById('four').style.display = 'block';
    playerNameEnterBtn = document.getElementById('playerNameEnterBtn').style.display = 'none';
    one.innerHTML = playerOne;
    two.innerHTML = playerTwo;
    three.innerHTML = playerThree;
    four.innerHTML = playerFour;
    btn.style.display = "block";
    box.style.margin = "6px";
    box.style.padding = "10px";
    menu.style.display = "inline";
    gameMusic.play();
}
// Players names block - End.

// Go! button - random Paragraph - Start.
btn.addEventListener('click', function () {
    randomPragrapj();
    clickBtn.play();
})
// Go! button - random Paragraph - End.

// Function random Paragraph - Start.
var array = [one, two, three, four];
function randomPragrapj() {
    var randomElement = array[Math.floor(Math.random() * array.length)];

    // One random Paragraph index - Start.
    if (randomElement === array[0]) {
        randomElement.classList.toggle("mystyle");
        playerOnePoint += Math.floor(Math.random() * 20);
        one.innerHTML = playerOne + '<br>' + playerOnePoint;
        if (playerOnePoint >= 20 && playerOnePoint <= 20 || playerOnePoint >= 80 && playerOnePoint <= 90 || playerOnePoint >= 150 && playerOnePoint <= 160 || playerOnePoint >= 200 && playerOnePoint <= 210) {
            var x = one.innerHTML = prompt(playerOne + ' ' + "Truth or Dare? (if you dont want to do , your point will be 0! if you do , you get 100 points) : Yes (i do) or No (i dont want)!", "Yes!");
            questionMusic.play();
            if (x == "Yes!") {
                alert(playerOne + ' ' + 'You got 100 points!');
                playerOnePoint += 100;
            }
            if (x != "Yes!") {
                alert(playerOne + ' ' + 'You lost , your point is 0!');
                playerOnePoint = 0;
            }
        }
        if (playerOnePoint >= 500) {
            alert(playerOne + ' ' + 'You won!');
            window.location.reload();
        }
    }    
    // One random Paragraph index - End.

    // Two random Paragraph index - Start.
    if (randomElement === array[1]) {
        randomElement.classList.toggle("mystyleTwo");
        playerTwoPoint += Math.floor(Math.random() * 20);
        two.innerHTML = playerTwo + '<br>' + playerTwoPoint;
        if (playerTwoPoint >= 60 && playerTwoPoint <= 65 || playerTwoPoint >= 100 && playerTwoPoint <= 115 || playerTwoPoint >= 140 && playerTwoPoint <= 149 || playerOnePoint >= 220 && playerOnePoint <= 230) {
            var y = two.innerHTML = prompt(playerTwo + ' ' + "Truth or Dare? (if you dont want to do , your point will be 0! if you do , you get 100 points) : Yes (i do) or No (i dont want)!", "Yes!");
            questionMusic.play();
            if (y == "Yes!") {

                alert(playerTwo + ' ' + 'You got 100 points!');
                playerTwoPoint += 100;
            }
            if (y != "Yes!") {
                alert(playerTwo + ' ' + 'You lost , your point is 0!');
                playerTwoPoint = 0;
            }
        }
        if (playerTwoPoint >= 500) {
            alert(playerTwo + ' ' + 'You won!');
            window.location.reload();
        }
    }
    // Two random Paragraph index - End.

    // Three random Paragraph index - Start.
    if (randomElement === array[2]) {
        randomElement.classList.toggle("mystylethree");
        playerThreePoint += Math.floor(Math.random() * 20);
        three.innerHTML = playerThree + '<br>' + playerThreePoint;
        if (playerThreePoint >= 20 && playerThreePoint <= 25 || playerThreePoint >= 40 && playerThreePoint <= 45 || playerThreePoint >= 200 && playerThreePoint <= 205 || playerOnePoint >= 250 && playerOnePoint <= 255) {
            var f = three.innerHTML = prompt(playerThree + ' ' + "Truth or Dare? (if you dont want to do , your point will be 0! if you do , you get 100 points) : Yes (i do) or No (i dont want)!", "Yes!");
            questionMusic.play();
            if (f == "Yes!") {
                alert(playerThree + ' ' + 'You got 100 points!');
                playerThreePoint += 100;
            }
            if (f != "Yes!") {
                alert(playerThree + ' ' + 'You lost , your point is 0!');
                playerThreePoint = 0;
            }
        }
        if (playerThreePoint >= 500) {
            alert(playerThree + ' ' + 'You won!');
            window.location.reload();
        }
    }
    // Three random Paragraph index - End.

    // Four random Paragraph index - Start.
    if (randomElement === array[3]) {
        randomElement.classList.toggle("mystylefour");
        playerFourPoint += Math.floor(Math.random() * 20);
        four.innerHTML = playerFour + '<br>' + playerFourPoint;
        if (playerFourPoint >= 20 && playerFourPoint <= 30 || playerFourPoint >= 80 && playerFourPoint <= 90 || playerFourPoint >= 150 && playerFourPoint <= 160 || playerOnePoint >= 200 && playerOnePoint <= 210) {
            var j = four.innerHTML = prompt(playerFour + ' ' + "Truth or Dare? (if you dont want to do , your point will be 0! if you do , you get 100 points) : Yes (i do) or No (i dont want)!", "Yes!");
            questionMusic.play();
            if (j == "Yes!") {

                alert(playerFour + ' ' + 'You got 100 points!');
                playerFourPoint += 100;
            }
            if (j != "Yes!") {
                alert(playerFour + ' ' + 'You lost , your point is 0!');
                playerFourPoint = 0;
            }
        }
        if (playerFourPoint >= 500) {
            alert(playerFour + ' ' + 'You won!');
            window.location.reload();
        }
    }
    // Four random Paragraph index - End.
}
// Function random Paragraph - End.