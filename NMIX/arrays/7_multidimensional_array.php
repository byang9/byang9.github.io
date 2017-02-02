<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Multi-dimensional Array</title>
<style type="text/css">
body,td,th {
	font-size: 24px;
}
</style>
</head>
<body>
<h2>Multi-dimensional Array</h2>
<h3>Purpose: To store more complex sets of data</h3>
<h3>Characteristics:</h3>
<ul>
  <li>Arrays inside of arrays</li>
  <li>A little harder to wrap your brain around :-) </li>
</ul>

<?php

//multi-dimensional array

$details=array ('Romney' => array('state' =>'Michigan',
																'religion'=>'Mormon',
																'year_born'=>'1947',
																'spouse'=>'Ann Romney'),
																
									'Santorum' => array('state' =>'Pennsylvania',
																'religion'=>'Roman Catholic',
																'year_born'=>'1958',
																'spouse'=>'Karen Santorum',
																'party'=>'Republican'),


								'Gingrich' => array('state' =>'Georgia',
																'religion'=>'Roman Catholic',
																'year_born'=>'1943',
																'spouse'=>'Callista Bisek - Marriane Ginther - Jackie Battley'),
																
								'Paul' => array('state' =>'Texas',
																'religion'=>'Baptist',
																'year_born'=>'1935',
																'spouse'=>'Carol Wells'),																

								'Obama' => array('state' =>'Illinois',
																'religion'=>'Christianity',
																'year_born'=>'1961',
																'spouse'=>'Michelle Obama')

);
//var_dump ($details);
//echo $details;
//echo $details['Santorum']	;
echo $details['Santorum']['spouse'];
echo $details['Santorum']['year_born'];
echo $details['Obama']['spouse'];
echo $details['Obama']['year_born'];
foreach  ($details as $whichone) {echo $whichone['religion']."<br/>";}



?>

</body>
