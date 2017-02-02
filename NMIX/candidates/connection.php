<?php

	$connection =mysql_connect("localhost","byang9DB","bowenyangDatabase");
	if (! $connection) {
		die("Database connection failed: ".mysql_error());
	}
	$db_select = mysql_select_db("bowen_db",$connection);
	if (! $db_select) {
		die("Database connection failed: ".mysql_error());
	}
?>

