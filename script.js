document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const flowerFlower = document.querySelector(".flower-flower"); // Get the flower-flower element
    const flowerFlower2 = document.querySelector(".flower-flower2"); // Get the flower-flower element
    const body = document.body;
  
    container.addEventListener("click", function () {
      container.classList.toggle("clicked");
      flowerFlower.classList.toggle("show"); // Toggle the show class
      flowerFlower2.classList.toggle("show"); // Toggle the show class
      body.classList.toggle("active");
    });
  
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.body.classList.remove("not-loaded");
      }, 1000);
    });
  });
