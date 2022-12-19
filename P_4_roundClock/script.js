
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");


setInterval(()=>{
    let t = new Date();
    let m = (t.getMinutes())*6;
    let h = (t.getHours()%12)*30 + m/12;
    let s = (t.getSeconds())*6;

    hour.style.transform = `rotate(${h}deg)`;
    minute.style.transform = `rotate(${m}deg)`;
    second.style.transform = `rotate(${s}deg)`;

},1000);
