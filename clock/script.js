window.onload = function () {
    var data;
    let header = document.getElementById('h1');
    let par = document.getElementById('par');
    let sec = document.getElementById('sec');
    let but = document.getElementById('but');
    let butt = document.getElementById('butt');
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let min = document.getElementById('min');
    let plusRelax = document.getElementById('plusRelax');
    let startRelax = document.getElementById('startRelax');
    let minusRelax = document.getElementById('minusRelax');
    let startSec = 59;
    par.classList.add("redTime");
    header.classList.add("redTime");
    test(start);
    sec.innerHTML = "00";

    but.onclick = function () {
        data = setInterval(function times() {
            testClock(min);
            testClock2(sec);
            if (+sec.innerHTML === 0 && +min.innerHTML > 0) {
                sec.innerHTML = startSec;
                testClock2(min);
            } else if (+sec.innerHTML === 0 && +min.innerHTML === 0) {
                if (header.classList.contains("redTime")) {
                    header.classList.toggle("blueTime");
                    par.classList.toggle("blueTime");
                    test(startRelax);
                } else {
                    header.classList.toggle("redTime");
                    par.classList.toggle("redTime");
                    test(start);
                }
            }
        }, 1000)
    };
    butt.onclick = function () {
        clearInterval(data)
    };


    plus.onclick = function () {
        if (min.innerHTML < 60) {
            start.innerHTML++;
            if (header.classList.contains("redTime")) {
                test(start);
                sec.innerHTML = "00";
            }
        }
    };

    minus.onclick = function () {
        if (start.innerHTML > 1) {
            start.innerHTML--;
            if (header.classList.contains("redTime")) {
                test(start);
                sec.innerHTML = "00";
            }
        }
    };

    plusRelax.onclick = function () {
        if (startRelax.innerHTML < 60) {
            startRelax.innerHTML++;
        }
    };

    minusRelax.onclick = function () {
        if (startRelax.innerHTML > 1) {
            startRelax.innerHTML--;
        }
    };

    function test(x) {

        if ((x.innerHTML + "")[1] === undefined) {
            min.innerHTML = "0" + (+x.innerHTML);
        } else {
            min.innerHTML = x.innerHTML;
        }
    }

    function testClock(x) {
        if ((x.innerHTML + "")[1] === undefined) {
            x.innerHTML = "0" + (+x.innerHTML);
        } else {
            x.innerHTML = x.innerHTML;
        }
    }

    function testClock2(x) {
        if (x.innerHTML < 60 && x.innerHTML > 0) {
            if (x.innerHTML <= 10) {
                x.innerHTML = "0" + (+x.innerHTML - 1);

            } else {
                x.innerHTML--;
            }
        }
    }
};