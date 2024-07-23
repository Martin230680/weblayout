document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("burgeropen");

  });

  let menulinks = document.querySelectorAll(".header__nav").forEach(function (element) {
    element.addEventListener("click", function () {
    document.querySelector("header").classList.remove("burgeropen");
    })
  })

});



