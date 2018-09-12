window.onload = function () {
    const allStreamers = [
        "ESL_SC2",
        "OgamingSC2",
        "cretetion",
        "freecodecamp",
        "LCK1",
        "AdmiralBulldog",
        "RobotCaleb",
        "nl_Kripp"
    ];

    allStreamers.forEach(function (item, i) {

        $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + item + "?callback=?", function (data) {
            $('.table').append("<div class='found' id='found" + i + "'><a href=" + data.url + " target='_blank' >" +
                "<div class='container'><div class='row'><div class='col-sm-4'><img src=" + data.logo + " class='logo'>" +
                "</div><div class='col-sm-7'><p> Game:  " + data.game + "<br><span id='displayName'> Name: " + item + "" +
                "</span><br> Stream: <span id='onOff" + i + "'>offline</span></p></div></div></div></a></div>");
        });

        $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + item + "?callback=?", function (data) {
            if (data.stream !== null) {
                let onOff = document.getElementById('onOff' + i);
                onOff.innerHTML = "online";
            }
        });

    });

    $('#all').on('click', function () {
        for (let i = 0; i < 8; i++) {
            let found = document.getElementById('found' + i);
            found.style.display = "block";
        }
    });

    $('#online').on('click', function () {
        for (let i = 0; i < 8; i++) {
            let onOff = document.getElementById('onOff' + i);
            let found = document.getElementById('found' + i);
            found.style.display = "block";
            if (onOff.innerHTML == "offline") {
                found.style.display = "none";
            } else if (onOff.innerHTML == "online") {
                found.style.display = "block";
            }
        }
    });

    $('#offline').on('click', function () {
        for (let i = 0; i < 8; i++) {
            let onOff = document.getElementById('onOff' + i);
            let found = document.getElementById('found' + i);
            found.style.display = "block";
            if (onOff.innerHTML == "online") {
                found.style.display = "none";
            } else if (onOff.innerHTML == "offine") {
                found.style.display = "block";
            }
        }
    });
};