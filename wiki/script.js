window.onload = function () {
    search.addEventListener("click", function(){
        let query = document.getElementById("queryWiki").value;
        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&format=json&callback=?";
        $.getJSON(url, function(json) {
            for(let i = 0; i < 10; i++){
                $('.table').append("<div class='found'><a href=" + json[3][i] +" ><p>" + json[1][i] + "</p><br><p>" +
                    json[2][i] + "</p></a></div>");
            }
        });
    })
};