const moon = document.querySelector('.dark');
const sun = document.querySelector('.light');
const back = document.querySelector('body');


sun.addEventListener('click', () => themeMode('light'));
moon.addEventListener('click', () => themeMode('dark'));

const themeMode = (themeState) => {
    if(themeState === 'light'){
        sun.style.display = 'none';
        moon.style.display = 'block';
        back.style.backgroundColor = '#FFFFFF';
    }
    else if(themeState === 'dark'){
        sun.style.display = 'block';
        moon.style.display = 'none';
        back.style.backgroundColor = '#000000';
    }
}



const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
}







// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
   var dots = [],
   mouse = {
     x: 0,
     y: 0
   };

// The Dot object used to scaffold the dots
var Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("div");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};
// The Dot.prototype.draw() method sets the position of 
 // the object's <div> node
Dot.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 10; i++) {
 var d = new Dot();
 dots.push(d);
}

// This is the screen redraw function
function draw() {
 // Make sure the mouse position is set everytime
   // draw() is called.
 var x = mouse.x,
     y = mouse.y;
 
 // This loop is where all the 90s magic happens
 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .5;
   y += (nextDot.y - dot.y) * .5;

 });
}

addEventListener("mousemove", function(event) {
 //event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
 // everytime the screen repaints via requestAnimationFrame().
function animate() {
 draw();
 requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();





gsap.registerPlugin(ScrollTrigger);


const text = document.querySelector(".banner__title");
const box = document.querySelector(".panel-text");
const img = document.querySelector(".panel-image");

// Hero Parallax
const tl = gsap.timeline({
  defaults: { ease: "none", transformOrigin: "50% 50%" },
  scrollTrigger: {
    trigger: ".main-content__banner",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.utils.toArray(".banner__img").forEach((layer) => {
  const depth = layer.dataset.depth;
  const movement = -(layer.offsetHeight * depth);
  tl.to(layer, { y: -movement }, 0);
});

tl.to(
  text,
  {
    y: -text.offsetHeight * text.dataset.depth,
    autoAlpha: 0,
    scale: 1.08,
    duration: 0.2
  },
  0
)
