window.onload = function () {
    updatejoke();
};

function updatejoke() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "http://api.icndb.com/jokes/random/");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.status == 200) {
            var text = JSON.parse(xmlhttp.responseText);
            text = text["value"]["joke"].replace("Chuck", document.getElementById("firstname").value);
            text = text.replace("Norris", document.getElementById("lastname").value);
            document.getElementById("joke").innerHTML = text;
        }
    }
    xmlhttp.send();
}

function previewHandler() {
    updatejoke();
    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    fillBackgroundColor(canvas, context);

    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;

    if (shape == "squares") {
        for (var squares = 0; squares < 20; squares++) {
            drawSquare(canvas, context);
        }
    } else if (shape == "circles") {
        for (var circles = 0; circles < 20; circles++) {
            drawCircle(canvas, context);
        }
    }
    drawText(canvas, context);
    drawBird(canvas, context);
}

function drawSquare(canvas, context) {
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context) {
    var radious = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.beginPath();
    context.arc(x, y, radious, 0, 2 * Math.PI, true);
    context.fillStyle = "lightblue";
    context.fill();
}

function drawText(canvas, context) {
    var selectObj = document.getElementById("foregroundColor");
    var index = selectObj.selectedIndex;
    var fgcolor = selectObj[index].value;
    var joke_split = []

    context.fillStyle = fgcolor;
    context.font = "bold 1em sans-serif";
    context.textAlign = "left";
    context.fillText("I saw this tweet", 20, 40);

    selectObj = document.getElementById("joke");
    var joke = selectObj.innerHTML;
    context.font = "italic 1.2em serif";

    for (var i = 0; i < 3; i++) {
        joke_split.push(joke.slice(60 * i, 60 * (i + 1)));
        context.fillText(joke_split[i], 30, 70 + (25 * i));
    }

    context.font = "bold 1em sans-serif";
    context.textAlign = "right";
    context.fillText("and all I got was this lousy T-shirt!",
        canvas.width - 20, canvas.height - 40);
}

function drawBird(canvas, context) {
    var twitterBird = new Image();
    twitterBird.src = "twitterBird.png";
    twitterBird.onload = function () {
        context.drawImage(twitterBird, 20, 120, 70, 70);
    };
}

function fillBackgroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgcolor = selectObj[index].value;

    context.fillStyle = bgcolor;
    context.fillRect(0, 0, canvas.width, canvas.height)
}
