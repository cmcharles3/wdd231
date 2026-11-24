import { itemsOfInterest } from '../data/discover.mjs';

// ==========================================
// 1. BUILD THE CARDS
// ==========================================
const gridContainer = document.getElementById('discover-grid');

itemsOfInterest.forEach((item, index) => {
  // Create a class for grid areas (e.g., "area-1", "area-2")
  const card = document.createElement('article');
  card.classList.add('discover-card', `area-${index + 1}`);

  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button class="learn-more-btn">Learn More</button>
  `;

  gridContainer.appendChild(card);
});

// ==========================================
// 2. LOCAL STORAGE VISITOR MESSAGE
// ==========================================
const visitorMessage = document.getElementById('visitor-message');
const msInDay = 86400000; // 1000ms * 60s * 60m * 24h

// Get the last visit from localStorage
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
  // First visit
  visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate difference
  const currentTime = Date.now();
  const timeDifference = currentTime - Number(lastVisit);
  const daysDifference = Math.floor(timeDifference / msInDay);

  if (daysDifference < 1) {
    visitorMessage.textContent = "Back so soon! Awesome!";
  } else if (daysDifference === 1) {
    visitorMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitorMessage.textContent = `You last visited ${daysDifference} days ago.`;
  }
}

// Set the new last visit time to right now
localStorage.setItem('lastVisit', Date.now());