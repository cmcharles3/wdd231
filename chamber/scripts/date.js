// JavaScript code to dynamically update the current year and last modified date on the webpage
// 1. Get the current year and insert it into the span with id="currentYear"
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// 2. Get the last modified date of the document and insert it into id="lastModified"
// document.lastModified is a built-in property that returns a string
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;