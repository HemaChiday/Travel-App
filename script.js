function bookTravel() {
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.querySelector(".close-button");
  
  modal.style.display = "block";

  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
