// !Count Down Timer 

const endDate= '1 July 2023 12:00 PM';
const date= document.querySelectorAll(".day");
const clock= ()=>{
    const newDate= new Date(endDate);
    const RecentDate= new Date();
    const diff= (newDate-RecentDate)/1000;
    if(diff<0)return;
    date[0].innerHTML=Math.floor(diff/3600/24);
    date[1].innerHTML=Math.floor((diff/3600)%24);
    date[2].innerHTML=Math.floor((diff/60)%60);
    date[3].innerHTML=Math.floor((diff)%60);
}
clock();
setInterval(()=>{
    clock()
},1000
);

