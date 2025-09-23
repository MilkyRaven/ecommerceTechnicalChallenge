const expect = chai.expect;

describe("Q4 - Tests", () => {
  let originalPromotionsList;

  beforeEach(() => {
    originalPromotionsList = document.getElementById("promotions");

    const testItems = originalPromotionsList.querySelectorAll(
      'li[data-id="winter-deals"]'
    );
    testItems.forEach((item) => item.remove());

    const items = originalPromotionsList.querySelectorAll("li");
    items.forEach((item) => item.classList.remove("highlight"));

    const addButton = document.getElementById("add");
    const highlightButton = document.getElementById("highlight");
    addButton.disabled = false;
    addButton.textContent = "Add Winter Deals";
    highlightButton.disabled = false;
    highlightButton.textContent = "Highlight Best Discount";
  });

  it("should add new promotions to the list", () => {
    const initialCount = originalPromotionsList.children.length;
    handleAddClick(promotionData);
    const finalCount = originalPromotionsList.children.length;
    expect(finalCount).to.equal(initialCount + 1);

    const addButton = document.getElementById("add");
    expect(addButton.disabled).to.be.true;
    expect(addButton.textContent).to.equal("Winter Deals Added");
  });

  it("should highlight the item with highest discount", () => {
    handleHighlightClick();
    const highlightedItem =
      originalPromotionsList.querySelector("li.highlight");
    expect(highlightedItem).to.not.be.null;
    expect(highlightedItem.textContent).to.equal("Black Friday");

    const highlightButton = document.getElementById("highlight");
    expect(highlightButton.disabled).to.be.true;
    expect(highlightButton.textContent).to.equal("Already highlighted");
  });

  it("should handle complete add and highlight workflow", () => {
    handleAddClick(promotionData);
    const addedItem = originalPromotionsList.querySelector(
      'li[data-id="winter-deals"]'
    );
    expect(addedItem).to.not.be.null;

    handleHighlightClick();
    const highlightedItem =
      originalPromotionsList.querySelector("li.highlight");
    expect(highlightedItem.textContent).to.equal("Black Friday");
  });
});
