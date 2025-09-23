import { showMessage } from "./ui/infoMessage.js";
import { createPromotionBanner } from "./ui/banner.js";
import { validateCountry, getPromotionForCountry } from "./utils/index.js";

const country = document.querySelector("html").getAttribute("data-country");
const bannerContainer = document.getElementById("banner-container"); //TODO: avoid duplication of this line

async function initPromotions() {
  try {
    if (!validateCountry(country)) return;
    const promotion = await getPromotionForCountry(country);
    createPromotionBanner(bannerContainer, promotion);
  } catch (error) {
    console.error("Failed to load promotions:", error);
    showMessage("Something went wrong. Please try again later");
  }
}
initPromotions();
