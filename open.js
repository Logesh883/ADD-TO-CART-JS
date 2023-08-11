let buyContainers = document.querySelectorAll("#cart");
let hiddenContent = document.querySelector(".item-details-container");

buyContainers.forEach((container) => {
  container.addEventListener("click", () => {
    hiddenContent.classList.toggle("show");
  });
});
