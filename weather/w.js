var input = document.querySelector('.input_text');//query selector for return first element that match to specified element
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name)//button click function take place
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e70d60f32ef88dca155cc098717c9c52')//input value to site
    .then(response => response.json())//array of response
    .then(data =>
    {
        var tempValue = data['main']['temp'];//get the temperatue
        var nameValue = data['name'];//get the cityname
        var descValue = data['weather'][0]['description'];//get descvalue
        main.innerHTML = nameValue;//put the result value
        desc.innerHTML = "Desc - "+descValue;//put desc value in html

        var x  = 9/5;
        var f = tempValue * 9/5 + 32 ;//converting to fahrenheat
        console.log(f);//print f into consloe
        temp.innerHTML = "Temp - "+f+' F';//print into html
        input.value ="";
    })
 .catch(err => alert("Wrong city name!"));//catch error
})




























/*$(function(){
var games = ["Kottayam","Kochi","Kozhikode","Mumbai","Chennai","Kannur","Jaipur","Kollam","thrissur"];

$("#autocomplete").autocomplete({
source: games
});
});*/
