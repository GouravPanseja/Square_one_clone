document.addEventListener("DOMContentLoaded", landPageAnimation);

function landPageAnimation(){
    var tl = gsap.timeline();

tl.from("#nav img,#nav-part-2,#nav-part-3 ",{
    y:-120,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3
}) 

 
tl.from("#main h5",{
    scale:0,
    opacity:0,
})
tl.to("#main h5",{
    y:-30,
    duration:0.5 ,
    repeat:-1,
    yoyo:true,
})



}
