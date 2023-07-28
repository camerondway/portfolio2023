// Function to handle smooth scroll for jump links
export function smoothScrollTo(targetHash) {
  const targetElement = document.querySelector(targetHash);
  if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top;
    const headerOffset = 70; // Adjust this value to account for fixed header height
    const totalOffset = offsetTop + window.scrollY - headerOffset;

    window.scrollTo({
      top: totalOffset,
      behavior: "smooth",
    });
  }
}
