// script-profile.js
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    // Set Reels section as active by default
    document.querySelector('.nav-button[data-section="reels"]').classList.add('active');
    document.getElementById('reels-section').classList.add('active');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section') + '-section';

            // Update active state for buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show selected section and hide others
            contentSections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});
