<?php
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '';
    $dbName = "cscollege";
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbName) or die('unable to connect now retry later'.mysqli_error_list($conn));
    //$dbCreate = 'CREATE DATABASE IF NOT EXISTS `C&SCollege`';
    //$dbQuery = mysqli_query($conn, $dbCreate);
    //$dbNameSelect = mysqli_select_db($conn, $dbName);
    /*$student_results_sql = 'CREATE TABLE `c&scollege`.`student_results`'
            . ' ( `id` INT(20) NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(25) NOT NULL , `last_name` VARCHAR(25) NOT NULL ,'
            . ' `1` VARCHAR(1) NOT NULL , `2` VARCHAR(1) NOT NULL , `3` VARCHAR(1) NOT NULL , `4` VARCHAR(1) NOT NULL , `5`'
            . ' VARCHAR(1) NOT NULL , `6` VARCHAR(1) NOT NULL , `7` VARCHAR(1) NOT NULL , `8` VARCHAR(1) NOT NULL , `9` VARCHAR(1) NOT NULL ,'
            . ' `10` VARCHAR(1) NOT NULL , `11` VARCHAR(1) NOT NULL , `12` VARCHAR(1) NOT NULL , `13` VARCHAR(1) NOT NULL , `14` VARCHAR(1) NOT NULL ,'
            . ' `15` VARCHAR(1) NOT NULL , `16` VARCHAR(1) NOT NULL , `17` VARCHAR(1) NOT NULL , `18` VARCHAR(1) NOT NULL , `19` VARCHAR(1) NOT NULL ,'
            . ' `20` VARCHAR(1) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;';
    //$student_results_query = mysqli_query($conn, $student_results_sql) or die('table not created'.  mysqli_error($conn));
    
    $student_information_sql = 'CREATE TABLE `student_information` (
    `id` int(100) NOT NULL AUTO_INCREMENT,
    `first_Name` varchar(15) NOT NULL,
    `last_Name` varchar(30) NOT NULL,
    `Other_name` varchar(10) NOT NULL,
    `sex` varchar(1) NOT NULL,
    `class` varchar(25) NOT NULL,
    `password` varchar(25) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;';
    //$student_information_query = mysqli_query($conn, $student_information_sql) or die('table not created'.  mysqli_error($conn));
    
    $student_results_insert = "INSERT INTO `student_results` (`id`, `first_name`, `last_name`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`)"
            . "VALUES (NULL, 'ENIOLA', 'AJIBOYE', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),"
            . "(NULL, 'AHMEN', 'IBRAHIM', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');"or die("could not inert resslt".  mysqli_error($conn));
    
    mysqli_query($conn, $student_results_insert);
    $student_information_insert = "INSERT INTO `student_information` (`id`, `first_Name`, `last_Name`, `Other_name`, `sex`, `class`, `password`)"
            . "VALUES (NULL, 'ENIOLA', 'AJIBOYE', 'OYINDAMOLA', 'F', 'SS3', 'ADMIN'),"
            . "(NULL, 'AHMAD', 'IBRAHIM', 'OLAREWAJU', 'M', 'SS3', 'AHIBRA');" 
            or die("could not insert informatiom".  mysqli_error($conn));
    mysqli_query($conn, $student_information_insert);
    echo "all added";
    //echo'connected';*/
    