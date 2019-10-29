var hr;
var min;
var secs;
//getting a the values of hr min and secs in case of refresh
function getTime(){
    var allcookie = document.cookie;
    var cookieArray = allcookie.split(';');
    for(var i = 0; i < cookieArray.length; i++){
        var name = cookieArray[i].split('=')[0].trim();
        var value = cookieArray[i].split('=')[1];
        if(name === 'hr'){
            hr = value;
        }else if(name === 'min'){
            min = value;
        }else if(name === 'secs'){
            secs = value;
        }
    }
}
function timeCountingFunction(){
   secs = secs - 1;
    if(secs < 1 && !hr < 1 && !min < 1){
        min--;
        secs = 59;
    }else if(min < 1 && !hr < 1){
        hr--;
        min = 59;
    }else if (hr < 1 && secs< 1){
        min--;
        secs = 59;
    }
}
//function on how the timer acts
function timeCounter(){
    if(hr <  0 || min < 0){
        window.clearInterval(intervalID);
        document.getElementById('countdown').innerHTML = 'Timeout';
        redirect();
        //yes();
    }else{
        if(hr < 1 && secs < 10 && min < 10){
            document.getElementById('timer').style.Color.red;
            document.getElementById('countdown').innerHTML = '0' + hr +':0'+min+':0'+secs;
            timeCountingFunction();
        }else if(!min < 10 && secs < 10){
            document.getElementById('countdown').innerHTML = '0' + hr +':'+min+':0'+secs;
            timeCountingFunction();
        }else if(min < 10 && !secs < 10){
            document.getElementById('countdown').innerHTML = '0' + hr +':0'+min+':'+secs;
            timeCountingFunction();
        }else if(hr < 1 && min < 11 && secs < 60){
            document.getElementById('timer').style.Color.red;
            document.getElementById('countdown').innerHTML = '0' + hr +':0'+min+':'+secs;
            timeCountingFunction();
        }else if(min < 10 && secs < 10){
            document.getElementById('countdown').innerHTML = '0' + hr +':0'+min+':'+secs;
            timeCountingFunction();
        }else{
            document.getElementById('countdown').innerHTML = '0' + hr +':'+min+':'+secs;
            timeCountingFunction();
            
        }
    }
    //alert(hr+' '+min+' '+secs);
    document.cookie = 'hr ='+ hr;
    document.cookie = 'min = '+ min;
    document.cookie = 'secs ='+ secs; 
}
getTime();
var intervalID = window.setInterval(timeCounter,1000);