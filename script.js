for (let i = 0; i < document.getElementsByClassName('likes-button').length; i += 1) {
    document.getElementsByClassName('likes-button')[i].onclick = () => {
        document.getElementsByClassName('likes-counter')[i].innerHTML = `${Number(document.getElementsByClassName('likes-counter')[i].innerHTML) + 1}`;
    }
    document.getElementsByClassName('likes-button')[i].onmousedown = () => {
        document.getElementsByClassName('likes-button')[i].style.color = 'red';
    }
    document.getElementsByClassName('likes-button')[i].onmouseup = () => {
        document.getElementsByClassName('likes-button')[i].style.color = '';
    }
}


// Select all carousel navigation buttons (prev/next)
const buttons = document.querySelectorAll('[data-carousel-button]')

// Attach a click handler to each button
buttons.forEach(button => {
    // Event handler on each button
    button.addEventListener('click', () => {

        // Determine direction: +1 for next, -1 for prev
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;

        // Find the corresponding <ul> of this specific carousel
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

        // Get the currently active slide
        const activeSlide = slides.querySelector('[data-active]');

        // Calculate the next slide index
        let newIndex = Array.from(slides.children).indexOf(activeSlide) + offset;
        if (newIndex < 0)  newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // Activate the new slide and deactivate the old one
         slides.children[newIndex].dataset.active = true;
         delete activeSlide.dataset.active;       
        
    })
})