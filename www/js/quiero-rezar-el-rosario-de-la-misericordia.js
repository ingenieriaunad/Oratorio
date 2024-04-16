(async()=>{
    'use strict';
    let count=-4;
    const prevRosary  =document.querySelector('#prev_rosary');
    const nextRosary  =document.querySelector('#next_rosary');
    const subTitle    =document.querySelector('#subtitle_mystery');
    const pray        =document.querySelector('#pray');
    const imgRosary   =document.querySelector('#img_rosary');
    pray.innerHTML='En el nombre del Padre, del Hijo y del Espiritu Santo. Amén.';
    const {formatDate}=useDate(); 
    const {prays}     =useRosary();
    subTitle.textContent=formatDate;
    const isInRange=(count, ranges)=> {
        return ranges.some(range => count > range[0] && count < range[1]);
    }
    const setRosaryContent=(count)=>{
        console.log(count);
        pray.textContent='';
        const sayEternalFather=[0,11,22,33,44,55];
        const rangeHisSorrowfulPassion=[[0,11],[11,22],[22,33],[33,44],[44,55],[76,80]];
        const rangeImgRosary=[[-5,60]];
        const textContent={
            '-4':'En el nombre del Padre, del Hijo y del Espiritu Santo. Amén.',
            '-3':prays.ourFather,
            '-2':prays.hailMary,
            '-1':prays.creed,
            '56':prays.holyGod,
            '57':prays.holyGod,
            '58':prays.holyGod,
            '59':'En el nombre del Padre, del Hijo y del Espiritu Santo. Amén.',
        }
        if(textContent[count]){
            pray.innerHTML=textContent[count];
        }
        if(sayEternalFather.includes(count)){         
            pray.innerHTML=prays.eternalFather;
        }
        if(isInRange(count, rangeHisSorrowfulPassion)){
            pray.innerHTML=prays.hisSorrowfulPassion;
        }
        if(isInRange(count, rangeImgRosary)){
            imgRosary.src=`img/rosario-misericordia/${count}.png`;
        }
    }
    nextRosary.addEventListener('click',()=>{
        count++;
        if(count===60){
            count=59;
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