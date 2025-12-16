// Scroll reveal animation
const elements = document.querySelectorAll(
  '.section, .project, .skill'
);

elements.forEach(el => el.classList.add('hidden'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
},{ threshold:0.15 });

elements.forEach(el => observer.observe(el));

// Button hover effect
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mouseenter',()=>{
    btn.style.transform='translateY(-4px) scale(1.03)';
  });
  btn.addEventListener('mouseleave',()=>{
    btn.style.transform='';
  });
});

// Floating card mouse tilt
const card = document.querySelector('.floating-card');

document.addEventListener('mousemove', e=>{
  const x = (window.innerWidth/2 - e.pageX)/30;
  const y = (window.innerHeight/2 - e.pageY)/30;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener('mouseleave',()=>{
  card.style.transform='';
});
