function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function pageRenew() {
    document.getElementById("page").innerHTML = getParameterByName("page")
}

function movePrev() {
    let nowPage = Number(getParameterByName("page"));
    if(nowPage>1){
        location.href = location.href.replace("page=" + nowPage, "page=" + (nowPage - 1))
    }
}

function moveNext() {
    let nowPage = Number(getParameterByName("page"));
    location.href = location.href.replace("page=" + nowPage, "page=" + (nowPage + 1))
}