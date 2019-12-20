<?php 

session_start();
require './horoscopeList.php' ;
error_log("test");

 
if(isset($_SERVER['REQUEST_METHOD'])){
 
 if($_SERVER['REQUEST_METHOD'] === "POST") {
 
 if(isset($_POST['date'])) {

 
 showHoroscope($_POST['date']);

 echo json_encode($_POST['date']);
 } else {
 

 echo json_encode("name is not set in body");
 }
 
 }else {
 

 echo json_encode("not a POST method");
 }
 
} else {

 echo json_encode("No valid request");
 }
?>