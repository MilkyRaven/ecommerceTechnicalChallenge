const promotionsContainer = document.querySelector("#promotions-container");
const region = document.querySelector("html").getAttribute("data-region");

async function loadPromotions() {
  try {
    const response = await fetch("./data.json");
    const promotions = response.json();
    return promotions;
  } catch (error) {
    console.log(error);
  }
}
function createPromotionsCards(promotions) {
  const regionPromotions = promotions.filter(
    (promo) => promo.region === region
  );

  for (const promo of regionPromotions) {
    const promotionCard = document.createElement("div");
    promotionCard.classList.add("promotion-card");
    promotionCard.innerHTML = `
    <h2>${promo.name}</p>
    <h3>${promo.callout}</h3>
    <p>${promo.discount}%</p>`;
    promotionsContainer.appendChild(promotionCard);
  }
}

(async () => {
  const promotions = await loadPromotions();
  console.log(
    `Selected region: ${region} - with promotions: ${JSON.stringify(
      promotions
    )}`
  );
  createPromotionsCards(promotions);
})();
