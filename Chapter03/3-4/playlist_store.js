function save(item) {
    var playListArray = getstoreArray("playlist");
    playListArray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playListArray));
}

function loadPlayList() {
    var playListArray = getSaveSongs();
    var ul = document.getElementById("playlist");

    if (playListArray != null) {
        for (var i = 0; i < playListArray.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = playListArray[i];
            ul.appendChild(li);
        }
    }
}

function getSaveSongs() {
    return getstoreArray("playlist");
}

function getstoreArray(key) {
    var playListArray = localStorage.getItem(key);
    if (playListArray == null || playListArray == "") {
        playListArray = new Array();
    } else {
        playListArray = JSON.parse(playListArray);
    }

    return playListArray;
}