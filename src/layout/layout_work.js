import { workItemsJson } from "../work_items_json";

function generateWorkItemLayouts(workItems) {
  // Replace the placeholders with actual image URLs

  let result = "";
  for (const workItem of workItems) {
    result += `
      <div class="work-item">
        <div class="work-item__inner-container">
          <div class="work-item__header">
            <h3>${workItem.name}</h3>
          </div>
          <div class="work-item__col-container">
            <div class="work-item__col">
              <div class="work-item__pic" style="background-image: url('${
                workItem.img
              }')"></div>
              <div class="work-item__below-txt">
                <h4>Technologies Used:</h4>
                <ul>
                  ${workItem.tech.map((tech) => `<li>${tech}</li>`).join("")}
                </ul>
              </div>
            </div>
            <div class="work-item__col">
              <h4>Introduction:</h4>
              <p>${workItem.intro}</p>
              <h4>Objectives:</h4>
              <p>${workItem.objectives}</p>
              <h4>Conclusion:</h4>
              <p>${workItem.conclusion}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return result;
}

export const workSectionLayout = generateWorkItemLayouts(
  workItemsJson.work_items
);
