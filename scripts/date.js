// date.js
const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

// Set current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('lastModified').innerHTML = document.lastModified;