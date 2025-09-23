import { getDOMElements } from "../getDomElements.js";
import { createPromotionItem, findMaxDiscount } from "../utils/index.js";

const { addButton, highlightButton, promotionsList } = getDOMElements();

export function handleAddClick(promotion) {
  const existingItem = promotionsList.querySelector(
    `li[data-id="${promotion.id}"]`
  );

  if (existingItem) return;

  const newItem = createPromotionItem(promotion);
  promotionsList.appendChild(newItem);

  addButton.disabled = true;
  addButton.textContent = `${promotion.name} Added`;
}

export function handleHighlightClick() {
  if (promotionsList.querySelector(".highlight")) return;

  const promotionItems = Array.from(promotionsList.children);
  const maxDiscountItem = findMaxDiscount(promotionItems);
  maxDiscountItem.classList.add("highlight");

  highlightButton.disabled = true;
  highlightButton.textContent = "Already highlighted";
}

export function handlePromotionClick(event) {
  const { target } = event;

  const promotion = target.closest("#promotions li");
  if (!promotion) return;

  const name = promotion.textContent;
  const discount = target.dataset.discount;

  console.log("Promotion name:", name, "Discount:", discount);
}
