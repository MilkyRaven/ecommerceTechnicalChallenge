export function showOverlay(details) {
  const overlay = document.createElement("div");
  overlay.id = "more-info-overlay";
  overlay.classList.add("overlay");

  overlay.innerHTML = `
    <div class="popup">
      <p>More details</p>
      <p>${details}</p>
      <button id="close-popup">Close</button>
    </div>
  `;

  overlay.querySelector("#close-popup").addEventListener("click", () => {
    overlay.remove();
  });

  document.body.appendChild(overlay);
}
