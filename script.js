// // ---------------------------Context Me
let mybutton = document.getElementById("scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };
mybutton.style.display = 'flex'

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var hamburger = document.querySelector('.hamburger');
var navbar = document.querySelector('#navbar ul');

hamburger.addEventListener('click', function() {
    navbar.classList.toggle('show');

});




function readMore() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById('more-text');
    let readMoreBtn = document.getElementById('read-more-btn');

    if (dots.style.display === 'none') {
        dots.style.display = "inline";
        readMoreBtn.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        console.log("KKKKK");
        dots.style.display = "none";
        readMoreBtn.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create array to hold stars
let stars = [];

// Set number of stars to create
let numStars = 400;

// Create each star and add to array
for (let i = 0; i < numStars; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let radius = Math.random() * 2;
    let speed = Math.random() * 0.3 + 0.1;
    let opacity = Math.random() * 0.5 + 0.1;
    let directionX = Math.random() * 2 - 1;
    let directionY = Math.random() * 2 - 1;
    let opacityDirection = -2;
    let star = {
        x: x,
        y: y,
        radius: radius,
        speed: speed,
        opacity: opacity,
        directionX,
        directionY,
        opacityDirection

    };
    stars.push(star);
}

// Function to animate stars
function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Loop through each star and move it
    stars.forEach(function(star) {
        star.x -= star.speed;
        if (star.x < 0) {
            star.x = canvas.width;
        }
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();




        //     // Update the opacity of the star
        star.opacity += star.opacityDirection * 0.01;
        if (star.opacity <= 0) {
            star.opacity = 0;
            star.opacityDirection = 1;
        } else if (star.opacity >= 1) {
            star.opacity = 1;
            star.opacityDirection = -1;
        }

    });

    // Request animation frame
    requestAnimationFrame(animate);
}

// Start animation
animate();




const toggleButton = document.getElementById("toggle-about");
const aboutContent = document.querySelector(".about-content");

toggleButton.addEventListener("click", () => {
    if (aboutContent.style.display === "none") {
        aboutContent.style.display = "block";
        toggleButton.textContent = "Show Less";
    } else {
        aboutContent.style.display = "none";
        toggleButton.textContent = "Show More";
    }
});