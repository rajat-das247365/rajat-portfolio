// Example projects data
const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A personal portfolio website built with HTML, CSS, and JavaScript.',
    link: '#'
  },
  {
    title: 'Weather App',
    desc: 'A weather forecast app using a public API and modern UI.',
    link: '#'
  },
  {
    title: 'Task Manager',
    desc: 'A simple task management tool with local storage support.',
    link: '#'
  }
];

const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.desc}</div>
      <a class="project-link" href="${project.link}" target="_blank">View Project</a>
    `;
    projectsGrid.appendChild(card);
  });
}

// Contact form handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
} 