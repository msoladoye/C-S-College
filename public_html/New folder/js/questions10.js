/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//question one
function q1Ans(option){
    selection[0] = document.getElementById(option).value;
    document.getElementById('l1').style = 'background-color: greenyellow;';
    //alert(selection[0]);
}
function q1(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>1)</b> mary goes to school.......bus.</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q1Ans(`a`)"/><p><b>[A]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q1Ans(`b`)"/><p><b>[B]:</b> ON </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q1Ans(`c`)"/><p><b>[C]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q1Ans(`d`)"/><p><b>[D]:</b> through </p></div>\n\
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
//question two
function q2Ans(option){
    selection[1] = document.getElementById(option).value;
    document.getElementById('l2').style = 'background-color: greenyellow';
    //alert(selection[1]);
}
function q2(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>2)</b> The company deals......computer software </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q2Ans(`a`)"/><p><b>[A]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q2Ans(`b`)"/><p><b>[B]:</b> for </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q2Ans(`c`)"/><p><b>[C]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q2Ans(`d`)"/><p><b>[D]:</b> by </p></div>\n\
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
//question three
function q3Ans(option){
    selection[2] = document.getElementById(option).value;
    document.getElementById('l3').style = 'background-color: greenyellow';
    //alert(selection[2]);
}
function q3(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>3)</b> Yesterday, my father asked me.......</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q3Ans(`a`)"/><p><b>[A]:</b> if i am tired </p></div>\n\
//                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q3Ans(`b`)"/><p><b>[B]:</b> are you tird?</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q3Ans(`c`)"/><p><b>[C]:</b> whether i was tired?</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q3Ans(`d`)"/><p><b>[D]:</b> if i was tired </p></div>\n\
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
//question four
function q4Ans(option){
    selection[3] = document.getElementById(option).value;
    document.getElementById('l4').style = 'background-color: greenyellow';
    //alert(selection[3]);
}
function q4(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>4)</b> He travelled......last week</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q4Ans(`a`)"/><p><b>[A]:</b> some what </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q4Ans(`b`)"/><p><b>[B]:</b> some where </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q4Ans(`c`)"/><p><b>[C]:</b> some what</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q4Ans(`d`)"/><p><b>[D]:</b> some where</p></div>\n\
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
//question five
function q5Ans(option){
    selection[4] = document.getElementById(option).value;
    document.getElementById('l5').style = 'background-color: greenyellow';
    //alert(selection[5]);
}
function q5(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>5)</b> Parents should be good example ........ their children</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q5Ans(`a`)"/><p><b>[A]:</b> to </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q5Ans(`b`)"/><p><b>[B]:</b> for </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q5Ans(`c`)"/><p><b>[C]:</b> by </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q5Ans(`d`)"/><p><b>[D]:</b> in </p></div>\n\
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
//question six
function q6Ans(option){
    selection[5] = document.getElementById(option).value;
    document.getElementById('l6').style = 'background-color: greenyellow;';
    //alert(selection[5]);
}
function q6(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>6)</b> Lima does not like walking in the dark,.....</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q6Ans(`a`)"/><p><b>[A]:</b> has she </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q6Ans(`b`)"/><p><b>[B]:</b> does she </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q6Ans(`c`)"/><p><b>[C]:</b> will she </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q6Ans(`d`)"/><p><b>[D]:</b> did she </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[5] === 'a'){
        document.getElementById('a').checked = true;
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
//question seven
function q7Ans(option){
    selection[6] = document.getElementById(option).value;
    document.getElementById('l7').style = 'background-color: greenyellow';
    //alert(selection[6]);
}
function q7(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>7)</b> The gaurd spent all the nightnpacing.......</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q7Ans(`a`)"/><p><b>[A]:</b> to and fro </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q7Ans(`b`)"/><p><b>[B]:</b> from and to </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q7Ans(`c`)"/><p><b>[C]:</b> fro and to </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q7Ans(`d`)"/><p><b>[D]:</b> to and from </p></div>\n\
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
//question eight
function q8Ans(option){
    selection[7] = document.getElementById(option).value;
    document.getElementById('l8').style = 'background-color: greenyellow';
    //alert(selection[7]);
}
function q8(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>8)</b> She traced her family history......matrilineal descent</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q8Ans(`a`)"/><p><b>[A]:</b> at</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q8Ans(`b`)"/><p><b>[B]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q8Ans(`c`)"/><p><b>[C]:</b> by </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q8Ans(`d`)"/><p><b>[D]:</b> with </p></div>\n\
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
//question nine
function q9Ans(option){
    selection[8] = document.getElementById(option).value;
    document.getElementById('l9').style = 'background-color: greenyellow';
    //alert(selection[8]);
}
function q9(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>9)</b> The chairman is too much....an idealist for this government</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q9Ans(`a`)"/><p><b>[A]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q9Ans(`b`)"/><p><b>[B]:</b> from </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q9Ans(`c`)"/><p><b>[C]:</b> about </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q9Ans(`d`)"/><p><b>[D]:</b> of </p></div>\n\
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
//question ten
function q10Ans(option){
    selection[9] = document.getElementById(option).value;
    document.getElementById('l10').style = 'background-color: greenyellow';
    //alert(selection[9]);
}
function q10(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>10)</b> My mother was.....annoyed with me for coming late </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q10Ans(`a`)"/><p><b>[A]:</b> just </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q10Ans(`b`)"/><p><b>[B]:</b> very </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q10Ans(`c`)"/><p><b>[C]:</b> neither </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q10Ans(`d`)"/><p><b>[D]:</b> hotly </p></div>\n\
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