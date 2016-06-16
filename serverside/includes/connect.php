<?php
	include("config.php");
		function GetDBConnection(){
			$dbConn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
			if($dbConn == false){
				echo "ERROR:" .mysqli_connect_error();
				die();
			}
			return $dbConn;
		}
?>