/*var n=document.getElementById('un');
n.onKeypress=updateNameDisplay;
function updateNameDisplay()
{
  document.getElementById('feed').innerHTML=this.value || "??";

}
*/

function display()
{
    var eluname=document.getElementById('un');
    var elNote=document.getElementById('feed');
    var msg=eluname.value;
    elNote.textContent=msg;
    }
var eluname=document.getElementById('un');
//console.log(eluname);
eluname.addEventListener('keypress',display);
