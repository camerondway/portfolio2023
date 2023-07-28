// Function to update the progress bar based on the user's scroll position
export function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progress + "%";
}

// Add a scroll event listener to update the progress bar on scroll
window.addEventListener("scroll", updateProgressBar);
