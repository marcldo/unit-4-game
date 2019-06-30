let numToGuess = null;

let myTotal = null;

let jBlue = null;

let jGreen = null;

let jRed = null;

let jYellow = null;

let wins = null;

let losses = null;

setValues();

function setValues() {
    numToGuess = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#numToMatch").text(numToGuess);
    console.log(numToGuess);

    jBlue = Math.floor(Math.random() * (12 - 1)) + 1;
    jGreen = Math.floor(Math.random() * (12 - 1)) + 1;
    jRed = Math.floor(Math.random() * (12 - 1)) + 1;
    jYellow = Math.floor(Math.random() * (12 - 1)) + 1;
};

function setMyTotal(input) {
    myTotal += input;
    $("#myTotal").text(myTotal);
    checkTotal();
};

function checkTotal() {
    if (myTotal === numToGuess) {
        wins++;
        $("#wins").text(wins);
        alert("You Win");
        myTotal = null;
        setValues();
        setMyTotal(0);
    }
    else if (myTotal > numToGuess) {
        losses++;
        $("#losses").text(losses);
        alert("You Lose");
        myTotal = null;
        setValues();
        setMyTotal(0)
    }
};

$("#blue").on("click", function () {
    setMyTotal(jBlue);
    console.log("blue is clicked value: " + jBlue);
});

$("#green").on("click", function () {
    setMyTotal(jGreen);
    console.log("green is clicked value: " + jGreen);
});

$("#red").on("click", function () {
    setMyTotal(jRed);
    console.log("red is clicked value: " + jRed);
});

$("#yellow").on("click", function () {
    setMyTotal(jYellow);
    console.log("yellow is clicked value: " + jYellow);
});

