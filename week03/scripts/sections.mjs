export function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  sectionSelect.innerHTML = ""; // Clear existing options
  
  // Using 'sections' instead of 'byuiCourse.sections' here
  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNum;
    option.textContent = `Section ${section.sectionNum}`;
    sectionSelect.appendChild(option);
  });
}