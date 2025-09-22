//your JS code here. If required.

const squares = document.querySelectorAll(".square");

// Loop through each square
squares.forEach((sq) => {
  // When mouse enters a square
  sq.addEventListener("mouseover", () => {
    squares.forEach((other) => {
      if (other === sq) {
        other.style.backgroundColor = "#E6E6FA"; // keep Lavender
      } else {
        other.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  // When mouse leaves the square
  sq.addEventListener("mouseout", () => {
    squares.forEach((other) => {
      other.style.backgroundColor = "#E6E6FA"; // reset all to Lavender
    });
  });
});



