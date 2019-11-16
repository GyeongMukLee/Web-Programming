window.onload = function () {
    var response = updateData();
    var row = response.getElementsByTagName("row");
    for (var i = 0; i < row.length; i++) {
        appendTheDOM(row[i]);
    }
};

function updateData() {
    var data = new XMLHttpRequest();
    var key = "";
    var url = "http://openapi.seoul.go.kr:8088/" + key + "/xml/CardSubwayStatsNew/1/500/20191110";
    var res;

    data.open("GET", url, false);
    data.onreadystatechange = function () {
        if (data.status == 200) {
            console.log("문서 받음");
            res = data.responseXML;
        } else {
            console.log("문서 받지 못함");
            res = null;
        }
    };
    data.send(null);

    return res;
}

function appendTheDOM(xml) {
    var tbody = document.getElementById("main-table");
    var tr = document.createElement("tr");

    tr.appendChild(th_date_append(xml));
    tr.appendChild(th_stationName_append(xml));
    tr.appendChild(th_rideP_append(xml));
    tr.appendChild(th_alightP_append(xml));

    tbody.appendChild(tr);
}

function th_date_append(xml) {
    var th_date = document.createElement("td");
    th_date.innerHTML = xml.getElementsByTagName("USE_DT")[0].innerHTML;
    return th_date;
}

function th_stationName_append(xml) {
    var th_stationName = document.createElement("td");
    th_stationName.innerHTML = xml.getElementsByTagName("SUB_STA_NM")[0].innerHTML;
    th_stationName.setAttribute("style", "color: " + stationLineColor(xml) + ";");
    return th_stationName
}

function stationLineColor(xml) {
    var stationLine = xml.getElementsByTagName("LINE_NUM")[0];
    var stationColor = "";

    switch (stationLine.innerHTML[0]) {
        case "1":
            stationColor = "#0D3692";
            break;
        case "2":
            stationColor = "#33A23D";
            break;
        case "3":
            stationColor = "#FE5B10";
            break;
        case "4":
            stationColor = "#32A1C8";
            break;
        case "5":
            stationColor = "#8B50A4";
            break;
        case "6":
            stationColor = "#C55C1D";
            break;
        case "7":
            stationColor = "#54640D";
            break;
        case "8":
            stationColor = "#F51361";
            break;
        case "9":
            stationColor = "#AA9872";
            break;
        default:
            stationColor = "#000000";
    }
    return stationColor;
}

function th_rideP_append(xml) {
    var th_rideP = document.createElement("td");
    th_rideP.innerHTML = xml.getElementsByTagName("RIDE_PASGR_NUM")[0].innerHTML;
    return th_rideP;
}

function th_alightP_append(xml) {
    var th_alightP = document.createElement("td");
    th_alightP.innerHTML = xml.getElementsByTagName("ALIGHT_PASGR_NUM")[0].innerHTML;
    return th_alightP;
}