(async()=>{
    'use strict';
    let count=-4;
    const prevRosary  =document.querySelector('#prev_rosary');
    const nextRosary  =document.querySelector('#next_rosary');
    const titleMystery=document.querySelector('#title_mystery');
    const subTitle    =document.querySelector('#subtitle_mystery');
    const pray        =document.querySelector('#pray');
    const imgRosary   =document.querySelector('#img_rosary');
    pray.innerHTML='En el nombre del Padre, del Hijo y del Espiritu Santo. Amén.';
    const {day, formatDate}=useDate(); 
    const {mystery, prays,selectMystery}=useRosary();
    let dayName;
    const mysterySelected=await selectMystery();
    if(mysterySelected==='day'){
        dayName=day;
    }
    else{
        dayName=mysterySelected;
    }
    titleMystery.textContent=mystery[dayName];
    subTitle.textContent=formatDate;
    const isInRange=(count, ranges)=> {
        return ranges.some(range => count > range[0] && count < range[1]);
    }
    const setRosaryContent=(count)=>{
        console.log(count);
        pray.textContent='';
        const sayOurFather=[1,16,31,46,61,76];
        const sayGlory=[12,27,42,57,72,80];
        const sayFatima=[13,28,43,58,73];
        const sayOffer2=[14,29,44,59,74];
        const rangeHailMary=[[1,12],[16,27],[31,42],[46,57],[61,72],[76,80]];
        const rangeImgRosary=[[-4,0],[0,13],[16,28],[31,43],[46,58],[61,73],[76,82],[81,83]];
        const textContent={
            '-4':'En el nombre del Padre, del Hijo y del Espiritu Santo. Amén.',
            '-3':prays.actOfContrition,
            '-2':prays.creed,
            '-1':prays.offer,
            '0':`${prays.mystery+mystery[dayName].toLowerCase()}, el primer misterio es: <strong class="text-primary">${prays.mysterys[dayName][0]}</strong>`,
            '15':`El segundo misterio que vamos a contemplar es: <strong class="text-primary">${prays.mysterys[dayName][1]}</strong>`,
            '30':`El tercer misterio que vamos a contemplar es: <strong class="text-primary">${prays.mysterys[dayName][2]}</strong>`,
            '45':`El cuarto misterio que vamos a contemplar es: <strong class="text-primary">${prays.mysterys[dayName][3]}</strong>`,
            '60':`El quinto y último misterio que vamos a contemplar es: <strong class="text-primary">${prays.mysterys[dayName][4]}</strong>`,
            '75':prays.offer1,
            '81':prays.finalPray,
            '82':prays.finalPray2
        }
        if(textContent[count]){
            pray.innerHTML=textContent[count];
        }
        if(sayOurFather.includes(count)){
            pray.innerHTML=prays.ourFather;
        }
        if(isInRange(count, rangeHailMary)){
            pray.innerHTML=prays.hailMary;
        }
        if(sayGlory.includes(count)){
            pray.innerHTML=prays.glory;
        }
        if(sayFatima.includes(count)){
            pray.innerHTML=prays.fatima;
        }
        if(sayOffer2.includes(count)){
            pray.innerHTML=prays.offer2;
        }
        if(count>=12&&count<=16)imgRosary.src='img/rosario/12.png';
        if(count>=27&&count<=31)imgRosary.src='img/rosario/27.png';
        if(count>=42&&count<=46)imgRosary.src='img/rosario/42.png';
        if(count>=57&&count<=61)imgRosary.src='img/rosario/57.png';
        if(count>=72&&count<=76)imgRosary.src='img/rosario/72.png';
        if(isInRange(count, rangeImgRosary)){
            if(count>=0)imgRosary.src=`img/rosario/${count}.png`;
            if(count<0)imgRosary.src=`img/rosario/0.png`;
        }
    }
    nextRosary.addEventListener('click',()=>{
        count++;
        if(count===83){
            count=82;
        }
        setRosaryContent(count);
    });
    prevRosary.addEventListener('click',()=>{
        count--;
        if(count===-5){
            count=-4;
        }
        setRosaryContent(count);
    });
    

})()