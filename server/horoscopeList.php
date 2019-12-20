 
<?php

function showHoroscope($date) {
    $horoscopeArray = array (
        "Aries" => "03-21-04-20",
        "Taurus" => "04-21-05-20",
        "Gemini"=> "05-21-06-20",
        "CANCER"=> "06-21-07-22",
        "Leo"=> "07-23-08-22",
        "Virgo"=> "08-23-09-22",
        "Libra"=>"09-23-10-22",
        "Scorpio"=>"10-23-11-21",
        "Sagittarius"=>"11-22-12-20",
        "Capricorn"=>"12-21-01-19",
        "Aquarius"=>"01-20-02-18",
        "Pisces"=>"2-19-03-20"
    );
    $explodedDate = explode("-", $date);
        $month = $explodedDate[1];
        $day = $explodedDate[2];
        error_log($month);
 
 foreach ($horoscopeArray as $key => $dateString) {
 
        $fromAndToDates = explode("-", $dateString);
        $fromMonth = $fromAndToDates[0];
        $fromDay = $fromAndToDates[1];
        $toMonth = $fromAndToDates[2];
        $toDay = $fromAndToDates[3];
 
 if (
        ($month === $fromMonth && $day >= $fromDay) ||
        ($month === $toMonth && $day <= $toDay)
    ) {
        error_log($key);
    }

}  
}

?>