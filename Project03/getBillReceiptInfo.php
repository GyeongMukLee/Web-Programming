<?php

header("Content-Type: application/xml; charset=utf-8");

$ch = curl_init();
$url = "http://apis.data.go.kr/9710000/BillInfoService2/getBillReceiptInfo?"
    ."serviceKey=cILY%2FLgy5mRbBle9xGhwYSqDWufUwf%2F4vPSTPr%2FH07hTQc5GIC5Lxvo4uyG%2B6ETbs93uHMjRMS3O%2FkDjVZCAiA%3D%3D"
    ."&bill_id=".$_GET['bill_id'];

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$output = curl_exec($ch);

echo $output;

curl_close($ch);

?>