<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

$name = $_POST['name'];

$email = $_POST['email'];

$number = $_POST['phoneno'];

$forum = $_POST['forum'];


$conn = new mysqli('localhost', 'root', '', 'users' );

if ($conn->connect_error) {
    die('Connection error!'. $conn->connect_error);
}else{
    $stmt = $conn->prepare("INSERT INTO info(Name, Email, Number, Forum)VALUES(?, ?, ?, ?)");
    $stmt->bind_param("ssis", $name, $email, $number, $forum);
    $stmt->execute();
    echo "Your feedback has been registered";
    $stmt ->close();
    $conn ->close();
}

}






?>