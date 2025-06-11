// This file handles the navigation logic, including event listeners for the next and previous chapter buttons and chapter numbers.

document.addEventListener('DOMContentLoaded', () => {
    let currentChapter = 1;
    const totalChapters = 8;

    // Navigation buttons
    const nextButton = document.getElementById('next-chapter');
    const prevButton = document.getElementById('prev-chapter');
    const chapterButtons = document.querySelectorAll('.chapter-btn');

    // Next chapter navigation
    nextButton.addEventListener('click', () => {
        if (currentChapter < totalChapters) {
            currentChapter++;
            loadChapter(currentChapter);
        }
    });

    // Previous chapter navigation
    prevButton.addEventListener('click', () => {
        if (currentChapter > 1) {
            currentChapter--;
            loadChapter(currentChapter);
        }
    });

    // Chapter number navigation
    chapterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chapterNumber = parseInt(button.dataset.chapter);
            currentChapter = chapterNumber;
            loadChapter(currentChapter);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentChapter > 1) {
            currentChapter--;
            loadChapter(currentChapter);
        } else if (e.key === 'ArrowRight' && currentChapter < totalChapters) {
            currentChapter++;
            loadChapter(currentChapter);
        }
    });
});