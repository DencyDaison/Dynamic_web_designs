function namecheck()//name checking function
{
      var name=document.getElementById('name');
          if(name.value.length==0)
            {
              document.getElementById("n").innerHTML ='Field is Required';

            }
          else
            {
                document.getElementById("n").innerHTML =' ';
            }
}
function emailcheck()//email checking function
{
      var em=document.getElementById('email');
       if((em.value.includes("@"))&&(em.value.includes(".")))
       {
           var str1="";
           document.getElementById('em').innerHTML=str1;
       }
       else
        {
           var str1=" Enter valid mail";
           document.getElementById('em').innerHTML=str1;
       }
}

function passwordchecking()//password cheking
{
     var p=document.getElementById('pswd');
     if(p.value.length>=6)
     {
       document.getElementById('pass').innerHTML="";
     }
     else
     {
       var str3="password must contain atleast 6 charecter";
       document.getElementById('pass').innerHTML=str3;
     }
}
function confirmpassword()//confirm password
{
     var t=document.getElementById('rpswd');
     var pa=document.getElementById('pswd');
     tval=t.value;
     paval=pa.value;
          console.log(tval);
          console.log(paval);
     if(tval==paval)//pswd checking
     {
       console.log("Password confirmed");
       document.getElementById('repass').innerHTML="";
     }
     else
     {
       var str4="password mismatch";
            console.log("password mismatch");
       document.getElementById('repass').innerHTML=str4;
     }
  }
  function checkdate()//date checking
  {
        var d=document.getElementById('bday');
        var dt1=d.value;
        var year=Number(dt1.substr(0,4));
        console.log(year);
        var dt = new Date();//get current s/m date
        var yr=dt.getFullYear();//get year
        console.info(yr);
        var diff=yr-year;
        if(diff<=18)
        {
          msg="You need a permission to join.Tick here if yourchild can join:";
          document.getElementById('date').innerHTML=msg;
        }
        else {
          document.getElementById('date').innerHTML="";
        }
  }
  function checkchar()//Check bio character count
  {
         var c=140;
         var x = document.getElementById("bio").value;
         len=x.length;
         c=c-len;
           document.getElementById("short").innerHTML = c;
  }
function vali()//button click
{
    var d=document.getElementById('bbb');
    console.log("REGISTERED SUCCESSFULLY");
}
