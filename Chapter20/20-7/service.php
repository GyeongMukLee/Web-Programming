<?php

    $query = "SELECT first_name, last_name, gender, finish_time FROM runners order by finish_time ASC";
    $result = db_connection($query);
    $runners=array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
        array_push($runners, array("fname"=>$row["first_name"], "lname"=>$row["last_name"],"gender"=>$row["gender"],"time"=>$row["finish_time"]));
    }

    echo json_encode(array("runners"=>$runners));
    exit;

    function db_connection($query){
        $li = mysqli_connect("localhost", "vallisneria", "YOUR_PASSWORD", "vallisneria")
        OR die("could not connect to database.");

        return mysqli_query($li, $query);
    }

    function fail($message){
        die(json_encode(array("status"=>"fail", "message"=>$message)));
    }

    function success($message){
        die(json_encode(array("status"=>"success","message"=>$message)));
    }
?>