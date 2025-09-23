export async function loadPromotions() {
  try {
    const response = await fetch("./data.json");
    const promotions = response.json();
    return promotions;
  } catch (error) {
    console.error("Failed to load promotions:", error);
  }
}
