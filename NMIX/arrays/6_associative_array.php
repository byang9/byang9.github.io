<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Associative Array</title>
<style type="text/css">
body,td,th {
	font-size: 18px;
}
</style>
</head>
<body>
<h2>Pulling data sequentially from associative aray</h2>
<h3>
<?php

$state=array(
'Romney'=>'Massachusetts', 
'Santorum'=>'Pennsylvania', 
'Gingrich'=>'Georgia', 
'Paul'=>'Texas',
'Obama'=>'Illinois');





// pull the data out sequentially

     foreach  ($state as $whichone) {
	    echo "<br/>";
	    echo $whichone;}

?>
</h3>
</body>
