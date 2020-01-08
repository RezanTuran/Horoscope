<?php 
session_start();
if(isset($_SERVER['REQUEST_METHOD'])) {
    if($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        if(isset($_SESSION["horoscope"])) {
            unset($_SESSION["horoscope"]);
            echo json_encode(true);
        } else {
            echo json_encode(false);
        }
    }else { 
        echo json_encode("not a POST method");
    }
    
} else {
    echo json_encode("No valid request");
}
?>