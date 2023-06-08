<?php

$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$msg = $_POST['message'];

$to = 'layerdrops@gmail.com';
$subject = 'Meipaly User Query';

$message = '<strong>Name : </strong>'.$f_name.' '. $l_name .'<br/><br/>';
$message .= '<strong>Email : </strong>'.$email.'<br/><br/>';
if($phone != ''):
    $message .= '<strong>Phone : </strong>'.$phone.'<br/><br/>';
endif;

$message .= '<br/>'.$msg.'<br/>';


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$email.'>' . "\r\n";

mail($to,$subject,$message,$headers);
echo 1;
exit();