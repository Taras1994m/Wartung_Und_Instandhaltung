<?php

// Get the name from the POST parameter
$name = $_POST['name'];

// Get the current date and time
$date = date('Y-m-d H:i:s');

// Save the data to the CSV file
$file = fopen('Wartung_Und_Instandhaltung/Data.csv', 'a');
fputcsv($file, [$name, $date]);
fclose($file);

// Return a success response
echo 'Success';
