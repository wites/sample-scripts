"use strict";

// Function to update swiper widths
function updateSwiperWidths() {
    // Get the elements
    const heroMain = document.querySelector('.hero-main');
    const secondaryFirst = document.querySelector('.secondary-first');
    const secondarySecond = document.querySelector('.secondary-second');
    const swiperMain = heroMain.querySelector('.swiper');
    const swiperFirst = secondaryFirst.querySelector('.swiper');
    const swiperSecond = secondarySecond.querySelector('.swiper');

    // Get the compured widths
    const heroMainWidth = window.getComputedStyle(heroMain).width;
    const secondaryFirstWidth = window.getComputedStyle(secondaryFirst).width;
    const secondarySecondWidth = window.getComputedStyle(secondarySecond).width;

    // Set the widths to the swipers
    swiperMain.style.width = heroMainWidth;
    swiperFirst.style.width = secondaryFirstWidth;
    swiperSecond.style.width = secondarySecondWidth;
}
// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Call function when the page is fully loaded
    updateSwiperWidths();

    // Event listener for window resize
    window.addEventListener('resize', () => {
        updateSwiperWidths();
    });
});