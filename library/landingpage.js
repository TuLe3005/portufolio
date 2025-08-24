gsap.registerPlugin(ScrollTrigger);
gsap.from("#intro-left",{
    opacity: 0, 
    delay: 1, 
    duration: 2, 
    y: 4, 
})

gsap.from(" #intro-gif",{
  opacity: 0,  
  delay: 2,
  duration: 1,
  x: 5, 
})
gsap.from("#text",{
    opacity: 0, 
    delay: 3, 
    duration: 2, 
    y: 5, 
})
gsap.from(".scroll-down-container ul", {
	scrollTrigger: {
        trigger:'.scroll-down-container', 
        toggleActions: "restart none none none",
        start: "top 100%",
        end: "top 30%",
        scrub: 4,
        pinSpacing: false, 
    },
    opacity: 0, 
    x: 5, 
    duration: 3,
    marker: true, 
});
