// TP4 — Fetch & API
// Complétez ce fichier en suivant les exercices du sujet.

// ===========================================
// TEMPS 1 — JSON local (exercices 1.1 à 1.3)
// ===========================================
const conteneur = document.querySelector('#projets-liste');

async function chargerEtAfficher() {
  // État : chargement
  conteneur.innerHTML = '<p class="loading">Chargement...</p>';

  try {
    const reponse = await fetch('./data.json');

    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }

    const donnees = await reponse.json();

    // État : succès
    afficherProjets(donnees.projets);

  } catch (erreur) {
    // État : erreur
    conteneur.innerHTML = `<p class="error">Impossible de charger les données : ${erreur.message}</p>`;
    console.error(erreur);
  }
}

function afficherProjets(projets) {
  conteneur.innerHTML = '';
  projets.forEach((projet) => {
    const carte = document.createElement('article');
    carte.classList.add('carte');
    carte.innerHTML = `
      <h3>${projet.titre}</h3>
      <p>${projet.description}</p>
      <p class="annee">${projet.annee}</p>
      <div class="tags">
        ${projet.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    `;
    conteneur.append(carte);
  });
}

// Lancer au chargement
chargerEtAfficher();


// ===========================================
// TEMPS 2 — API distante (exercices 2.1 à 2.3)
// ===========================================
const conteneurapi = document.querySelector('#api-liste');

async function chargerPays() {
  conteneurapi.innerHTML = '<p class="loading">Chargement des pays...</p>';

  try {
    const reponse = await fetch('https://restcountries.com/v3.1/region/europe');
    if (!reponse.ok)
      throw new Error (`Erreur serveur : ${reponse.status}`);
        const pays = await reponse.json();

    console.log(pays);        // Voir le tableau complet
    console.log(pays[0]);     // Voir le premier pays

    conteneurapi.innerHTML = '';
    pays.forEach((p) => {
      const carte = document.createElement('article');
      carte.classList.add('carte');
      carte.innerHTML = `
        <h3>${p.flag} ${p.name.common}</h3>
        <p>Capitale : ${p.capital ? p.capital[0] : 'Inconnue'}</p>
        <p>Population : ${p.population.toLocaleString()}</p>
      `;
      conteneurapi.append(carte);
    });

  } catch (erreur) {
    conteneurapi.innerHTML = '<p class="error">Impossible de charger les pays.</p>';
 console.error("Détail de l'erreur :", erreur);
}
}

chargerPays();


// ===========================================
// TEMPS 3 — Recherche + API (exercices 3.1 et 3.2)
// ===========================================
const conteneurrech = document.querySelector('#recherche-resultats');

const input = document.querySelector('#recherche');

input.addEventListener('input', async () => {
  const terme = input.value.trim();

  if (terme.length < 2) {
    conteneurrech.innerHTML = '<p>Tapez au moins 2 caractères.</p>';
    return;
  }

  conteneurrech.innerHTML = '<p class="loading">Recherche...</p>';

  try {
    const reponse = await fetch(`https://restcountries.com/v3.1/name/${terme}`);

    if (!reponse.ok) {
      conteneurrech.innerHTML = '<p>Aucun résultat.</p>';
      return;
    }

    const pays = await reponse.json();
    // ... afficher les résultats (réutiliser le pattern d'affichage)

    
    conteneur.innerHTML = '';

    pays.forEach((p) => {
      const carte = document.createElement('article');
      carte.classList.add('carte');
      carte.innerHTML = `
        <h3>${p.flag} ${p.name.common}</h3>
        <p>Capitale : ${p.capital ? p.capital[0] : 'Inconnue'}</p>
        <p>Population : ${p.population.toLocaleString()}</p>
      `;
      conteneur.append(carte);
    });

  } catch (erreur) {
    conteneurrech.innerHTML = '<p class="error">Erreur de recherche.</p>';
  }
});


// ===========================================
// TEMPS 4 — Bonus (exercices 4.1 à 4.3)
// ===========================================

// Votre code ici...
