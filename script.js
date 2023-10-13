var btn01=document.getElementById("btn01");
var btn02=document.getElementById("btn02");
btn01.addEventListener("click",()=>{
    btn02.classList.toggle('hidden');
});

var hire=document.getElementById('hire');
hire.addEventListener("click",()=>{
    alert("Email: sukantamalik2002@gmail.com")
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