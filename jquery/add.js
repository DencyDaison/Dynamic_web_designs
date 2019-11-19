/*add item*/
  var new_item=document.getElementById('t');
  var c=4;
$(document).ready(function()
{
  $("#").click(function(){

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
});
});
/*remove item*/

      document.getElementById("top").addEventListener("click",function(e)
       {
           var tgt = e.target;
           if (tgt.tagName.toUpperCase() == "LI")
           {
              tgt.parentNode.removeChild(tgt); // or tgt.remove();
            }
        });


        <script>
           function myFunction(elm) {
               $(elm).remove();
           }
           $(document).ready(function() {
               $('#newtext').focus();
           });
        </script>
        <script>
           $(document).ready(function() {
               $('#n').keypress(function(e) {
                   if (e.which == 13) {
                       var newtext = $("#newtext").val();
                       //                taking new text value to variable
                       $(".logDiv").append('<div id="bid" onclick="myFunction(this)">' + newtext + '</div>');
                       //    will generate div with same id
                       $("#newtext").val('');
                   }
               });
           });
        </script>
