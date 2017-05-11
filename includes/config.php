<?php
	$host = "localhost";
	$user = "id1594239_root";
	$pass = "Fanki480";
	$db = "id1594239_cars";
	
	$conn = new mysqli($host, $user, $pass, $db);
	if($conn->connect_error){
		echo "Failed:" . $conn->connect_error;
	}
?>