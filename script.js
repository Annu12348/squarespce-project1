var tl = gsap.timeline()
tl.from("#nav img,#nav h2,#nav a,#nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5,
})

tl.from("#main h1",{
    y:200,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.4,
})

tl.from("#main #left, #main #right,#main #right1,#main #left1",{
    scale:0,
    opacity:0,
    stagger:0.5,
    duration:1,
    delay:1,
})

tl.from("#mind1 p,#mind1 i",{
    y:-30,
    repeat:-1,
    //opacity:0,
    duration:1,
    delay:1,
    yoyo:true,
})