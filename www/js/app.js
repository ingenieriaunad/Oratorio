(()=>{
    'use strict';
    const goBack=document.querySelector('#goBack');
    goBack.addEventListener('click',()=>{
        window.history.back();
    });
})()