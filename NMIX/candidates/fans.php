<?php 
$lastname=$_POST["lastname"];
$firstname=$_POST["firstname"];
$email=$_POST["email"];
?>
<html>
    <head></head>
<body>
    <?php require_once('connection.php');
    echo "connection established";
    $addfans="insert into fans (first_name, last_name,email) values ('$firstname','$lastname','$email')";
    if(!mysql_query($addfans,$connection)){
        echo "this didn't work <br/><br/>"; //didn't work
        die('Error: ' . mysql_error());
    }
    else{
        echo "1 record added. It worked!";
    }
    ?>
    </body>
</html>