<?php
	include("includes\connect.php");
	
	// Get the database connection --> see connect.php
	$dbConnection = GetDBConnection();
	
	// Grabs the main notes from the database with SQL
	$dbResult = $dbConnection->query("select notes from class_notes where id='100'");
	// Gets the first (and only in this case) result
	$dbData = mysqli_fetch_array($dbResult);
	// Return the data to the user
	echo stripslashes($dbData["notes"]);
	
	// Close the database connection
	$dbConnection->close();
?>