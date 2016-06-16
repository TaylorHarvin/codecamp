<?php
	include("includes\connect.php");
	include("includes\sqlCleaners.php");
	
	$newMsg = clean($_POST["newMsg"],"");
	$dateTime = clean($_POST["dateTime"],"");
	$fName = clean($_POST["fName"],"");
	$lName = clean($_POST["lName"],"");
	$msgBreak = "============================================================================";
	// PHP_EOL is just end of line -- works best in mysql database
	// addslashes is just for security in database
	$finalMsg = addslashes($fName.' '.$lName.
				" at ".$dateTime.PHP_EOL.'From: '.PHP_EOL.PHP_EOL.$newMsg.PHP_EOL.$msgBreak.PHP_EOL);
				/*$_SERVER['REMOTE_ADDR']."=>".getHostByName(getHostName()).*/ 
	
	// Get the database connection --> see connect.php
	$dbConnection = GetDBConnection();
	
	// Setup a safe SQL query to append the new message to the class notes
	$dbStmt = $dbConnection->prepare("update class_notes set notes = concat(notes,?) where id='100'");
	$dbStmt->bind_param("s",$finalMsg);
	$dbStmt->execute();
	
	// Close the database connection
	$dbConnection->close();
?>