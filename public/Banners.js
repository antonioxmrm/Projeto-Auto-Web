const slides = document.querySelectorAll('.slide');
let currentSlide = 0; // Keep track of the current slide index

function showSlide(index) {
    // Ensure index is valid and slides exist
    if (!slides || slides.length === 0 || index < 0 || index >= slides.length) {
        console.error("Slides not found or index out of bounds.");
        return;
    }

    // Remove 'active' class from all slides first
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Add 'active' class to the target slide
    slides[index].classList.add('active');
    currentSlide = index; // Update the current slide index
}

function nextSlide() {
    // Calculate the index of the next slide, wrapping around if necessary
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

// Initial setup: Show the first slide when the page loads
// Ensure CSS is ready for transitions before showing the first slide
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        // Make sure no slides start with 'active' class from HTML markup
        slides.forEach(slide => slide.classList.remove('active'));
        // Show the first slide
        showSlide(0);
        // Start the automatic slideshow
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
});