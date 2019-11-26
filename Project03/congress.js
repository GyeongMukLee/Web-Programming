window.onload = function () {
    var page = 1;
    var url = "http://vallisneria.dothome.co.kr/getRecentRceptList.php?page=" + page;
    var xhr = new XMLHttpRequest();


    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var xml = xhr.responseXML.documentElement;

            var items = xml.getElementsByTagName("item");

            for (var i = 0; i < items.length; i++) {
                makeTable(items[i])
            }
        }

    }
    xhr.send(null);


}

function makeTable(item) {
    var tr = document.createElement("tr");
    var td_date = document.createElement("td");
    var td_name = document.createElement("td");
    var a = document.createElement("a")

    td_date.innerHTML = item.getElementsByTagName("proposeDt")[0].innerHTML;
    a.innerHTML = item.getElementsByTagName("billName")[0].innerHTML;
    a.setAttribute("href", "http://likms.assembly.go.kr/bill/billDetail.do?billId="
        + item.getElementsByTagName("billId")[0].innerHTML)

    td_name.appendChild(a);
    tr.appendChild(td_date);
    tr.appendChild(td_name);

    document.getElementById("main-table").appendChild(tr)
}