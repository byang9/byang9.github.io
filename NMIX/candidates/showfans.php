<?php
$lastname = $_POST['lastname'];
require_once("connection.php");
$get_data = mysql_query("SELECT * FROM fans",  $connection);
		if (!$get_data) { die("Database query failed: " . mysql_error());}
while ($rows = mysql_fetch_array($get_data)) {
	echo $rows['first_name']."    ";
	echo $rows['last_name'];
	echo $rows['email']; 
}
?>