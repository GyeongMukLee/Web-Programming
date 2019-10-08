window.onload = function () {
    var url = "http://wickedlysmart.com/ifeelluckytoday";
    var request = new TextHttpRequest();
    request.onload = function () {
        if (request.status == 200) {
            displayluck(request.responseText);
        }
    };
    request.open("GET", url);
    request.send(null)
}

function displayluck(luck) {
    var p = document.getElementById("luck");
    p.innerHTML = "Today you are " + luck;
}