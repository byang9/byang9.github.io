<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Basic Numeric Array</title>
<style type="text/css">
body,td,th {
	font-size: 24px;
}
</style>
</head>
<body>
<h2>Pulling data sequentially from an array</h2>
<p><h3>
  <?php

echo "<b>Current Presidential Candidates</b><br/>";


// Basic Numeric Array 

$candidate= Array();
$candidate[0]="Mitt Romney";
$candidate[1]="Rick Santorum";
$candidate[2]="Newt Gingrich";
$candidate[3]="Ron Paul";
$candidate[4]="Barack Obama";


foreach  ($candidate as $whichone) {
	echo "<br/>";
	echo $whichone;}
	
	

?>
  </h3>

</body>
