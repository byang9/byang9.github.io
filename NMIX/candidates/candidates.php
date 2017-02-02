<?php
$lastname = $_POST['lastname'];
require_once("connection.php");
$get_data = mysql_query("SELECT * FROM candidates where last_name='$lastname'",  $connection);
		if (!$get_data) { die("Database query failed: " . mysql_error());}
while ($rows = mysql_fetch_array($get_data)) {
	echo $rows['first_name']."    ";
	echo $rows['last_name'];
	echo " was born in ".$rows[year_born]; 
    echo ", lives in " . $rows[state];
    echo ", and is married to " . $rows[spouse] ;
    echo ". He or she is a " . $rows[religion];
}
?>