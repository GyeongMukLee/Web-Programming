window.onload = function () {
    if (location.search.indexOf("page") === -1) {
        location.href += "?page=1";
    }
    pageRenew();

    getList(function (lists) {
        for (let i = 0; i < lists.length; i++) {
            getInfo(lists[i].getElementsByTagName("billId")[0].innerHTML, function (info) {
                makeTable(lists[i], info);
            });
        }
    });
};

function getList(callback) {
    const url = "http://vallisneria.dothome.co.kr/getRecentRceptList.php?page=" + getParameterByName("page");
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            callback(xhr.responseXML.getElementsByTagName("item"));
        }
    };
    xhr.open("GET", url);
    xhr.send(null);
}

function getInfo(BillID, callback) {
    let xhr = new XMLHttpRequest();
    const url = "http://vallisneria.dothome.co.kr/getBillReceiptInfo.php?bill_id=" + BillID;
    let result;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseXML.getElementsByTagName("receipt")[0])
        }
    };
    xhr.open("GET", url);
    xhr.send(null);
}

function makeTable(item, info) {
    const tr = document.createElement("tr");
    const td_date = document.createElement("td");
    const td_proposer = document.createElement("td");
    const td_name = document.createElement("td");
    const td_link = document.createElement("td");
    const a_name = document.createElement("a");

    td_date.innerHTML = item.getElementsByTagName("proposeDt")[0].innerHTML;
    td_proposer.innerHTML = info.getElementsByTagName("proposer")[0].innerHTML;
    td_proposer.setAttribute("class", "mobile-not-allow");
    a_name.innerHTML = item.getElementsByTagName("billName")[0].innerHTML;
    a_name.setAttribute("href", "http://likms.assembly.go.kr/bill/billDetail.do?billId="
        + item.getElementsByTagName("billId")[0].innerHTML);
    td_link.setAttribute("class", "mobile-not-allow");

    if (info.getElementsByTagName("bookPdfUrl")[0] !== undefined) {
        console.log(info.getElementsByTagName("billName")[0].innerHTML);
        const a_link = document.createElement("a");
        a_link.innerHTML = info.getElementsByTagName("bookPdfName")[0].innerHTML;
        a_link.setAttribute("href", info.getElementsByTagName("bookPdfUrl")[0].innerHTML.replace("&amp;", "&"));
        td_link.appendChild(a_link);
    }

    td_name.appendChild(a_name);
    tr.appendChild(td_date);
    tr.appendChild(td_proposer);
    tr.appendChild(td_name);
    tr.appendChild(td_link);
    document.getElementById("main-table").appendChild(tr);
}