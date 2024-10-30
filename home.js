// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});

const $indicator = document.querySelector('.indicator');
const $links = document.querySelectorAll('li a');

$links.forEach($link => {
    $link.addEventListener('mouseover', (e) => {
        const { offsetLeft, offsetWidth } = e.target;
        $indicator.style.left = offsetLeft + 'px';
        $indicator.style.width = offsetWidth + 'px';
    });
});

// Get the video element by ID
const video = document.getElementById('background-video');

// Function to play the video
function playVideo() {
    video.play().catch(error => {
        console.error('Error attempting to play the video:', error);
    });
}

// Play the video when the page loads
window.onload = function() {
    playVideo();
};



// diplay
const $next = document.querySelector('.next');
    const $prev = document.querySelector('.prev');

    $next.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    $prev.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
    let startX, endX;

    const showSlide = (index) => {
        slides.style.transform = `translateX(${-index * 100}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    };

    slides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            nextSlide();
        } else if (startX < endX - 50) {
            prevSlide();
        }
    });

    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
});



//order place 
document.querySelectorAll('.popular-card button').forEach(button => {
    button.addEventListener('click', () => {
        const color = prompt('What color do you want?');
        const quantity = prompt('How many do you want?');
        const location = prompt('Please enter your location.');
        const name = prompt('What is your name?');

        if (color && quantity && location && name) {
            const message = `Name: ${name}\nColor: ${color}\nQuantity: ${quantity}\nLocation: ${location}\n\nClick here to order for your request.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappLink = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodedMessage}`;

            alert('Click OK to be redirected to WhatsApp to complete your order.');
            window.location.href = whatsappLink; // Redirect to WhatsApp
        } else {
            alert('All fields are required to place an order.');
        }
    });
});
