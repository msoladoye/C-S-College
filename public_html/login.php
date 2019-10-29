<?php
    require_once 'dataConn.php';
    session_start();
    if(isset($_POST['submit'])){
        $username = strtoupper(htmlspecialchars($_REQUEST['firstName']));
        $password = strtoupper(htmlspecialchars($_REQUEST['password']));
        $sql = 'SELECT * FROM `student_information`';
        $query = mysqli_query($conn, $sql);
        $found = 'no';
        //$rowl = mysqli_fetch_assoc($query) or die('unable to serach db'.  mysqli_error($conn));
        while ($rowl = mysqli_fetch_array($query)) {
            if($rowl['first_Name'] === $username && $rowl['password'] === $password){
                $found = 'yes';
                $id = $rowl['id'];
                $firstname = $rowl['first_Name'];
                $lastname = $rowl['last_Name'];
                $othername = $rowl['other_Name'];
                setcookie("firstname", $firstname);
                setcookie("lastname", $lastname);
                setcookie("id", $id);
                $_SESSION['name'] = $lastname.' '.$username;
                $_SESSION['passport'] = $othername;
                $num = rand(1, 4);
                if($num === 1){
                    header("location: typea/loggedin.php");
                }else if($num === 2){
                    header("location: typeb/loggedin.php");                    
                }else if($num === 3){
                    header("location: typec/loggedin.php");                    
                }else{
                    header("location: typed/loggedin.php");
                }
                //echo 'cookie says '.$_COOKIE['post'];
            }
        }
        if($found === 'no'){
            $_SESSION['erorr'] = "invalid username or password";
            header("location: index.php");
            echo '<p>no';
        }
    }  else {
        echo 'inlegal file path access';
}
