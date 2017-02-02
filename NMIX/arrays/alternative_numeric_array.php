<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
<style type="text/css">
body,td,th {
	font-size: 18px;
}
</style>
</head>
<body>

<?php

echo "<h3>Basic Numeric Array</h3>
<h4>Current Presidential Candidates</h4>";


// Basic Numeric Array 

$candidates=Array('Mitt Romney','Rick Santorum','Newt Gingrich','Ron Paul','Barack Obama');


//or pull the data out sequentially

foreach  ($candidates as $whichone) {
	echo "<br/>";
	echo $whichone;}

?>

</body>
