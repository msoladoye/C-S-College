<?php
    require_once 'dataConn.php';
    session_start();
    $options = array();
    $answers = array(
        'a','b','c','d',
        'a','b','c','d',
        'a','b','c','d',
        'a','b','c','d',
        'a','b','c','d'
        );
    $score = 0;
    $scorePersent;
    $id = htmlspecialchars($_COOKIE['id']);
    $first_name = htmlspecialchars($_COOKIE['firstname']);
    $last_name = htmlspecialchars($_COOKIE['lastname']);
    for($i = 1; $i <= 20; $i++){
        $j = $i - 1;
        $options[$j] = htmlspecialchars($_COOKIE['name'.$i]);
        if($options[$j] === $answers[$j]){
            $score = $score + 1;
        }
    }
    $scorePersent = ((($score * 2) / 40) * 100);
    $printPercent = $scorePersent.'%';
    $submitSql = "SELECT * FROM `student_results`";
    $submitQuery = mysqli_query($conn, $submitSql);
    while ($row = mysqli_fetch_array($submitQuery)){
        if($row['id'] === $id && $row['first_name'] === $first_name){
            for($i = 1; $i <= 20; $i++){
                $j = $i - 1;
                $updateSql = "UPDATE `student_resultS` SET `$i` = '$options[$j]' WHERE `id` = '$id'";
                $updateQuery = mysqli_query($conn, $updateSql) or die("<p>could not update options ".  mysqli_error($conn));
            }
            $percentSql = "UPDATE `student_resultS` SET `percentage` = '$printPercent' WHERE `id` = '$id'";
            $percentQuery = mysqli_query($conn, $percentSql) or die("<p>could not update percentage ".  mysqli_error($conn));
        }
    }
    echo '<p> score '. $score;
    echo '<p> percent '. $printPercent;
    echo '<p>UPDATED';
    ?>
<!--html>
    <head>
        
    </head>
    <body>
        <div id="show">
            jh
        </div>
    </body>
    <script>
        var i = 30;
        function redirect(){
            document.getElementById("show").innerHTML = "redirecting to homepage in..." + i;
            i = i - 1;
            /*if (i < 0){
                window.location = "../index.php";
            }*/
        }
        setTimeout(redirect,1000);
        //document.getElementById("show").innerHTML = "redirecting to homepage in...";
        </script>
</html-->