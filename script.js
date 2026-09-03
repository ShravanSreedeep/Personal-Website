const nav = document.querySelector('.nav'), menu = document.querySelector('.menu'); menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const items = document.querySelectorAll('.cap-grid article,.timeline article,.project,.principles-grid div');
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 600, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' }); io.unobserve(e.target) } }), { threshold: .08 });
items.forEach(x => { x.style.opacity = 0; io.observe(x) });
