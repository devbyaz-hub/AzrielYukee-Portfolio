const sections = ['hero', 'projects', 'skills', 'contact'];
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(reveal => observer.observe(reveal));

const viewProjectsBtn = document.getElementById('view-projects-btn');
if (viewProjectsBtn) {
  viewProjectsBtn.addEventListener('click', () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  });
}
