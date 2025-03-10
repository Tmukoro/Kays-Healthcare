<?php

$jsonData = file_get_contents("users.json");

$dataArr = json_decode($jsonData, true);

if(!empty($dataArr)){
    echo "<h1>Users</h1>";

    echo"<ul>";

    foreach($dataArr as $user){

        echo"<li>Name: ".$user['name']. ", Email: ".$user['email']. "PhoneNo: ".$user['phoneno']."forum: ".$user['forum']."</li>";
}

echo"</ul>";

}else{
    echo"No User found!";
}


?>