<?php $babies=Array("_JmA2ClUvUY",
                    "_YQpbzQ6gzs",
                    "E8aprCNnecU",
                    "ikTxfIDYx6Q",
                    "I_mBLWpdwnI",
                    "RP4abiHdQpc",
                    "a--3q4fOL5g",
                    "3Nj1pf5fY7g",
                    "6LOj0_Ufemc",
                    "ff9eTdedoas",
                    "NzQUtElQXX0",
                    "jG5rQ3D_Zrw");

$numberOfBabies = sizeof($babies);

echo "There are ".$numberofBabies." in this array.<br><br>";

$arrayNum = $numberOfBabies-1; 
echo "Because arrays always start at 0 rather than one, we have to subtract one from the total number of the array which yields: ".$arrayNum.".<br><br>";

$which= rand (0, $arrayNum);

echo "This number is randomly generated and ranges from 0 to the size of the arrayNum variable"; 

echo "<br>".$which."<br>";

echo "<iframe width='560' height='315' src='http://www.youtube.com/embed/";
echo $babies[$which];
echo " 'frameborder='0' allowfullscreen></iframe>";

echo "<br><br><a href='babies.php'><button>Click Here for a fresh baby</button></a>";


//extra baby videos  start here  p336IIjZCl8     ZAmZucyzyZM   S1ql2eNo2BY  

?>
