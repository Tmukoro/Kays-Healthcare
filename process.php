<?php

if($_SERVER ['REQUEST_METHOD'] == 'POST'){

    $name = $_POST['name'];

    $email = $_POST['email'];

    $phone = $_POST['phoneno'];

    $forum = $_POST['forum'];


    $user =[
        'name'=> $name,

        'email'=> $email,

        'phone'=> $phone,

        'forum'=> $forum
    ];

    $jsonData = file_get_contents("users.json");

    $dataArr = json_decode($jsonData,true);

    if(!is_array($dataArr)){
        $dataArr = [];
    }


    $dataArr[] = $user;

    file_put_contents("users.json", json_encode($dataArr, JSON_PRETTY_PRINT));
  
    echo "User saved in json";

}



?>