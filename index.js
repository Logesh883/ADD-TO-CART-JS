document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const imageDivs = section.querySelectorAll(".image-div");
    const mainImageContainer = section.querySelector(".image-show");

    imageDivs.forEach((imageDiv) => {
      imageDiv.addEventListener("mouseover", (event) => {
        const targetImageId = event.target.id;
        const targetImageSrc = document.getElementById(targetImageId).src;
        mainImageContainer.innerHTML = `<img src="${targetImageSrc}" alt="" srcset="" />`;
      });
    });
  });
});
