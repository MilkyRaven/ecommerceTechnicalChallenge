import { loadPromotions } from "../services/loadPromotions.js";

export async function getPromotionForCountry(country) {
  const promotionsData = await loadPromotions();
  const promotion = promotionsData?.[country];

  if (!promotion) {
    console.warn("No promotion configured for:", country);
    showMessage("Check back later for new promotions!");
    return null;
  }

  console.log(`Selected country: ${country} - with promotion:`, promotion);
  return promotion;
}

export function validateCountry(country) {
  if (!country) {
    console.error("data-country attribute not found on <html>!");
    showMessage("No promotions available right now.");
    return false;
  }
  return true;
}
