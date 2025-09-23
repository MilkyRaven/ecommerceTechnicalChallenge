import { getDOMElements } from "../scripts/getDomElements.js";
import { promotionData } from "../scripts/data/promotion.js";
import {
  findMaxDiscount,
  createPromotionItem,
} from "../scripts/utils/index.js";
import {
  handleAddClick,
  handleHighlightClick,
  handlePromotionClick,
} from "../scripts/handlers/index.js";

export function setupTests() {
  mocha.setup("bdd");

  window.getDOMElements = getDOMElements;
  window.promotionData = promotionData;
  window.findMaxDiscount = findMaxDiscount;
  window.createPromotionItem = createPromotionItem;
  window.handleAddClick = handleAddClick;
  window.handleHighlightClick = handleHighlightClick;
  window.handlePromotionClick = handlePromotionClick;

  import("./tests.js").then(() => {
    mocha.run();
  });
}
