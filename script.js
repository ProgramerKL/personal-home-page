// Global variables
let currentTheme = 'light';
let projects = [];

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    loadProjects();
    attachEventListeners();
});

// User data management
function loadUserData() {
    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
}

// Project management
function loadProjects() {
    // Always use the updated sample projects
    projects = [
        {
            id: 1,
            title: "VEX Robotics Competition Robot",
            description: "Award-winning autonomous robot designed for VEX Robotics Competition. Features advanced sensor integration, precise autonomous routines, and efficient driver control systems.",
            image: null,
            emoji: "🤖",
            technologies: ["C++", "VEXcode Pro", "PID Control", "Odometry"],
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            id: 2,
            title: "VEX Event Volunteer",
            description: "Dedicated volunteer at VEX Robotics competitions, assisting with event setup, team check-in, and field management. Mentored teams on robot design and strategy while fostering a positive competition environment.",
            image: null,
            emoji: "🏆",
            technologies: ["Event Setup", "Team Support", "Field Management", "Community Outreach"],
            demoUrl: "#",
            sourceUrl: "#"
        }
    ];
    saveProjects();
    renderProjects();
}

function saveProjects() {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
}

function renderProjects() {
    const gallery = document.getElementById('portfolioGallery');
    
    // Clear existing projects
    gallery.innerHTML = '';
    
    // Render all projects
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        gallery.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'portfolio-item';
    card.innerHTML = `
        <div class="portfolio-image">
            ${project.image ? `<img src="${project.image}" alt="${project.title}">` : `<span style="font-size: 4rem;">${project.emoji}</span>`}
        </div>
        <div class="portfolio-content">
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-description">${project.description}</p>
            <div class="portfolio-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="portfolio-links">
                ${project.demoUrl && project.demoUrl !== '#' ? `<a href="${project.demoUrl}" class="portfolio-link" target="_blank">Live Demo</a>` : ''}
                ${project.sourceUrl && project.sourceUrl !== '#' ? `<a href="${project.sourceUrl}" class="portfolio-link secondary" target="_blank">Source Code</a>` : ''}
            </div>
        </div>
    `;
    return card;
}

// Event listeners
function attachEventListeners() {
    // No event listeners needed for static display
}

// Theme management - API Contract: setTheme(theme: string): void
function setTheme(theme) {
    currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    const themeIndex = ['light', 'dark', 'pastel', 'neon', 'sunset', 'ocean', 'forest', 'purple', 'midnight'].indexOf(theme);
    if (themeIndex !== -1) {
        document.querySelectorAll('.theme-btn')[themeIndex].classList.add('active');
    }
}


// API Contract: loadProjects(): array
function getProjects() {
    return projects;
}