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
<h1>Associative Array</h1>
<h3>Indexed by string variables such as names</h3>
<h1>
  <?php

$state=array(
'Romney'=>'Massachusetts', 
'Santorum'=>'Pennsylvania', 
'Gingrich'=>'Georgia', 
'Paul'=>'Texas',
'Obama'=>'Illinois');

//pull the data one piece at a time

 echo $state['Obama'];


?>
</h1>
</body>
