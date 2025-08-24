document.addEventListener("DOMContentLoaded", function() {
    const scrollText = document.querySelector('#black-text2');
    if (!scrollText) {
        return;
    }
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollText.classList.add('is-visible');
                observer.unobserve(scrollText);
            }
        });
    });
    observer.observe(scrollText);
});
var sound1 = new Audio(); 
sound1.src = "material/ui-sound-navigate.wav"
