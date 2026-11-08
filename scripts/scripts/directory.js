const container = document.getElementById('directory-container');
const gridBtn = document.getElementById('gridViewBtn');
const listBtn = document.getElementById('listViewBtn');

async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Data not found');
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error fetching members:", error);
    container.innerHTML = "<p>Sorry, member data is currently unavailable.</p>";
  }
}

function displayMembers(members) {
  container.innerHTML = ""; // clear existing

  members.forEach(member => {
    let card = document.createElement('div');
    card.classList.add('member-card');

    // Determine membership level text
    let levelText = "Member";
    if (member.membership === 2) levelText = "Silver";
    if (member.membership === 3) levelText = "Gold";

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><strong>Level: ${levelText}</strong></p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

// Toggle Views
gridBtn.addEventListener('click', () => {
  container.classList.add('grid');
  container.classList.remove('list');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
  container.classList.add('list');
  container.classList.remove('grid');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
});

// Initialize
getMembers();