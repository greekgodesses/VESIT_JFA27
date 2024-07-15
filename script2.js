// script.js

document.querySelectorAll('.video').forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Autoplay the video when it becomes visible
    video.addEventListener('play', () => {
        video.setAttribute('autoplay', 'true');
    });

    // Pause the video when it's hidden
    video.addEventListener('pause', () => {
        video.removeAttribute('autoplay');
    });
});

// Ensure videos start playing when scrolled into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.video').forEach(video => {
    observer.observe(video);
});

// Handle "Follow" button click
document.querySelectorAll('.follow-button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Following') {
            button.textContent = 'Follow';
            const creator = button.getAttribute('data-creator');
            alert(`You Unfollowed ${creator} :(`);
        } else {
            button.textContent = 'Following';
            const creator = button.getAttribute('data-creator');
            alert(`You followed ${creator}!`);
        }

        // You can add more functionality here, like updating the UI or sending data to the server
    });
});

// Handle "Like" button click
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the like button style
        button.classList.toggle('liked');
        const isLiked = button.classList.contains('liked');
        button.innerHTML = isLiked ? '<i class="fa fa-heart"></i>' : '<i class="fa fa-heart-o"></i>';
        // You can add more functionality here, like sending a like to the server
    });
});

// Handle "Share" button click
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Share this video!');
        // You can add more functionality here, like sharing the video URL
    });
});

// Handle "Comment" icon click
document.querySelectorAll('.comment-icon').forEach(icon => {
    icon.addEventListener('click', (event) => {
        const commentsSection = icon.closest('.video-slide').querySelector('.comments-section');
        commentsSection.style.display = commentsSection.style.display === 'flex' ? 'none' : 'flex';
        event.stopPropagation(); // Prevent event from bubbling up to the document
    });
});

// Handle "Comment" submit
document.querySelectorAll('.comment-submit').forEach(button => {
    button.addEventListener('click', (event) => {
        const commentBox = event.target.previousElementSibling;
        const commentText = commentBox.value;
        if (commentText) {
            alert(`Feedback sent: ${commentText}`);
            commentBox.value = '';
            // You can add more functionality here, like sending the comment to the server
        }
    });
});

// Hide comment box when clicking outside of it
document.addEventListener('click', (event) => {
    if (!event.target.closest('.comments-section') && !event.target.closest('.comment-icon')) {
        document.querySelectorAll('.comments-section').forEach(section => {
            section.style.display = 'none';
        });
    }
});
