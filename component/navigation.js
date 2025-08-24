function showSidebar(){
    const Sidebar = document.querySelector('.mobile-header');
    Sidebar.style.display = 'flex';
    gsap.from(".mobile-header",{
    x: 50,
    opacity: 0, 
    delay: 0,
    duration: 1,
    })
    gsap.from(".close-menu",{
    opacity: 1, 
    x: 600,
    delay: 1,
    duration: 1,
    rotate: 360, 
    yoyo: true,
    })
    gsap.from("li",{
    opacity: 0, 
    y: 5,
    delay: 2,
    duration: 1,
    })
}

function hideSidebar(){
    const Sidebar = document.querySelector('.mobile-header');
    Sidebar.style.display = 'none';
}

