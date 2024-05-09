let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    alert('Todavía no se ha implementado esta función')
})
function ActClock(){
   let hhmmss=new Date();
   let hours=hhmmss.getHours();
   let minutes=hhmmss.getMinutes();
   let seconds=hhmmss.getSeconds();
   let curr_time="";
   hours = (hours<=9)?("0"+hours):hours;
   minutes = (minutes<=9)?("0"+minutes):minutes;
   seconds=(seconds<=9)? ("0"+seconds):seconds;        
   curr_time = hours+":"+minutes+":" +seconds
   clock = document.getElementById('clock')
   clock.innerHTML=curr_time;
   setInterval("ActClock()",1000);
}
