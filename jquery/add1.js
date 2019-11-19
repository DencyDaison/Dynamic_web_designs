
   function myFunction(elm) {
       $(elm).remove();
   }
   $(document).ready(function() {
       $('#newtext').focus();
   });


   $(document).ready(function() {
       $('#newtext').keypress(function(e) {
           if (e.which == 13) {
               var newtext = $("#newtext").val();
               //                taking new text value to variable
               $(".logDiv").append('<div id="bid" onclick="myFunction(this)">' + newtext + '</div>');
               //    will generate div with same id
               $("#newtext").val('');
           }
       });
   });
