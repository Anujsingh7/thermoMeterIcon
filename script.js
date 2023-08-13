/* <i class="fa-light fa-temperature-quarter"></i>
<i class="fa-light fa-temperature-half"></i> */

const tempLoad =()=>{
    let temp=document.getElementById('temp');
    temp.innerHTML=` <span class="fa-light fa-temperature-empty" style="color:yellow"></span>`;
    
    setTimeout(() => {
        
        temp.innerHTML=` <span class="fa-light fa-temperature-quarter"></span>`;
    },1000);
    setTimeout(() => {
        
        temp.innerHTML=` <span class="fa-light fa-temperature-half"></span>`;
    },2000);
    setTimeout(() => {
        
        temp.innerHTML=` <span class="fa-light fa-temperature-three-quarters"</span>`;
    },3000);
    setTimeout(() => {
        
        temp.innerHTML=` <span class="fa-light fa-temperature-full" style="color:red"</span>`;
    },4000);
}

tempLoad();

setInterval(tempLoad ,5000 );


