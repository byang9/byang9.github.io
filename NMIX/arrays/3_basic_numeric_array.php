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
<h3>Using variables with an array</h3>
<p>&nbsp;</p>
<h3>


  <?php

$candidate= Array();
$candidate[0]="Mitt Romney";
$candidate[1]="Rick Santorum";
$candidate[2]="Newt Gingrich";
$candidate[3]="Ron Paul";
$candidate[4]="Barack Obama";


$thecandidate=$candidate[4];
echo $thecandidate;

?>
  </h3>

</body>
