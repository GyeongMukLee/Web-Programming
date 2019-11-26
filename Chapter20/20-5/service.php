<?php

    mysqli_connect("localhost", "vallisneria", "mm9208036!", "runners")
                OR die(fail("Could not connect to database"));

    mysqli_select_db("vallisneria");

    echo "Connected!";

?>