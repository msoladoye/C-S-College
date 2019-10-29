/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//question eleven
function q1Ans(option){
    selection[0] = document.getElementById(option).value;
    document.getElementById('l1').style = 'background-color: greenyellow;';
    //alert(selection[0]);
}
function q1(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>1)</b> What paper type are you writting?</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q1Ans(`a`)"/><p><b>[A]:</b> TYPE A </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q1Ans(`b`)"/><p><b>[B]:</b> TYPE B </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q1Ans(`c`)"/><p><b>[C]:</b> TYPE C </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q1Ans(`d`)"/><p><b>[D]:</b> TYPE D </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[0] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selection[0] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[0] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[0] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question twelve
function q2Ans(option){
    selection[1] = document.getElementById(option).value;
    document.getElementById('l2').style = 'background-color: greenyellow';
}
function q2(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>2)</b> The number of stores will be increased..... twenty to thirty </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q2Ans(`a`)"/><p><b>[A]:</b> on</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q2Ans(`b`)"/><p><b>[B]:</b> from</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q2Ans(`c`)"/><p><b>[C]:</b> at</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q2Ans(`d`)"/><p><b>[D]:</b> into</p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[1] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[1] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[1] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[1] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question thirteen
function q3Ans(option){
    selection[2] = document.getElementById(option).value;
    document.getElementById('l3').style = 'background-color: greenyellow';
}
function q3(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>3)</b> .....bomb had earlier been diffuse </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q3Ans(`a`)"/><p><b>[A]:</b> A leaf </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q3Ans(`b`)"/><p><b>[B]:</b> An alive </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q3Ans(`c`)"/><p><b>[C]:</b> A life </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q3Ans(`d`)"/><p><b>[D]:</b> A live</p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[2] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selection[2] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[2] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[2] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question fourteen
function q4Ans(option){
    selection[3]= document.getElementById(option).value;
    document.getElementById('l4').style = 'background-color: greenyellow';
}
function q4(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>4)</b> The mechanic did not tell me the brakes..... bad</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q4Ans(`a`)"/><p><b>[A]:</b> were</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q4Ans(`b`)"/><p><b>[B]:</b> are </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q4Ans(`c`)"/><p><b>[C]:</b> is </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q4Ans(`d`)"/><p><b>[D]:</b> was </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[3] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[3] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[3] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[3] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question fiffteeen
function q5Ans(option){
    selection[4] = document.getElementById(option).value;
    document.getElementById('l5').style = 'background-color: greenyellow';
}
function q5(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>5)</b> Tayo could have supplied the goods but it was..... into two</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q5Ans(`a`)"/><p><b>[A]:</b> slitting </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q5Ans(`b`)"/><p><b>[B]:</b> split </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q5Ans(`c`)"/><p><b>[C]:</b> splited </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q5Ans(`d`)"/><p><b>[D]:</b> spilts </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[4] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[4] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[4] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[4] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
function q6Ans(option){
    selection[5] = document.getElementById(option).value;
    document.getElementById('l6').style = 'background-color: greenyellow;';
    //alert(selection[0]);
}
function q6(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>6)</b> There is no logic.....any of their claims </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q6Ans(`a`)"/><p><b>[A]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q6Ans(`b`)"/><p><b>[B]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q6Ans(`c`)"/><p><b>[C]:</b> from </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q6Ans(`d`)"/><p><b>[D]:</b> up </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[5] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selection[5] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[5] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[5] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question seventeen
function q7Ans(option){
    selection[6] = document.getElementById(option).value;
    document.getElementById('l7').style = 'background-color: greenyellow';
}
function q7(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>7)</b> The player sat on the bench.....the match lasted </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q7Ans(`a`)"/><p><b>[A]:</b> since </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q7Ans(`b`)"/><p><b>[B]:</b> when </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q7Ans(`c`)"/><p><b>[C]:</b> that</p></div>\n\\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q7Ans(`d`)"/><p><b>[D]:</b> that</p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[6] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[6] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[6] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[6] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question eighteen
function q8Ans(option){
    selection[7] = document.getElementById(option).value;
    document.getElementById('l8').style = 'background-color: greenyellow';
}
function q8(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>8)</b> He was presnt at the party,...... </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q8Ans(`a`)"/><p><b>[A]:</b> did he</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q8Ans(`b`)"/><p><b>[B]:</b> could he</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q8Ans(`c`)"/><p><b>[C]:</b> did he</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q8Ans(`d`)"/><p><b>[D]:</b> did he</p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[7] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selection[7] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[7] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[7] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question nineteen
function q9Ans(option){
    selection[8] = document.getElementById(option).value;
    document.getElementById('l9').style = 'background-color: greenyellow';
}
function q9(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>9)</b> she arrived.....air for the occasssion</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q9Ans(`a`)"/><p><b>[A]:</b> for</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q9Ans(`b`)"/><p><b>[B]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q9Ans(`c`)"/><p><b>[C]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q9Ans(`d`)"/><p><b>[D]:</b> by </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[8] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[8] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[8] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[8] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question tweenty
function q10Ans(option){
    selection[9] = document.getElementById(option).value;
    document.geElementById('l10').style = 'background-color: greenyellow';
}
function q10(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>10)</b> The company deals......computer softwear</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q10Ans(`a`)"/><p><b>[A]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q10Ans(`b`)"/><p><b>[B]:</b> for </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q10Ans(`c`)"/><p><b>[C]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q10Ans(`d`)"/><p><b>[D]:</b> to </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[9] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[9] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[9] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[9] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}