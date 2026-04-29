const projets = [
  { id: 1, titre: "Site MMI", desc: "Projet Web S1", cat: "web" },
  { id: 2, titre: "Design Logo", desc: "Création vectorielle", cat: "design" }
];

const container = document.querySelector('.projects-grid');
const modale = document.querySelector('#modale');

// --- INTERACTION 1 : Filtrage par tag ---
function render(filter = 'all') {
  container.innerHTML = '';
  const filtered = filter === 'all' ? projets : projets.filter(p => p.cat === filter);
  
  filtered.forEach(p => {
    container.innerHTML += `
      <article class="project-card">
        <h3>${p.titre}</h3>
        <button onclick="ouvrir(${p.id})">Détails</button>
      </article>`;
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    btn.classList.add('active');
    render(btn.dataset.filter);
  });
});

// --- INTERACTION 2 : Modale (Focus + Escape + ARIA) ---
function ouvrir(id) {
  const p = projets.find(item => item.id === id);
  document.querySelector('#modale-body').innerText = p.desc;
  
  modale.classList.add('is-visible');
  modale.setAttribute('aria-hidden', 'false'); // Pour les lecteurs d'écran
  document.querySelector('.close-btn').focus(); // Gestion du focus
}

function fermer() {
  modale.classList.remove('is-visible');
  modale.setAttribute('aria-hidden', 'true');
}

// Touche Escape pour fermer
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") fermer();
});

render();