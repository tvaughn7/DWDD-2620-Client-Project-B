// Import reviews data
import { reviews } from '../data/reviews.js';

// Function to generate star rating HTML using ternary operator
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        // Use ternary operator to color stars gold if <= rating, otherwise gray
        const starColor = i <= rating ? 'text-yellow-400' : 'text-gray-300';
        starsHTML += `<span class="${starColor} text-2xl">★</span>`;
    }
    return starsHTML;
}

// Function to create a review card
function createReviewCard(review) {
    return `
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-black">${review.name}</h3>
                <div class="flex gap-1">
                    ${generateStars(review.rating)}
                </div>
            </div>
            <p class="text-black mb-3">${review.review}</p>
            <div class="text-sm text-gray-700">
                <p class="font-semibold">Product: ${review.product}</p>
                <p>${new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        </div>
    `;
}

// Function to render all reviews
function renderReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    
    if (!reviewsContainer) {
        console.error('Reviews container not found');
        return;
    }
    
    console.log('Rendering reviews:', reviews); // Debug log
    console.log('Container found:', reviewsContainer); // Debug log
    
    // Generate HTML for all reviews
    const reviewsHTML = reviews.map(review => createReviewCard(review)).join('');
    
    console.log('Generated HTML length:', reviewsHTML.length); // Debug log
    
    // Insert reviews into the container
    reviewsContainer.innerHTML = reviewsHTML;
    
    console.log('Reviews inserted. Container children count:', reviewsContainer.children.length); // Debug log
}

// Initialize reviews when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderReviews);
} else {
    // DOM already loaded
    renderReviews();
}
