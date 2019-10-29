<?php
    session_start();
?>
<html>
    <head>
        <script>
            var selection = [19];
            function redirect(){
                window.location = "submit.php";
            }
        </script>
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/questions10.js" type="text/javascript"></script>
        <script src="js/questions20.js" type="text/javascript"></script>
        <script src="js/time.js" type="text/javascript"></script>
        <title>Examination Page</title>
        
        <style>
            body{
                padding-top: 3%;
            }
            .option_row > input[type="radio"]{
                height: 10%;
                width: 50px;;
            }
            .option_row > p{
                width: 80%;
                height: 45px;
                position: relative;
                left: 10%;
                top: -40px;
                border-bottom: 1px solid grey;
            }
        </style>
    </head>
    <body>
        <section class="container-fluid">
            <aside class="nav navbar navbar-left" style=" width: 15%; height: 100%; font-family: cursive;border: 0px solid red;">
                <section style="width: 100%; height: 30%; background-color: blue;">
                    <img src="image/<?php echo $_SESSION['passport'];?>.jpg" alt="<?php echo $_SESSION['passport'];?> PASSPORT" style=" width: 100%; height: 100%;">
                </section>
                <span>STUDENT NAME</span> <br/>
                <section class="bg bg-info" style="width: 100%; height: 40px; padding: 3% 0% 0% 5%; border: 1px solid black;"><span class="text-justify text"><?php echo @$_SESSION['name'];?></span></section>
                <span>ALLOWED TIME</span> <br/>
                <section class="bg bg-primary" style="width: 100%; height: 40px; border: 1px solid black;  padding: 3% 0% 0% 5%;"><span class="glyphicon glyphicon-time"></span> 00:30:00</section>
                <span>TIME LEFT</span> <br/>
                <section id="timer" class="bg bg-danger" style="width: 100%; height: 40px; border: 1px solid black;  padding: 3% 0% 0% 5%;"><span class="glyphicon glyphicon-time"></span><span id="countdown">00:39:38</span></section>
                <br/>
                <a href="index.php" class="btn btn-block btn-danger"style="width: 100%; height: 40px; border: 1px solid black;"><span class="glyphicon glyphicon-log-out"> LOGOUT</span></a>
            </aside>
            <section class="container-fluid" style="width: 85%; float: right">
                <div style="text-align: center; background-color: gray; width: 100%; "> EXAM TITLE: BIOLOGY TYPE C</div>
                <section style="padding-left: 5px;border: 1px solid black;">
                    <div>ALL QUESTION CARRY 10marks</div>
                    <section style="margin-left: -6px; border: 0px solid black; height: 400px;">
                        <div style="width: 95%; margin: auto;" id="questions">
                            <script>q1();</script>
                        </div>
                        <ul class="pagination pagination-lg">
                            <li><a href="#" id="l1" onclick="q1()">1</a></li>
                            <li><a href="#" id="l2" onclick="q2()">2</a></li>
                            <li><a href="#" id="l3" onclick="q3()">3</a></li>
                            <li><a href="#" id="l4" onclick="q4()">4</a></li>
                            <li><a href="#" id="l5" onclick="q5()">5</a></li>
                            <li><a href="#" id="l6" onclick="q6()">6</a></li>
                            <li><a href="#" id="l7" onclick="q7()">7</a></li>
                            <li><a href="#" id="l8" onclick="q8()">8</a></li>
                            <li><a href="#" id="l9" onclick="q9()">9</a></li>
                            <li><a href="#" id="l10" onclick="q10()">10</a></li>
                            <li><a href="#" id="l11" onclick="q11()">11</a></li>
                            <li><a href="#" id="l12" onclick="q12()">12</a></li>
                            <li><a href="#" id="l13" onclick="q13()">13</a></li>
                            <li><a href="#" id="l14" onclick="q14()">14</a></li>
                            <li><a href="#" id="l15" onclick="q15()">15</a></li>
                            <li><a href="#" id="l16" onclick="q16()">16</a></li>
                            <li><a href="#" id="l17" onclick="q17()">17</a></li>
                            <li><a href="#" id="l18" onclick="q18()">18</a></li>
                            <li><a href="#" id="l19" onclick="q19()">19</a></li>
                            <li><a href="#" id="l20" onclick="q20()">20</a></li>
                        </ul>
                        <section>
                            <button class="btn btn-block btn-primary" style="width: 80%; margin-left: 10%;" onclick="submitButton()">SUMBIT</button>
                        </section>
                    </section>
                </section>
            </section>
        </section>
        <script>
            function submitButton(){
                var j = 1;
                for(var i = 0; i <= 20; i++){
                    document.cookie = "name"+ j +"=" + selection[i];
                    j += 1;
                }
                redirect();
            }
        </script>
    </body>
</html>