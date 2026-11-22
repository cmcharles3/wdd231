// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const resultsContainer = document.getElementById('results-container');

// Only display if there are parameters in the URL
if (urlParams.has('firstName')) {
  // Define the required fields to display
  const fieldsToDisplay = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'phone', label: 'Mobile Phone' },
    { key: 'orgName', label: 'Organization Name' },
    { key: 'timestamp', label: 'Application Date (Timestamp)' }
  ];

  let htmlOutput = '<ul class="results-list">';

  fieldsToDisplay.forEach(field => {
    const value = urlParams.get(field.key);
    if (value) {
      // Format timestamp if it's the timestamp field
      let displayValue = value;
      if (field.key === 'timestamp') {
        displayValue = new Date(value).toLocaleString();
      }
      htmlOutput += `<li><strong>${field.label}:</strong> ${displayValue}</li>`;
    }
  });

  htmlOutput += '</ul>';
  resultsContainer.innerHTML = htmlOutput;
} else {
  resultsContainer.innerHTML = "<p>No application details found.</p>";
}