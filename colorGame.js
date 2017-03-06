var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".modeButton");
var colors;
var pickedColor;

init();

function init() {
    resetColors(6);
    setUpSquares();
    setUpModeButtons();
}

function resetColors(num) {
    colors = generateRandomColors(num);
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    pickedColor = colors[pickColor(num)];
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    message.textContent = "";
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor === pickedColor) {
                message.textContent = "You win!";
                changeColors();
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again.";
            }
        });
    }
}

function setUpModeButtons () {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            if (!this.classList.contains("selected")) {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                if (this.textContent === "EASY") {
                    resetColors(3);
                    for (var i = 3; i < 6; i++) {
                        squares[i].style.display = "none";
                    }
                } else {
                    resetColors(6);
                    for (var i = 3; i < 6; i++) {
                        squares[i].style.display = "block";
                    }
                }
            }
        });
    }
}

function changeColors() {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
    h1.style.backgroundColor = pickedColor;
}

function generateRandomColors(num) {
    var result = [];
    for (var i = 0; i < num; i++) {
        result.push(randomColor());
    }
    return result;
}

function randomColor() {
    return "rgb(" + pickColor(255) + ", " + pickColor(255) + ", " + pickColor(255) + ")";
}

function pickColor(num) {
    return Math.floor(Math.random() * num);
}

resetButton.addEventListener("click", function () {
    modeButtons[0].classList.contains("selected") ? resetColors(3) : resetColors(6);
});


