<?php
$username =$_POST['username'];
$email =$_POST['email'];
$phone =$_POST['phone'];
$message =$_POST['message'];

// Create connection
$conn = new mysqli('localhost', 'root', '', 'testsss');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " .$conn->connect_error);
}else{
  $stmt = $conn->prepare("insert into registeration( username, email, phone, message) values(?,?,?,?)");
  $stmt->bind_param("ssis",$username,$email,$phone,$message);
  $stmt->execute();
  echo "resgiteration successfull...";
  $stmt->close();
  $conn->close();
}

?>