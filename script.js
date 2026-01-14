function loadingAnimation(){
    
var h5=document.querySelector("#first-line h5");
var grow=0;
var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25 ,
    duration:0.6,
    delay:0.5,
}); 
tl.from("#first-line",{
    opacity:0,
    onStart:function(){
        setInterval(function(){
            if(grow<100){
                h5.innerHTML=grow++;
            }
            else{
                h5.innerHTML=grow;
            }
        },10); 
    },
});
tl.to(".line h2",{
    animationName: "now",
    opacity:1,
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    // delay:2,
});
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:"power4",
})
tl.to("#loader",{
    display:"none",
});
tl.from("#center1 h1,#center2 h1,#center3 h2,#center4 h1",{
    y:120,
    stagger:0.2,
})
}
loadingAnimation();
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        // console.log(dets)
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y })
    });
    
    Shery.makeMagnet("#nav-part2 h5", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}
cursorAnimation();
