const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customtext = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});
