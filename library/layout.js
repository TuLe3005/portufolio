gsap.registerPlugin(ScrollTrigger);

gsap.from(".p-1 p",{
  opacity: 0, 
  delay: 0,
  duration: 1,
  y: 30,
})

gsap.from(".p-1 h1",{
  opacity: 0, 
  delay: 1,
  duration: 1,
  y: 30,
})

gsap.from(".cover-photo",{
  opacity: 0, 
  delay: 1.5,
  duration: 1,
  y: 30,
})

gsap.to(".cover-photo", {
	scrollTrigger: {
        trigger:'.p-2', 
        toggleActions: "restart none none none",
        start: "top 100%",
        end: "top 30%",
        scrub: 4,
        pin: ".cover-photo", 
        pinSpacing: false, 
    },
    scale: 2, 
    y: 0, 
    duration: 3,
    marker: true, 
});

gsap.from(".slider", {
	scrollTrigger: {
        trigger:'.p-2', 
        toggleActions: "restart none none none"
    },
    scale: 0.2, 
    opacity: 0,
    duration: 3,
    marker: true, 
});

gsap.from(".p-2 p", {
	scrollTrigger: {
        trigger:'.p-2', 
        toggleActions: "restart none none none"
    },
    delay: 3,
    y: 10,
    opacity: 0,
    duration: 2,
    marker: true, 
});

gsap.from("#i-1", {
	scrollTrigger: {
        trigger:'.p-3', 
        toggleActions: "restart none none none"
    },
    delay: 1,
    y: 10,
    opacity: 0,
    duration: 1,
    marker: true, 
});
gsap.from("#i-2", {
	scrollTrigger: {
        trigger:'.p-3', 
        toggleActions: "restart none none none"
    },
    delay: 2,
    y: 10,
    opacity: 0,
    duration: 1,
    marker: true, 
});
gsap.from("#i-3", {
	scrollTrigger: {
        trigger:'.p-3', 
        toggleActions: "restart none none none"
    },
    delay: 3,
    y: 10,
    opacity: 0,
    duration: 1,
    marker: true, 
});
gsap.from("#i-4", {
	scrollTrigger: {
        trigger:'.p-3', 
        toggleActions: "restart none none none"
    },
    delay: 4,
    y: 10,
    opacity: 0,
    duration: 1,
    marker: true, 
});
gsap.from(".rec-1", {
	scrollTrigger: {
        trigger:'.p-5', 
        toggleActions: "restart none none none"
    },
    scaleX: 0.1,
    y: 10,
    opacity: 0,
    duration: 1,
    marker: true, 
});
gsap.from(".rec-2", {
	scrollTrigger: {
        trigger:'.p-5', 
        toggleActions: "restart none none none"
    },
    delay: 1, 
    scaleX: 0.1,
    x: 10,
    opacity: 0,
    duration: 1,
    marker: true, 
});
gsap.from(".text-container p", {
	scrollTrigger: {
        trigger:'.p-5', 
        toggleActions: "restart none none none"
    },
    delay: 2, 
    y: 10,
    opacity: 0,
    duration: 1,
    marker: true, 
});
gsap.from(".final-image", {
	scrollTrigger: {
        trigger:'.p-4', 
        toggleActions: "restart none none none",
        start: "top 80%",
        end: "top 30%",
    },
    delay: 1, 
    y: 100,
    opacity: 0,
    duration: 1,
    marker: true, 
});