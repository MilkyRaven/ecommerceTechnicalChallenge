const ctaButtons = document.querySelectorAll(".hero button");

for (const button of ctaButtons) {
  button.addEventListener("click", () => {
    const ctaName = button.getAttribute("data-cta");
    console.log(`You have pressed the ${ctaName} button`);
  });
}
