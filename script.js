let rect = document.querySelector(".rectangle");
// let rpos = rect.getBoundingClientRect;
window.addEventListener('mousemove',(details)=>{
    let varx = gsap.utils.mapRange(0,window.innerWidth,100,window.innerWidth-100,details.clientX);
    gsap.to(rect,{
        left: varx + 'px',
        ease:Power3
    });
});
