document.addEventListener('DOMContentLoaded', () => {
    const mealCards = document.querySelectorAll('.meal-card');

    mealCards.forEach(mealCard => {
        mealCard.addEventListener('mouseenter', () => {
            toggleMedia(mealCard);
        });

        mealCard.addEventListener('mouseleave', () => {
            toggleMedia(mealCard);
        });
    });

    function toggleMedia(mealCard) {
        console.log('toggleMedia hit');
        const image = mealCard.querySelector('.meal-card-image img');
        const video = mealCard.querySelector('.meal-card-video video');

        if (image.style.display === 'none') {
            image.style.display = 'block';
            video.style.display = 'none';
        } else {
            image.style.display = 'none';
            video.style.display = 'block';
        }
    }
});