
<?php

    $horoscope = array(
        "Väduren",
        "Oxen",
        "Tvillingarna",
        "Kräftan",
        "Lejonet",
        "Jungfrun",
        "Vågen",
        "Skorpionen",
        "Skytten",
        "Stenbocken",
        "Vattumannen",
        "Fiskarna"
    );


    function showHoroscope($horoscope){
        for($x = 0; $x < count($horoscope); $x++) {
            echo $horoscope[$x];
            echo "<br>";
        };
    };

showHoroscope($horoscope);

?>