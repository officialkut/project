// Mock data for cards
const cards = {
  card_1: {
    title: "Professional Profile",
    description:
      "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
  },
  card_2: {
    title: "Best Portfolio",
    description:
      "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
  },
  card_3: {
    title: "Powerful Resume",
    description:
      "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
  },
};

// Function to generate HTML template for a card
function generateCardHTML(card) {
  return `
    <div class="card bg-white">
      <h3 class="text-x">${card.title}</h3>
      <p class="text-gray">${card.description}</p>
    </div>
  `;
}

// Function to render cards into the DOM
function renderCards(cardsContainerId) {
  const container = document.getElementById(cardsContainerId);

  // Clear existing content
  container.innerHTML = "";

  // Set horizontal layout with Tailwind classes
  container.classList.add("flex", "overflow-x-auto", "gap-4", "p-4");

  // Loop through each card and insert it into the DOM
  Object.values(cards).forEach((card) => {
    const cardHTML = generateCardHTML(card);
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Placeholder function for future API/data fetching logic
function fetchAndProcessCards() {
  console.log("Fetching and processing card data...");
  renderCards("cards-container");
}

// Optional: Enable mouse wheel scrolling
function enableHorizontalScroll(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchAndProcessCards();
  enableHorizontalScroll("cards-container");
});