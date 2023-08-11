document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".cart-button");
  const countElement = document.querySelector(".count");
  const cartDetailsContainer = document.querySelector(
    ".item-details-container"
  );
  const cartDetails = cartDetailsContainer.querySelector(".item-details");

  let itemCount = 0;

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      itemCount++;
      countElement.textContent = itemCount;

      const itemContainer = button.closest(".content-container");
      const itemName = itemContainer.querySelector("h3").textContent;
      const itemPrice = itemContainer.querySelector("h4").textContent;

      const newItemDetails = document.createElement("div");
      newItemDetails.classList.add("item-details-card");
      newItemDetails.innerHTML = `
        <h3>${itemName}</h3>
        <p>${itemPrice}</p>
        <div class="delete-button" id="red">Delete</div>
      `;

      cartDetails.appendChild(newItemDetails);

      const deleteButton = newItemDetails.querySelector(".delete-button");
      deleteButton.addEventListener("click", () => {
        cartDetails.removeChild(newItemDetails);
        itemCount--;
        countElement.textContent = itemCount;

        if (itemCount === 0) {
          confirm("Cart to be empty");
        }
      });
    });
  });
});
