// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
window.addEventListener('beforeunload', function(event) { // a revoir // pas nécessaire
    // Supprimez ici le cookie "mycookie".
    document.cookie = "mycookie=;";
});

const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function celebrate() {
    const balloons = document.querySelectorAll('.balloon');

    // Fait bouger les ballons
    balloons.forEach(balloon => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        balloon.style.transition = 'transform 2s';
        balloon.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.5)`;
    });

    // Lancer les feux d'artifice
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            launchFirework();
        }, i * 1000); // Décale les feux d'artifice dans le temps
    }
}

function launchFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.7; // Positionner en haut de l'écran
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Dessiner un feu d'artifice
    for (let i = 0; i < 100; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 100;
        const xOff = Math.cos(angle) * radius;
        const yOff = Math.sin(angle) * radius;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x + xOff, y + yOff, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}
