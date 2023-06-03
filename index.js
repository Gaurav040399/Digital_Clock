let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("day");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let Month = ["Jan", "Feb","Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Aut", "Nov","Dec"]


setInterval(()=>{
    let currentTime = new Date();
    // console.log(currentTime)
    let dayIndex = currentTime.getDay()
    day.innerHTML = Day[dayIndex]
    date.innerHTML = currentTime.getDate()


    let monthIndex = currentTime.getMonth();
    month.innerHTML = Month[monthIndex];

    year.innerHTML = currentTime.getFullYear()

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    
},1000)