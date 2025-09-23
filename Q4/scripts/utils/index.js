export const findMaxDiscount = (items) => {
  let maxItem = null;
  let maxDiscount = 0;

  for (const item of items) {
    const discount = parseFloat(item.getAttribute("data-discount") || 0);
    if (discount > maxDiscount) {
      maxDiscount = discount;
      maxItem = item;
    }
  }
  return maxItem;
};

export const createPromotionItem = (promotion) => {
  const newItem = document.createElement("li");

  newItem.textContent = promotion.name;
  newItem.setAttribute("data-discount", promotion.dataDiscount);
  newItem.setAttribute("data-id", promotion.id);
  newItem.style.color = promotion.color;

  return newItem;
};
