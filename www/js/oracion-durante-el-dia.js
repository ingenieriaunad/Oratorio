(async()=>{
    'use strict';
    const title = document.querySelector('#title');
    const prayBody  = document.querySelector('#prayBody');
    const subtitle  = document.querySelector('#subtitle');
    const {time,formatDate,timeMilitary}=useDate();
    const isItMorningDayOrNight = timeMilitary.toLocaleString().split(':');
    const hour = parseInt(isItMorningDayOrNight[0]);
    const currentPrays = localStorage.getItem('praysIds');
    let pray;
    const setPray=(text)=>{
        const prays=Prays.filter(pray=>pray.title===text);
        const random = Math.floor(Math.random()*prays.length);
        localStorage.setItem('praysIds',prays[random].id);
        return prays[random];
    }
    const getPrays=(text)=>{
        if(!currentPrays){
            return setPray(text);
        }
        const prays=Prays.filter(pray=>pray.title===text && !currentPrays.includes(pray.id));
        if(prays.length===0){
            localStorage.removeItem('praysIds');
            return setPray(text);
        }
        const random = Math.floor(Math.random()*prays.length);
        localStorage.setItem('praysIds',`${currentPrays},${prays[random].id}`);
        return prays[random];
    }
    if(hour>=4 && hour<12){
        pray=getPrays("Oración de la mañana");
    }
    else if(hour>=12 && hour<19){
        pray=getPrays("Oración durante el día");
    }
    else{
        pray=getPrays("Oración de la noche");
    }
    title.innerHTML=pray.title;
    subtitle.innerHTML=`${formatDate} ${time}`;
    prayBody.innerHTML=pray.content;

})()