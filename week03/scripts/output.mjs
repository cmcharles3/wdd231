export function setTitle(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;

export function renderSections(sections) {
  const outputContainer = document.querySelector("#sectionsOutput");
  outputContainer.innerHTML = "";

  sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section-item");
    sectionDiv.innerHTML = `
      <strong>Section ${section.sectionNum}</strong> - ${section.roomNum}<br>
      Instructor: ${section.instructor}<br>
      Days: ${section.days} | <strong>Enrolled: ${section.enrolled}</strong>
    `;
    outputContainer.appendChild(sectionDiv);
  });
}