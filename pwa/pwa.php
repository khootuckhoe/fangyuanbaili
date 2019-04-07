<?php
		echo 'Current PHP version: ' . phpversion();
		print_r(get_loaded_extensions());
		if(extension_loaded (  'sqlsrv' ))
			echo 'yes!';
		else
			echo 'no!';
		$serverName = 'foodappserver1.database.windows.net';
		$connectionOptions = array(
        "Database" => "foodappdb", 
        "Uid" => "foodappdb",
        "PWD" => "Foodapp123456"
    	);

		try {
        	$conn = sqlsrv_connect($serverName, $connectionOptions);    
	    } catch (Exception $e) {
	        print_r($e);
	    }

		$sql = "INSERT INTO customer ( first_name, last_name)
		 VALUES ('John', 'Doe')";

		if (sqlsrv_query($conn, $sql) === TRUE) {
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
		$conn->close();
?>

<html>
 <head>
 </head>
 <body>
 <h1>PHP connect to MySQL</h1>
</body>
</html>