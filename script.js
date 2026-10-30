
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const texto =
`Olá! Vim pelo site da WAN INTERNET.

*Nome:* ${data.get('nome') || ''}
*WhatsApp:* ${data.get('telefone') || ''}
*Cidade:* ${data.get('cidade') || ''}
*Interesse:* ${data.get('interesse') || ''}
*Mensagem:* ${data.get('mensagem') || 'Não informada'}`;

  window.open(`https://wa.me/5575981837899?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
});
