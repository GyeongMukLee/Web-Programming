// 전역변수 설정 부분
var watchID = null;
var map = null;


// HTML이 로드된 후 실행될 함수
window.onload = function () {
    if (navigator.geolocation) {
        var mapContainer = document.getElementById("map");
        var mapOption = {
            center: new kakao.maps.LatLng(37.5, 127),
            level: 10
        }

        map = new kakao.maps.Map(mapContainer, mapOption)
    } else {
        alert("Geolocation이 지원되지 않는 것 같습니다.")
    }
}

function startButtonClick() {
    watchID = navigator.geolocation.watchPosition(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        displayMarker(lat, lng);
    });

    document.getElementById("status_working").setAttribute("style", "");
    document.getElementById("status_stop").setAttribute("style", "display: none;")
}

function stopButtonClick() {
    if (watchID) {
        navigator.geolocation.clearWatch(watchID);
        watchID = null;
    }
    document.getElementById("status_working").setAttribute("style", "display: none;");
    document.getElementById("status_stop").setAttribute("style", "")
}

function displayMarker(lat, lng) {
    var markerPosition = new kakao.maps.LatLng(lat, lng);
    var marker = new kakao.maps.Marker({
        map: map,
        position: markerPosition
    });
    marker.setMap(map);
    map.setCenter(markerPosition);
}