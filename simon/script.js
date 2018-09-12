window.onload = function () {
    let clickable = false;
    let gameOn = false;
    let strict = false;
    let turns = 1;
    let count = 0;
    let countUp = 0;
    let simonArr = [];
    let userArr = [];
    let display = document.getElementById('cnt');
// --- AUDIO --- //
    const audG = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
    const audR = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
    const audY = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
    const audB = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    const audErr = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/buzz-error_G1eQPd4_.mp3');

// --- GAMEPLAY --- //
    function begin() {
        simonArr = [];
        userArr = [];
        count = 0;
        countUp = 0;
        turns = 1;
        simonAdd();
        setTimeout(simonSays, 700);
    }

    function simonAdd() {
        simonArr.push(Math.floor(Math.random() * 4) + 1);
        count++;
    }

    function simonSays() {
        $("#cint").val(count);
        output(simonArr[countUp]);
        countUp++;
        if (countUp < simonArr.length && gameOn) {
            setTimeout(simonSays, 700);
        }
        userStart();
    }

    function userStart() {
        userArr = [];
        clickable = true;
    }

    function userInput() {
        if (userArr[userArr.length - 1] === simonArr[userArr.length - 1]) {
            if (userArr.length == simonArr.length) {
                clickable = false;
                if (simonArr.length <= 20) {
                    countUp = 0;
                    simonAdd();
                    setTimeout(simonSays, 1000);
                } else {
                    gameWin();
                }
            }
        } else if (strict) {
            audErr.play();
            clickable = false;
            turns--;
            if (turns <= 0) {
                gameOver();
            } else {
                countUp = 0;
                setTimeout(simonSays, 1000);
            }
        } else {
            audErr.play();
            countUp = 0;
            setTimeout(simonSays, 1000);
        }
    }

    function gameOver() {
        $("#cint").val("LOSE");
        clickable = false;
    }

    function gameWin() {
        $("#cint").val("WIN");
        clickable = false;
    }

// --- MECHANICS --- //
    function output(num) {
        switch (num) {
            case 1:
                audG.play();
                $("#green").toggleClass('fullGreen');
                setTimeout(pauseG, 500);
                break;
            case 2:
                $("#red").toggleClass('fullRed');
                audR.play();
                setTimeout(pauseR, 500);
                break;
            case 3:
                $("#yellow").toggleClass('fullYellow');
                audY.play();
                setTimeout(pauseY, 500);
                break;
            case 4:
                $("#teal").toggleClass('fullBlue');
                audB.play();
                setTimeout(pauseB, 500);
                break;
        }
    }

    function pauseG() {
        $("#green").toggleClass('fullGreen');
    }

    function pauseR() {
        $("#red").toggleClass('fullRed');
    }

    function pauseY() {
        $("#yellow").toggleClass('fullYellow');
    }

    function pauseB() {
        $("#teal").toggleClass('fullBlue');
    }

    function pause() {
    }

// --- STATE CHANGES --- //
    onoff.onclick = function () {
        gameOn = !gameOn;
        if (!gameOn) {
            html.innerHTML = '&#10686;';
        }

    }
    strt.onclick = function () {
        if (gameOn) {
            begin();
            html.innerHTML = '&#10687;';
        } else {
            html.innerHTML = '&#10686;';
        }
    }
    strct.onclick = function () {
        if (!strict) {
            document.getElementById('strct').style.borderColor = "red";
        } else {
            document.getElementById('strct').style.borderColor = "black";
        }
        strict = !strict;
    }
    $("#green").on("mousedown", function () {
        if (clickable && gameOn) {
            $("#green").toggleClass('fullGreen');
            audG.play();
            userArr.push(1);
            userInput();
        }
    }).on("mouseup", function () {
        if (gameOn) {
            $("#green").toggleClass('fullGreen');
        }
    });
    $("#red").on("mousedown", function () {
        if (clickable && gameOn) {
            $("#red").toggleClass('fullRed');
            audR.play();
            userArr.push(2);
            userInput();
        }
    }).on("mouseup", function () {
        if (gameOn) {
            $("#red").toggleClass('fullRed');
        }
    });
    $("#yellow").on("mousedown", function () {
        if (clickable && gameOn) {
            $("#yellow").toggleClass('fullYellow');
            audY.play();
            userArr.push(3);
            userInput();
        }
    }).on("mouseup", function () {
        if (gameOn) {
            $("#yellow").toggleClass('fullYellow');
        }
    });
    $("#teal").on("mousedown", function () {
        if (clickable && gameOn) {
            $("#teal").toggleClass('fullBlue');
            audB.play();
            userArr.push(4);
            userInput();
        }
    }).on("mouseup", function () {
        if (gameOn) {
            $("#teal").toggleClass('fullBlue');
        }
    });
};