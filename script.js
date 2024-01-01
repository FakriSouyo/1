// Create fire effect using particles
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
const particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Particle() {
  this.x = canvas.width / 2;
  this.y = canvas.height - 10;
  this.size = Math.random() * 10 + 1;
  this.speedX = Math.random() * 3 - 1.5;
  this.color = "rgba(0, 127, 216, 0.96)";
}

Particle.prototype.update = function () {
  this.y -= this.size / 2;
  this.x += this.speedX;
  if (this.size > 0.2) this.size -= 0.1;
};

Particle.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};

function createParticles() {
  const particle = new Particle();
  particles.push(particle);
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(animateParticles);
}

setInterval(createParticles, 150);
animateParticles();
