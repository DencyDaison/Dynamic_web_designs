/*add item*/
  var new_item=document.getElementById('t');
  var c=4;
function addItem()
{

    var list=document.createElement('li');
    list.setAttribute('class','hot');
    var newText=document.createTextNode(new_item.value);
    list.appendChild(newText);
    var pos=document.getElementsByTagName('ul')[0];
    pos.appendChild(list);
    c=c+1;
    var count=document.getElementById('cnt');
    count.textContent=c;
    t.value=' ';
}
/*remove item*/

      document.getElementById("top").addEventListener("click",function(e)
       {
           var tgt = e.target;
           if (tgt.tagName.toUpperCase() == "LI")
           {
              tgt.parentNode.removeChild(tgt); // or tgt.remove();
            }
        });
