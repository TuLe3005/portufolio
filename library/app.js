//Particles//

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1c1c1b"
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


//RANDOM TEXT APPEAR//
let h1Elements = [];
const h1Array = [...document.querySelectorAll('h1')];
const specialChars = [...'!@£$%&}{":;?><][+=-_justanotherdesignersoboring'.split('')]

class Title{
    constructor(id, element){
        this.id = id;
        this.idx = 0;
        this.frame = 0;
        this.element = element;
        this.element.className = `${id}`;
        this.originalString = element.innerText;
        this.innerHtml = '';
        this.intersecting = false;
        this.createSpans();
    }

    createSpans(){
        for(let i = 0; i < this.originalString.length; i++){
            this.innerHtml += `<span>${this.originalString[i]}</span>`;
        }
        this.element.innerHTML = this.innerHtml;
        this.spans = [...this.element.querySelectorAll('span')]
    
    }

    animate(){
        if(this.idx !== this.originalString.length && this.intersecting){
            this.spans[this.idx].style.opacity = 1;
            this.spans[this.idx].style.transform = `translateX(0)`
            if(this.frame % 3 === 0 && this.spans[this.idx].innerText !== ' '){
                this.spans[this.idx].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            }
            if(this.frame % 10 == 0 && this.frame !== 0){ 
                this.spans[this.idx].innerText = this.originalString[this.idx]
                this.idx++
            }
            this.frame++;
            requestAnimationFrame(this.animate.bind(this))
        }else{
            console.log('done')
        }
    }

    reset(){
        this.idx = 0;
        this.frame = 0;
        this.intersecting = false;
        [...this.element.querySelectorAll('span')].forEach(span => {
            span.style.opacity = 0;
            span.style.transform = `translateX(-10px)`
        })
    }
}

window.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        h1Array.forEach((header,idx) => {
            h1Elements[idx] = new Title(idx, header)
        })
    
        let options = {
            rootMargin: '0px',
            threshold: 0.0
          }
          
          let callback = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    h1Elements[+entry.target.className].intersecting = true;
                    h1Elements[+entry.target.className].animate()
                  
                }else{
                    h1Elements[+entry.target.className].reset()
                }
            });
          };
        
          let observer = new IntersectionObserver(callback, options);
    
          h1Elements.forEach(instance => {
            observer.observe(instance.element)
            instance.element.style.opacity = 1
          });

    }, 300)
})

//P1//
gsap.from(".profile-image",{
  opacity: 0, 
  delay: 0,
  duration: 1,
  y: 30,
})

gsap.from("h1",{
  y: 10,
  delay: 0.5,
  duration: 1,
})

gsap.from("#hi",{
  y: 5,
  opacity: 0, 
  delay: 1,
  duration: 2,
})
gsap.from("#hi2",{
  y: 10,
  opacity: 0, 
  delay: 1.5,
  duration: 2,
})
////END//

gsap.registerPlugin(ScrollTrigger);

gsap.from("#middle-low", {
	scrollTrigger: {
        trigger:'.p-2', 
        scroller: "body main",
        toggleActions: "restart none none none"
    },
    opacity: 0,
	  y: 500,
    duration: 3,
    marker: true, 
});
gsap.from(".middle h2", {
	scrollTrigger: {
        trigger:'.p-2', 
        scroller: "body main",
        toggleActions: "restart none none none"
    },
    delay: 1,
    opacity: 0,
	  y: 500,
    duration: 3,
    marker: true, 
});
gsap.from(".middle .box-container", {
	scrollTrigger: {
        trigger:'.p-2', 
        scroller: "body main",
        toggleActions: "restart none none none"
    },
    delay: 2,
    opacity: 0,
	  y: 500,
    duration: 3,
    marker: true, 
});
gsap.from(".left-top .Softwares", {
	scrollTrigger: {
        trigger:'.detailed-info', 
        scroller: "body main",
        toggleActions: "restart none none none"
    },
    delay: 5,
    opacity: 0,
	  x: 30,
    duration: 1,
    marker: true, 
});
gsap.from(".left-top .education", {
	scrollTrigger: {
        trigger:'.detailed-info', 
        scroller: "body main",
        toggleActions: "restart none none none"
    },
    delay: 5.5,
    opacity: 0,
	  x: 30,
    duration: 1,
    marker: true, 
});
gsap.from(".right-bottom", {
	scrollTrigger: {
        trigger:'.detailed-info', 
        scroller: "body main",
        toggleActions: "restart none none none"
    },
    delay: 6,
    opacity: 0,
	  x: 30,
    duration: 1,
    marker: true, 
});


