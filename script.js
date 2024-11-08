// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#4ecca3' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#4ecca3',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Typing effect with enhancements
const roles = [
    "DATA SCIENTIST",
    "MACHINE LEARNING ENGINEER",
    "NLP SPECIALIST",
    "AI DEVELOPER"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const colors = ["#4ecca3", "#ff6b6b", "#5f27cd", "#54a0ff"]; // Different colors for each role

function typeEffect() {
    const currentRole = roles[roleIndex];
    const typingElement = document.querySelector('.typing-text');

    if (!typingElement) return;

    // Set color based on role index
    typingElement.style.color = colors[roleIndex % colors.length];

    // Typing and deleting logic
    if (!isDeleting && charIndex < currentRole.length) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        typingElement.textContent = currentRole.substring(0, charIndex);
        charIndex--;
    }

    // Handle role change and reset
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Pause before deleting
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500); // Pause before typing next role
        return;
    }

    // Randomized typing speed
    const speed = isDeleting ? 75 : 125 + Math.random() * 30; 
    setTimeout(typeEffect, speed);
}

// Add blinking cursor
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const cursorElement = document.createElement("span");
        cursorElement.textContent = "|";
        cursorElement.classList.add("cursor-blink");
        typingElement.after(cursorElement); // Add blinking cursor next to typing text
    }
    setTimeout(typeEffect, 1000); // Delay to start typing effect
});

// Scroll reveal effect
function reveal() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 150) {
            section.classList.add('active');
        }
    });
}

// Initialize scroll reveal
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', reveal);
    reveal();
});