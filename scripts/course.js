const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 231, title: 'Web Frontend Development I', credits: 2, completed: false }
];

const container = document.getElementById('course-container');
const creditsTotal = document.getElementById('credits-total');
const allBtn = document.getElementById('all-btn');
const wddBtn = document.getElementById('wdd-btn');
const cseBtn = document.getElementById('cse-btn');

function displayCourses(courseList) {
    container.innerHTML = ''; // Clear container

    courseList.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
        `;
        container.appendChild(card);
    });

    // Calculate total credits using reduce
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditsTotal.textContent = `Total Credits: ${totalCredits}`;
}

// Event Listeners for Filter Buttons
allBtn.addEventListener('click', () => {
    displayCourses(courses);
    setActiveButton(allBtn);
});

wddBtn.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
    setActiveButton(wddBtn);
});

cseBtn.addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
    setActiveButton(cseBtn);
});

function setActiveButton(activeBtn) {
    [allBtn, wddBtn, cseBtn].forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Initial Load
displayCourses(courses);