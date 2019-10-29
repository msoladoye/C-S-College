<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
    session_start();
?>
<html>
    <head lang="en">
        <title>LOGIN PAGE</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script>
            document.cookie = 'hr =' + 0;
            document.cookie = 'min =' + 29;
            document.cookie = 'secs =' + 59;
        </script>
        <style>
            body{
                width: 100%;
                height: 100%;
                margin: auto;
                background-color: black;
            }
            #next-container{
                background: white; 
                width: 70%;
                height: 100%;
                margin-top: 4%;
                border-radius: 10%;
            }
            form{
                background: whitesmoke; 
                font-family: monospace; 
                padding: 5%;
            }
            input{
                margin: 4%;
            }
            input[type="submit"]{
                width: 100%;
                margin-top: 2%;
                margin-bottom: 2%;
            }
        </style>
    </head>
    <body>
        <section class="container-fluid">
            <section class="container" id="next-container">
                <section class="row">
                    <section class="col-sm-6">
                        <img src="image/logo_pure_water_0.jpg" alt="logo" width="100%;" style="border-radius: 10%;">
                    </section>
                    <section class="col-sm-6" style="margin-top: 10%;">
                        <form action="login.php" method="POST" enctype="multipart/form-data">
                            <span class="text-warning bg bg-danger"><?php echo @$_SESSION['erorr'];?></span>
                            <input type="text" name="firstName" placeholder="First Name" required/><br/>
                            <span class="text-primary"style="font-size: 10px; padding-left: 5%;">First name is required</span><br/>
                            <input type="password" name="password" placeholder="Password" required/><br/>
                            <input class="btn btn-group-lg btn-success btn-lg" type="submit" name="submit" value="SUBMIT">
                            <article><a href="#">forget password</a></article>
                        </form>
                        <div>
                            <h5 style="font-size: 9; margin-top: 0px; color: red;">NOTE That:</h5>
                            <i>
                                <ul>
                                 <li><font color="red">Do not refresh page at any point during examination</font></li>
                                    <li> Options will be submitted immediately the time is up</li>
                                    <li> Student password required here is the same as the password used to log in to the school portal.</li>
                                    <li> Choose either A,B,C or D among the options</li>
                                    <li> when you are through before time is up, click on the submit button, and click YES to submit or NO id otherwise</li>
                                </ul>
                            </i>
                        </div>
                    </section>
                </section>
                <section class="row">
                    <section class="col-sm-6" style="padding-left: 10%;">copyright soladoyeolaOS</section>
                    <section class="col-sm-6" style="text-align: center; margin-top: 10px;">&COPY; 2017-2018</section>
                </section>
            </section>
        </section>
    </body>
</html>
<?php 
    unset($_SESSION['erorr']);