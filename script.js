var btn01=document.getElementById("btn01");
var btn02=document.getElementById("btn02");
var hide_toast = document.getElementById("hide_toast");
var hide = document.getElementById("hide");
var add_text = document.getElementById("add_text");
var needUpdate = true
hide_toast.addEventListener("click", () => {
    hide.classList.add('hidden');
})
btn01.addEventListener("click",()=>{
    btn02.classList.toggle('hidden');
});
var hire=document.getElementById('hire');
hire.addEventListener("click",()=>{
    hide.classList.remove('hidden');
    if(needUpdate){
        const v = document.createTextNode("Email:sukantamalik2002@gmail.com");
        add_text.appendChild(v);
        needUpdate=false;
    }
    
})

var typed = new Typed('#element', {
    strings: ['Sukanta Malik','Fullstack Web Developer'],
    typeSpeed: 130,
    backSpeed: 130,
    loop: true
});
AOS.init({
    offset:200,
    duration:1000,
});