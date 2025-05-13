function button(el){
    if(document.getElementById("gg").innerHTML==="Подписаться"){
el.innerHTML="Вы подписаны";
el.style.backgroundColor="#2c2f36";
el.style.toggle("show");
}
else if((document.getElementById("gg").innerHTML==="Вы подписаны")){
    el.innerHTML="Подписаться";
    el.style.backgroundColor="#2f60c2";
}
}
function share(send) {
    const sale=document.getElementById("share");
    sale.classList.toggle("show");
    if(send.innerHTML==="Поделиться профилем"){
        send.innerHTML="Обратно";
        send.style.backgroundColor="#2c2f36";}
        else if((send.innerHTML==="Обратно")){
            send.innerHTML="Поделиться профилем";
            send.style.backgroundColor="#2c2f36";
        }
    
    }
