setInterval(()=>{
   let date = new Date();
    h =  date.getHours();
    m= date.getMinutes();
    s= date.getSeconds(); 
    hRotation= 30*h + m/2;
    mRotation= 6*m;
    sRotation= 6*s;
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);