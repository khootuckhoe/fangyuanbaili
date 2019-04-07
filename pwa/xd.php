<?php
//Step1
	$dbhost = 'foodappserver1.database.windows.net';
	$dbuser = 'foodappdb';
	$dbpass = 'Foodapp123456';

	$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
	if(! $conn ) {
      die('Could not connect: ' . mysql_error());
   }
	$sql = 'SELECT emp_id, emp_name, emp_salary FROM employee';
	mysql_select_db('foodappdb');
	$retval = mysql_query( $sql, $conn );

	if(! $retval ) {
		die('Could not get data: ' . mysql_error());
	}
?>

<html>
 <head>
 </head>
 <body>
 <h1>PHP connect to MySQL</h1>
</body>
</html>