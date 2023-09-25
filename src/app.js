// Navigation Bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const navbut = document.getElementById('navbut');

document.onclick = function (e) {
    if (e.target.id !== 'navbut') {
        navbut.classList.remove('responsive');
    }
}


// Go To Top Button
var mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



// Fade in
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});


// contact me
function contactme() {
  var x = document.getElementById("contact-me");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}








// Bubbles
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function() {
  mousex = event.clientX;
  mousey = event.clientY;
});

var grav = 1.2;
c.strokeWidth=5;
function randomColor() {
  return (
    "rgba(" +
    92 +
    "," +
    90 +
    "," +
    109 +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}

function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 50 + 20;
  this.startradius = this.radius;
  this.x = Math.random() * (tx - this.radius * 2) + this.radius;
  this.y = Math.random() * (ty - this.radius);
  this.dy = Math.random() * 2;
  this.dx = Math.round((Math.random() - 0.5) * 4);
  this.vel = Math.random() / 10;
  this.update = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    //c.stroke();
  };
}

var bal = [];
for (var i=0; i<20; i++){
    bal.push(new Ball());
}

function animate() {
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }
  requestAnimationFrame(animate);
  c.clearRect(0, 0, tx, ty);
  for (var i = 0; i < bal.length; i++) {
    bal[i].update();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    if (bal[i].y + bal[i].radius >= ty) {
      bal[i].dy = -bal[i].dy * grav;
    } else {
      bal[i].dy += bal[i].vel;
    }
    if(bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0){
        bal[i].dx = -bal[i].dx;
    }
    if(mousex > bal[i].x - 20 &&
      mousex < bal[i].x + 20 &&
      mousey > bal[i].y - 50 &&
      mousey < bal[i].y + 50 &&
      bal[i].radius < 70){
        //bal[i].x += +1;
        bal[i].radius += 5;
      } else {
        if(bal[i].radius > bal[i].startradius){
          bal[i].radius += 1;
        }
      }

    //forloop end
    }
//animation end
}

animate();

setInterval(function() {
  bal.push(new Ball());
  bal.splice(0, 1);
}, 400);
