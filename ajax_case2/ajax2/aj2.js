  var xhr=new XMLHttpRequest();
  xhr.open('GET','aj2.json');
  xhr.onload = function() {
  responseObject = JSON.parse(xhr.responseText);
  var newContent = '';
        for(var i=0;i<responseObject.images.length;i++)
        {
            newContent+='<div id=mydiv>';
              newContent += '<img src="' + responseObject.images[i].img1 + '"/> ';
            newContent+='</div>';


        }
            document.getElementById('mydiv').innerHTML=newContent;
          };
xhr.send(null);
