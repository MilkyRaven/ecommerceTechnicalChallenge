import { getDOMElements } from "./getDomElements.js";
import { promotionData } from "./data/promotion.js";
import {
  handleAddClick,
  handleHighlightClick,
  handlePromotionClick,
} from "./handlers/index.js";

const { addButton, highlightButton, promoContainer } = getDOMElements();

addButton.addEventListener("click", () => {
  handleAddClick(promotionData);
});

highlightButton.addEventListener("click", handleHighlightClick);

promoContainer.addEventListener("click", handlePromotionClick);
