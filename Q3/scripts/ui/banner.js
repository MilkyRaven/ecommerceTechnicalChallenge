import { showOverlay } from "./overlay.js";

export function createPromotionBanner(container, promotion) {
  if (!promotion) return;

  const banner = document.createElement("div");
  banner.id = "promo-banner";
  banner.innerHTML = ` <h3>${promotion.promoTitle}</h3>
  <p>${promotion.promoMechanic}<p>
  <a href=".${promotion.link}.html">Shop now</a>
  <a id="more-info">More info</a>`;

  const moreInfo = banner.querySelector("#more-info");
  moreInfo.addEventListener("click", (event) => {
    event.preventDefault();
    showOverlay(promotion.promoMechanic);
  });
  container.appendChild(banner);
}
