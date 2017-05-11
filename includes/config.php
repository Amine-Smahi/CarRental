<?php
	$host = "localhost";
	$user = "";
	$pass = "";
	$db = "";
	
	$conn = new mysqli($host, $user, $pass, $db);
	if($conn->connect_error){
		echo "Failed:" . $conn->connect_error;
	}
?>
