// Este codigo hace que al seleccionar buscar en el buscador se imprima un mensaje de que no se ha implementado la busqueda.
let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    alert('Todavía no se ha implementado esta función')
});

// Este codigo devuelve la hora actual del equipo.
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
}
ActClock();
setInterval("ActClock()",1000);
// Este codigo escribe en todas las clases curr-date el día de la semana y el dia del mes.
function GetDayName(dayIndex) {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[dayIndex];
}
function ShowToday() {
const today = new Date();
const day_name = GetDayName(today.getDay());
const day_number = today.getDate();
const formatted_day = `${day_name} ${day_number}`;
const day_elements = document.querySelectorAll('.curr-date');
day_elements.forEach(element => {
    element.textContent = formatted_day;
});
}

// Este codigo escribe el numero del día aumentandolo de a 1 cada vez que aparece.
const today = new Date();
let day_number = today.getDate();
const day_elements = document.querySelectorAll('.day-of-week');
day_elements.forEach(element => {
    element.textContent = `Día ${day_number}`;
    day_number += 1;

    if (day_number > new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()) {
        day_number = 1;
    }
});