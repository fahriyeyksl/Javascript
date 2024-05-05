const clock =document.querySelector(".clock");
const tick=()=>{
   const now=new Date();
   const hours=now.getHours();
   const minutes=now.getMinutes();
   const seconds=now.getSeconds();

   const html=
   `
   <span class="content">${hours}</span>
   <span class="nokta">:</span>
   <span class="content">${minutes}</span>
   <span class="nokta">:</span>
   <span class="content">${seconds}</span>
   `
   clock.innerHTML=html;
};

setInterval(tick,1000);
