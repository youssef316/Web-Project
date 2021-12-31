<?php
session_start();
?>
<?php
$_SESSION['user_name'] = "green";
?>
<?php
if(isset($_SESSION['user_name'])){ // OR isset($_SESSION['user']), if array

  	header('location: first_page.html');
}