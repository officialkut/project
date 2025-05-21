// Объект с данными карточек
const cards = {
  card_1: {

    profile: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by recruiter.",
    bestPortfolio: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by recruiter.",
    powerfulResume: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by..."
  }
  // Можно добавить дополнительные карточки card_2, card_3 и т.д.
};

// Функция для создания HTML-разметки карточки
function createCardHTML(cardData) {
  return `
    <div class="card">
      <h2>${cardData.name}</h2>
      <h3>${cardData.position}</h3>
      <p class="location">${cardData.location}</p>
      <hr>
      
      <section class="about">
        <h4>About Me</h4>
        <p>${cardData.about}</p>
      </section>
      
      <section class="portfolio">
        <h4>Portfolio</h4>
        <ul>
          ${cardData.portfolioItems.map(item => `
            <li>
              <strong>${item.title}</strong>
              <span>${item.value}</span>
            </li>
          `).join('')}
        </ul>
      </section>
      
      <section class="experience">
        <h4>Work Experience</h4>
        <ul>
          ${cardData.workExperience.map(exp => 
            typeof exp === 'string' ? 
              `<li>${exp}</li>` : 
              `<li>
                <strong>${exp.title}</strong>
                <span>${exp.value}</span>
              </li>`
          ).join('')}
        </ul>
      </section>
      
      <section class="profile">
        <h4>Professional Profile</h4>
        <p>${cardData.profile}</p>
      </section>
      
      <section class="best-portfolio">
        <h4>Best Portfolio</h4>
        <p>${cardData.bestPortfolio}</p>
      </section>
      
      <section class="resume">
        <h4>Powerful Resume</h4>
        <p>${cardData.powerfulResume}</p>
      </section>
    </div>
  `;
}

// Функция для вставки карточек в DOM
function renderCards(containerSelector = '.cards-container') {
  const container = document.querySelector(containerSelector);
  
  if (!container) {
    console.error(`Container with selector "${containerSelector}" not found`);
    return;
  }
  
  // Очищаем контейнер перед добавлением новых карточек
  container.innerHTML = '';
  
  // Добавляем каждую карточку в контейнер
  Object.values(cards).forEach(cardData => {
    const cardHTML = createCardHTML(cardData);
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Функция для получения карточек (заглушка для будущей реализации)
function fetchCards() {
  console.log('Функция для получения карточек с сервера будет реализована позже');
  // Здесь будет код для получения данных с сервера
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  fetchCards();
});