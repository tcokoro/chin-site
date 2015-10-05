<?php
	// Only process POST requests.
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// Get the form fields and remove whitespace. 
		$name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r", "\n"), array(" "," "),$name);
		$email

	}
 ?>

