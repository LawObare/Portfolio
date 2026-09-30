document.documentElement.classList.add('motion-ready');

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('.email-card')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  window.location.href = `mailto:hello@lawrenceobare.dev?subject=Portfolio enquiry from ${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`;
});
document.querySelector('#year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const navbar = document.querySelector('.navbar');
const progress = document.querySelector('.scroll-progress span');

const updateScrollState = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${maxScroll > 0 ? window.scrollY / maxScroll : 0})`;
  navbar.classList.toggle('is-scrolled', window.scrollY > 18);
};
window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

if (!reduceMotion) {
  requestAnimationFrame(() => document.body.classList.add('page-loaded'));
}

const revealTargets = document.querySelectorAll('.scroll-section');
const navItems = [...document.querySelectorAll('.nav-links a')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealTargets.forEach((section) => sectionObserver.observe(section));

const navigationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navItems.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

document.querySelectorAll('main section[id]').forEach((section) => navigationObserver.observe(section));
