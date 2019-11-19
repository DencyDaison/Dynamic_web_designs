

function display()//function display
{
    var eluname=document.getElementById('un');//get un id
    var elNote=document.getElementById('feed');//get feedbak id
    var msg=eluname.value;
    elNote.textContent=msg;
    }
var eluname=document.getElementById('un');
//console.log(eluname);
eluname.addEventListener('keypress',display);//display
