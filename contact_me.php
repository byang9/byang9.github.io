<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $phoneErr = "";
$name = $email = $gender = $comment = $phone = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }
    
  if (empty($_POST["phone"])) {
    $phone = "";
  } else {
    $phone = test_input($_POST["phone"]);
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
	
$name = $_POST['name'];
$comment = $_POST['comment'];
$phone = $_POST['phone'];
$email = $_POST['email'];
	
// Create the email and send the message
$to = 'byang9@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "phone Contact Form:  $name";
$email_body = "You have received a new message from your phone contact form.\n\n"."Here are the details:\n\nName: $name\n\nComments: $comment\n\nPhone: $phone\n\nEmail:\n$email";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email";	
mail($to,$email_subject,$email_body,$headers);
//window.location = "www.google.com";
return true;			
?>