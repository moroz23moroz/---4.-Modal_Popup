// VARIABLES

const modal = document.querySelector(".modal");
const bts = document.querySelector(".bts");
const closeBts = document.querySelector(".close");

bts.addEventListener("click", openModal);
closeBts.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//OPEN MODAL
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

//CLOSE MODAL
function closeModal() {
  modal.style.display = "none";
}
