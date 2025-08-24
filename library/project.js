document.addEventListener('DOMContentLoaded', function() {

    gsap.registerPlugin(Flip, Draggable);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 426px)", () => {
        
        const container = document.querySelector('.file-container');
        const allBoxes = document.querySelectorAll('.box');
        const boxesToAppear = document.querySelectorAll('#b-2, #b-3, #b-4, #b-5, #b-6, #b-7');
        const buttonContainer = document.querySelector('.button-container');
        const carouselBoxes = gsap.utils.toArray('#b-2, #b-3, #b-4, #b-5, #b-6');
        const descriptions = gsap.utils.toArray('.description p');
        const prevButton = document.querySelector('#bt-1');
        const nextButton = document.querySelector('#bt-3');

        let isExpanded = false; 
        let animationInProgress = false; 
        let currentIndex = 0;

        function setActiveSlide(newIndex) {
            if (newIndex < 0 || newIndex >= carouselBoxes.length || newIndex === currentIndex || animationInProgress) {
                return;
            }
            animationInProgress = true;

            const oldIndex = currentIndex;
            currentIndex = newIndex;

            carouselBoxes[oldIndex].classList.remove('active');
            carouselBoxes[currentIndex].classList.add('active');
            
            const tl = gsap.timeline({ onComplete: () => animationInProgress = false });
            tl.to(descriptions[oldIndex], { autoAlpha: 0, duration: 0.4 });
            tl.to(descriptions[currentIndex], { autoAlpha: 1, duration: 0.4 });
        }

        prevButton.addEventListener('click', () => setActiveSlide(currentIndex - 1));
        nextButton.addEventListener('click', () => setActiveSlide(currentIndex + 1));

        function expandAnimation() {
            if (animationInProgress) return; 
            animationInProgress = true;

            const state = Flip.getState(allBoxes);

            container.classList.add('is-expanded'); 
            boxesToAppear.forEach(box => {
                box.style.display = 'flex';
                box.style.opacity = '0';
            });

            Flip.from(state, {
                duration: 1.2,
                ease: "power3.inOut",
                absolute: true,
                onComplete: () => {
                    const postFlipTl = gsap.timeline();
                    
                    postFlipTl.to(allBoxes, {
                        transform: 'perspective(1200px) rotateY(-45deg)',
                        duration: 1.5,
                        ease: 'power3.inOut',
                    });
                    
                    postFlipTl.to(boxesToAppear, {
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.1
                    }, "-=1");

                    postFlipTl.to(buttonContainer, {
                        autoAlpha: 1,
                        y: -20,
                        duration: 0.5,
                        onStart: () => buttonContainer.classList.add('active')
                    });
                    
                    postFlipTl.call(() => {
                        carouselBoxes[currentIndex].classList.add('active');
                        gsap.to(descriptions[currentIndex], { autoAlpha: 1, duration: 0.5 });
                    });

                    postFlipTl.call(() => {
                        isExpanded = true;
                        animationInProgress = false;
                    });
                }
            });
        }

        const dragInstance = Draggable.create(container, {
            type: "x,y", 
            bounds: "main",
            onClick: function() {
                if (!isExpanded && !animationInProgress) {
                    const currentX = gsap.getProperty(container, "x");
                    const currentY = gsap.getProperty(container, "y");

                    if (currentX !== 0 || currentY !== 0) {
                        gsap.to(container, {
                            x: 0,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.inOut",
                            onComplete: expandAnimation
                        });
                    } else {
                        expandAnimation();
                    }
                }
            }
        });

        return () => {
            if (dragInstance[0]) {
                dragInstance[0].kill();
            }
        };
    });

    //425px trở xuống
    mm.add("(max-width: 425px)", () => {
        
        const container = document.querySelector('.file-container');
        const carouselBoxes = gsap.utils.toArray('#b-1, #b-2, #b-3, #b-4, #b-5, #b-6, #b-7');
        const descriptions = gsap.utils.toArray('.description p');
        const buttonContainer = document.querySelector('.button-container');
        const prevButton = document.querySelector('#bt-1');
        const nextButton = document.querySelector('#bt-3');

        let currentIndex = 0;
        let animationInProgress = false;
        
        let snapValues = carouselBoxes.map(box => (window.innerWidth / 2) - (box.offsetLeft + box.offsetWidth / 2));
        
        function goToSlide(newIndex, duration = 0.6) {
            if (newIndex < 0 || newIndex >= carouselBoxes.length || animationInProgress) return;
            if (newIndex !== currentIndex) {
                animationInProgress = true;
            }
            
            const oldIndex = currentIndex;
            currentIndex = newIndex;
            
            gsap.to(container, {
                x: snapValues[currentIndex],
                duration: duration,
                ease: 'power2.inOut',
                onComplete: () => animationInProgress = false
            });
            
            if (oldIndex > 0 && descriptions[oldIndex - 1]) {
                gsap.to(descriptions[oldIndex - 1], { autoAlpha: 0, duration: 0.3 });
            }

            if (currentIndex > 0 && descriptions[currentIndex - 1]) {
                gsap.to(descriptions[currentIndex - 1], { autoAlpha: 1, duration: 0.3, delay: 0.2 });
            }
        }

        prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
        
        const dragInstance = Draggable.create(container, {
            type: "x",
            bounds: "main",
            inertia: true,
            edgeResistance: 0.8,
            onDragEnd: function() {
                let closestIndex = 0;
                let closestDistance = Infinity;
                
                snapValues.forEach((snap, index) => {
                    let distance = Math.abs(this.x - snap);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestIndex = index;
                    }
                });
                
                goToSlide(closestIndex);
            }
        });

        function initializeMobileState() {
            gsap.set(buttonContainer, { autoAlpha: 1 });
            buttonContainer.classList.add('active');
            gsap.set(descriptions, { autoAlpha: 0 });
            goToSlide(0, 0); 
        }

        initializeMobileState();

        return () => {
            if (dragInstance[0]) {
                dragInstance[0].kill();
            }
        };
    });

});