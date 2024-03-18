const stars = document.querySelectorAll('.rating i');
const reviewInput = document.getElementById('reviewInput');
const submitReviewBtn = document.getElementById('submitReviewBtn');

let currentRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    updateRating(index + 1);
  });

  star.addEventListener('mouseover', () => {
    highlightStars(index + 1);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(currentRating);
  });
});

function updateRating(rating) {
  currentRating = rating;
  highlightStars(rating);
}

function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

submitReviewBtn.addEventListener('click', () => {
  const review = reviewInput.value.trim();
  if (review && currentRating > 0) {
    // Handle submit review logic here
    console.log('Review:', review);
    console.log('Rating:', currentRating);
    // Reset the review form
    reviewInput.value = '';
    currentRating = 0;
    highlightStars(0);
  }
});