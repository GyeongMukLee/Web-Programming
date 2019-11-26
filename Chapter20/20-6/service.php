<?php

    $query = "SELECT first_name, last_name, gender, finish_time FROM runners order by finish_time ASC";

    $result = db_connection($query);

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
        print_r($row);
    }

    function db_connection($query){
        $li = mysqli_connect("localhost", "vallisneria", "YOUR_PASSWORD", "vallisneria")
        OR die("could not connect to database.");

        return mysqli_query($li, $query);
    }
?>