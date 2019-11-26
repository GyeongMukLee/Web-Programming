<?php

    $query = "SELECT first_name, last_name, gender, finish_time FROM runners order by finish_time _ASC";

    $result = db_connection($query);

    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
        print_f($row);
    }

    function db_connection($query){
        mysqli_connect("localhost", "vallisneria", "YOUR_PASSWORD", "vallisneria")
        OR die("could not connect to database.");

        mysql_select_db("hrjq_race_info");

        return mysql_query($query);
    }
?>