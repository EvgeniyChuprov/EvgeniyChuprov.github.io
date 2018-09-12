window.onload = function () {
    let player = "";
    let pc = "";
    let winArray = ['123', '456', '789', '147', '258', '369', '159', '357'];
    let exitFlag = false;
    let numPlayer = 0;
    let numPC = 0;
    const cleanTh = document.getElementsByTagName("th");


    numScoreTwo.innerHTML = numPlayer;
    numScoreOne.innerHTML = numPC;

    one.onclick = function () {
        document.getElementById('menu').style.display = "none";
    };
    two.onclick = function () {
        player = "X";
        pc = "O";
        oP.innerHTML = "X";
        tP.innerHTML = "O";
        document.getElementById('menu').style.display = "none";
        document.getElementById('xOrO').style.display = "none";
        twoPlayer(player, pc)
    };

    xOrO.onclick = function () {
        player = isCeck('xOrO').value;
        document.getElementById('xOrO').style.display = "none";
        player = player.toUpperCase();
        if (player == "X") {
            oP.innerHTML = "X";
            tP.innerHTML = "O";
            pc = "O";
        } else {
            oP.innerHTML = "O";
            tP.innerHTML = "X";
            pc = "X"
        }
        onePlayer(player, pc);
    }

    function isCeck(name) {
        return document.querySelector('input[name="' + name + '"]:checked');
    }


    function twoPlayer(player, pc) {
//Определяем победу игрока
        function checkUserOne(token) {
            for (var i = 0; i < 8; i++) {

                var first = 'cell' + winArray[i].substr(0, 1);
                var second = 'cell' + winArray[i].substr(1, 1);
                var third = 'cell' + winArray[i].substr(2, 1);

                if ($('.' + first).text() == token && $('.' + second).text() == token && $('.' + third).text() == token) {
                    $('.' + first + ',.' + second + ',.' + third).css("background-color", "#83e2c3");
                    $('.TicTacToe .block').unbind('click');
                    numScoreOne.innerHTML = ++numPlayer;
                    setTimeout(clean, 500);
                    twoPlayer(player, pc);
                    exitFlag = true;
                }
            }
        }

        function checkUserTwo(token) {
            for (var i = 0; i < 8; i++) {

                var first = 'cell' + winArray[i].substr(0, 1);
                var second = 'cell' + winArray[i].substr(1, 1);
                var third = 'cell' + winArray[i].substr(2, 1);

                if ($('.' + first).text() == token && $('.' + second).text() == token && $('.' + third).text() == token) {
                    $('.' + first + ',.' + second + ',.' + third).css("background-color", "#83e2c3");
                    $('.TicTacToe .block').unbind('click');
                    numScoreTwo.innerHTML = ++numPC;
                    setTimeout(clean, 500);
                    twoPlayer(player, pc);
                    exitFlag = true;
                }
            }
        }

        function checkDraw() {
            var sum = 0;
            for (var i = 0; i < 8; i++) {


                if ($('.cell' + i).text() !== '') {
                    sum++;
                    console.log(sum)
                }
            }
            if (sum == 7) {

                setTimeout(clean, 1000);
                twoPlayer(player, pc);
                exitFlag = true;

            }
        }

        var numm = 1;

        $('.TicTacToe .block').click(function () {
            if ($(this).text() == '') {
                if (numm % 2 !== 0) {
                    $(this).text(player);
                    checkUserOne(player);
                    checkDraw();
                    return numm = 2
                } else {
                    $(this).text(pc);
                    checkUserTwo(pc);
                    checkDraw();
                    return numm = 1;
                }
            }
            ;
        });
    };


    function onePlayer(player, pc) {

        //Определяем победу игрока
        function checkUser(token) {
            for (var i = 0; i < 8; i++) {

                var first = 'cell' + winArray[i].substr(0, 1);
                var second = 'cell' + winArray[i].substr(1, 1);
                var third = 'cell' + winArray[i].substr(2, 1);

                if ($('.' + first).text() == token && $('.' + second).text() == token && $('.' + third).text() == token) {
                    $('.' + first + ',.' + second + ',.' + third).css("background-color", "#83e2c3");
                    $('.TicTacToe .block').unbind('click');
                    numScoreOne.innerHTML = ++numPlayer;
                    setTimeout(clean, 500);
                    onePlayer(player, pc)
                    exitFlag = true;
                }
            }
        }

        //Определяем возможность победы компьютера
        function checkCompTwo(token) {
            for (var i = 0; i < 8; i++) {

                var first = 'cell' + winArray[i].substr(0, 1);
                var second = 'cell' + winArray[i].substr(1, 1);
                var third = 'cell' + winArray[i].substr(2, 1);

                if ($('.' + first).text() == token && $('.' + second).text() == token && $('.' + third).text() == '') {
                    $('.' + third).text(token);
                    $('.' + first + ',.' + second + ',.' + third).css("background-color", "#EF7C7C");
                    $('.TicTacToe .block').unbind('click');
                    setTimeout(clean, 500);
                    onePlayer(player, pc)
                    numScoreTwo.innerHTML = ++numPC;
                    exitFlag = true;
                }

                if ($('.' + first).text() == token && $('.' + second).text() == '' && $('.' + third).text() == token) {
                    $('.' + second).text(token);
                    $('.' + first + ',.' + second + ',.' + third).css("background-color", "#EF7C7C");

                    $('.TicTacToe .block').unbind('click');
                    numScoreTwo.innerHTML = ++numPC;
                    setTimeout(clean, 500);
                    onePlayer(player, pc)
                    exitFlag = true;
                }

                if ($('.' + first).text() == '' && $('.' + second).text() == token && $('.' + third).text() == token) {
                    $('.' + first).text(token);
                    $('.' + first + ',.' + second + ',.' + third).css("background-color", "#EF7C7C");
                    $('.TicTacToe .block').unbind('click');
                    numScoreTwo.innerHTML = ++numPC;
                    setTimeout(clean, 500);
                    onePlayer(player, pc)
                    exitFlag = true;
                }
            }
        }

        //Определяем ход компьютера
        function checkUserTwo(token) {

            for (var i = 0; i < 8; i++) {

                var first = 'cell' + winArray[i].substr(0, 1);
                var second = 'cell' + winArray[i].substr(1, 1);
                var third = 'cell' + winArray[i].substr(2, 1);


                if (exitFlag == false) {
                    if ($('.' + first).text() == token && $('.' + second).text() == token && $('.' + third).text() == '') {
                        $('.' + third).text(pc);
                        exitFlag = true;
                    }
                }

                if (exitFlag == false) {
                    if ($('.' + first).text() == token && $('.' + second).text() == '' && $('.' + third).text() == token) {
                        $('.' + second).text(pc);
                        exitFlag = true;
                    }
                }

                if ($('.' + first).text() == '' && $('.' + second).text() == token && $('.' + third).text() == token) {
                    $('.' + first).text(pc);
                    exitFlag = true;
                }

                if (exitFlag) break;
            }
        }

        function checkDraw() {
            var sum = 0;
            for (var i = 0; i < 8; i++) {


                if ($('.cell' + i).text() !== '') {
                    sum++;
                    console.log(sum)
                }
            }
            if (sum == 7) {

                setTimeout(clean, 1000);
                onePlayer(player, pc);
                exitFlag = true;

            }
        }

        $('.TicTacToe .block').click(function () {

            //Если клетка пустая
            if ($(this).text() == '') {
                $(this).text(player);
                checkUser(player);
                checkCompTwo(pc);
                checkUserTwo(player);
                checkDraw();
                if (exitFlag == false) {
                    for (var i = 1; i < 10; i++) {
                        if ($('.cell' + i).text() == '') {
                            $('.cell' + i).text(pc);
                            break;
                        }
                    }
                } else exitFlag = false;
            }
        });
    };


    function clean() {
        for (let i = 0; i < cleanTh.length; i++) {
            cleanTh[i].innerHTML = "";
            $("th").css("background-color", "white");
        }
    }

    $('#reset').on('click', function () {
        location.reload(false);
    });

};
