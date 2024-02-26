<?php
// Connection values to our database
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "user_data2"; //Database name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Conditional that checks if connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// retrival and sanitization of data from form
$name = $conn->real_escape_string($_POST['name']);
$lastname = $conn->real_escape_string($_POST['lastname']);
$occupation = $conn->real_escape_string($_POST['occupation']);
$email = $conn->real_escape_string($_POST['email']);
$phone = $conn->real_escape_string($_POST['phonenumber']);


//Inserting data into table called users
$sql = "INSERT INTO users (name, lastname,occupation email, phonenumber) VALUES ('$name', '$lastname','$occupation' '$email', '$phonenumber')";


//Check if SQL query was successful
if ($conn->query($sql) === TRUE) {
    // and if it is, then we will display a message to the user
    echo "New record created successfully";
} else {
    // if it is not, then we will display an error message to the user
    echo "Error: " . $sql . "<br>" . $conn->error;
}
//then finally close the connection to free up resources.
$conn->close();
?>