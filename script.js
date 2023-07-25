const humburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
humburger.addEventListener('click',()=>{
    navLinks.classList.toggle('show');
});
navLinks.addEventListener('click',(event)=>{
    if(navLinks.classList.contains('show')){
        if(event.target.tagName==='A'||event.target.tagName==='I'){
            navLinks.classList.remove('show');
        }
    }
});