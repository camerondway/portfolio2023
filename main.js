import "./style.css";
import "./scss/main.scss";
import { mainLayout } from "./src/layout/layout_main";
import { updateProgressBar } from "./src/progressBar";
import { renderStandings } from "./src/mlb_widget";
import { initNavigation } from "./src/nav";
import { smoothScrollTo } from "./src/smoothScroll";

document.querySelector("#app").innerHTML = mainLayout;
// Call the function to update the progress bar immediately when the page loads
initNavigation();
updateProgressBar();
renderStandings();

document.addEventListener("DOMContentLoaded", () => {
  // Event listener to handle jump links
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target.tagName.toLowerCase() === "a" &&
      target.getAttribute("href").includes("#")
    ) {
      event.preventDefault();
      smoothScrollTo(target.getAttribute("href"));
    }
  });
});
