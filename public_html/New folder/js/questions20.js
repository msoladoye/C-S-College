/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//question eleven
function q11Ans(option){
    selection[10] = document.getElementById(option).value;
    document.getElementById('l11').style = 'background-color: greenyellow;';
    //alert(selection[0]);
}
function q11(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>11)</b> mary goes to school....bus</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q11Ans(`a`)"/><p><b>[A]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q11Ans(`b`)"/><p><b>[B]:</b> on </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q11Ans(`c`)"/><p><b>[C]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q11Ans(`d`)"/><p><b>[D]:</b> by </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[10] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selection[10] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[10] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[10] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question twelve
function q12Ans(option){
    selection[11] = document.getElementById(option).value;
    document.getElementById('l12').style = 'background-color: greenyellow';
}
function q12(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>12)</b> The number of stores will be increased..... twenty to thirty </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q12Ans(`a`)"/><p><b>[A]:</b> on</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q12Ans(`b`)"/><p><b>[B]:</b> from</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q12Ans(`c`)"/><p><b>[C]:</b> at</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q12Ans(`d`)"/><p><b>[D]:</b> into</p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[11] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[11] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[11] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[11] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question thirteen
function q13Ans(option){
    selection[12] = document.getElementById(option).value;
    document.getElementById('l13').style = 'background-color: greenyellow';
}
function q13(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>13)</b> .....bomb had earlier been diffuse </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q13Ans(`a`)"/><p><b>[A]:</b> A leaf </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q13Ans(`b`)"/><p><b>[B]:</b> An alive </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q13Ans(`c`)"/><p><b>[C]:</b> A life </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q13Ans(`d`)"/><p><b>[D]:</b> A live</p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[12] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selection[12] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[12] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[12] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question fourteen
function q14Ans(option){
    selection[13] = document.getElementById(option).value;
    document.getElementById('l14').style = 'background-color: greenyellow';
}
function q14(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>14)</b> The mechanic did not tell me the brakes..... bad</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q14Ans(`a`)"/><p><b>[A]:</b> were</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q14Ans(`b`)"/><p><b>[B]:</b> are </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q14Ans(`c`)"/><p><b>[C]:</b> is </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q14Ans(`d`)"/><p><b>[D]:</b> was </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[13] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[13] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[13] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[13] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question fiffteeen
function q15Ans(option){
    selection[14] = document.getElementById(option).value;
    document.getElementById('l15').style = 'background-color: greenyellow';
}
function q15(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>15)</b> Tayo could have supplied the goods but it was..... into two</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q15Ans(`a`)"/><p><b>[A]:</b> slitting </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q15Ans(`b`)"/><p><b>[B]:</b> split </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q15Ans(`c`)"/><p><b>[C]:</b> splited </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q15Ans(`d`)"/><p><b>[D]:</b> spilts </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[14] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[14] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[14] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[14] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
function q16Ans(option){
    selection[15] = document.getElementById(option).value;
    document.getElementById('l16').style = 'background-color: greenyellow;';
    //alert(selection[0]);
}
function q16(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>16)</b> There is no logic.....any of their claims </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q16Ans(`a`)"/><p><b>[A]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q16Ans(`b`)"/><p><b>[B]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q16Ans(`c`)"/><p><b>[C]:</b> from </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q16Ans(`d`)"/><p><b>[D]:</b> up </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[15] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selection[15] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[15] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[15] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question seventeen
function q17Ans(option){
    selection[16] = document.getElementById(option).value;
    document.getElementById('l17').style = 'background-color: greenyellow';
}
function q17(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>17)</b> The player sat on the bench.....the match lasted </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q17Ans(`a`)"/><p><b>[A]:</b> since </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q17Ans(`b`)"/><p><b>[B]:</b> when </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q17Ans(`c`)"/><p><b>[C]:</b> that</p></div>\n\\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q17Ans(`d`)"/><p><b>[D]:</b> that</p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[16] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[16] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[16] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[16] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question eighteen
function q18Ans(option){
    selection[17] = document.getElementById(option).value;
    document.getElementById('l18').style = 'background-color: greenyellow';
}
function q18(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>18)</b> He was presnt at the party,...... </section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q18Ans(`a`)"/><p><b>[A]:</b> did he</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q18Ans(`b`)"/><p><b>[B]:</b> could he</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q18Ans(`c`)"/><p><b>[C]:</b> did he</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q18Ans(`d`)"/><p><b>[D]:</b> did he</p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[17] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selection[17] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[17] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[17] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question nineteen
function q19Ans(option){
    selection[18] = document.getElementById(option).value;
    document.getElementById('l19').style = 'background-color: greenyellow';
}
function q19(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>19)</b> she arrived.....air for the occasssion</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q19Ans(`a`)"/><p><b>[A]:</b> for</p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q19Ans(`b`)"/><p><b>[B]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q19Ans(`c`)"/><p><b>[C]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q19Ans(`d`)"/><p><b>[D]:</b> by </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[18] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[18] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[18] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[18] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}
//question tweenty
function q20Ans(option){
    selection[19] = document.getElementById(option).value;
    document.getElementById('l20').style = 'background-color: greenyellow';
}
function q20(){
    document.getElementById('questions').innerHTML = '\n\
        <section style="float: left; width: 40%;border: 1px solid black; height: 380px; font-size: 20px; padding: 10px 5px 5px 5px;">\n\
            <b>20)</b> The company deals......computer softwear</section>\n\
                            <section style="float: right; width: 58%;border: 1px solid black; height: 380px;">\n\
                                <section style="padding: 5%;">\n\
                                    <div class="option_row"><input type="radio" name="option" value="a" id="a" onclick="q20Ans(`a`)"/><p><b>[A]:</b> with </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="b" id="b" onclick="q20Ans(`b`)"/><p><b>[B]:</b> for </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="c" id="c" onclick="q20Ans(`c`)"/><p><b>[C]:</b> in </p></div>\n\
                                    <div class="option_row"><input type="radio" name="option" value="d" id="d" onclick="q20Ans(`d`)"/><p><b>[D]:</b> to </p></div>\n\
                                </section>\n\
                            </section>';
    if(selection[19] === 'a'){
        document.getElementById('a').checked.s;
    }else if(selection[19] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selection[19] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selection[19] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
}