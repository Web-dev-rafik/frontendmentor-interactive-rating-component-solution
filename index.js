// rating and thank elements
const ratingElement = document.getElementById("rating");
const thankElement = document.getElementById("thank");
// form
const ratingFormElement = document.getElementById("rating-form");
const scoreElement = document.getElementById("score");

// radio buttons associated with each rating
const ratingInputElements =
  ratingElement.querySelectorAll('input[name="rate"]');

ratingFormElement.addEventListener("submit", (e) => {
  // prevent form from reloading
  e.preventDefault();
  ratingInputElements.forEach((input) => {
    if (input.checked) {
      // display the rating chosen by the user
      scoreElement.textContent = input.value;
    }
  });
  // hide rating
  ratingElement.style.display = "none";
  // display thank
  thankElement.style.display = "flex";
});
