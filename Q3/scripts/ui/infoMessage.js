const bannerContainer = document.getElementById("banner-container"); //TODO: duplicado

export function showMessage(msg) {
  bannerContainer.textContent = msg;
}
