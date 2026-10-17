/* ==========================================================================
   RECHERCHE DANS LES DÉFINITIONS (page definition.html)
   - Filtre les cartes au fur et à mesure de la saisie.
   - Ignore les accents, les majuscules et la ponctuation ; plusieurs mots
     peuvent être combinés (ils doivent tous être présents).
   - Masque les thèmes sans résultat et annonce le nombre de résultats.
   ========================================================================== */

// Textes affichés sous la barre de recherche (lus aussi par les lecteurs d'écran)
const TEXTES_RECHERCHE = {
  aucun: (recherche) => `Aucune définition ne correspond à « ${recherche} ».`,
  une: "1 définition trouvée.",
  plusieurs: (nombre) => `${nombre} définitions trouvées.`,
};

const champRecherche = document.querySelector("#recherche-definitions");
const resultatRecherche = document.querySelector("#recherche-resultat");
const sectionsDefinitions = [...document.querySelectorAll(".glossaire")].map((liste) => liste.closest("section"));

// Met un texte en minuscules, sans accents ni ponctuation, pour pouvoir comparer
function normaliserTexte(texte) {
  return texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Texte de chaque définition, préparé une seule fois.
// La version « compacte » (sans espaces) permet de trouver « wifi » dans « Wi-Fi ».
const indexDefinitions = [...document.querySelectorAll(".glossaire__entree")].map((element) => {
  const texte = normaliserTexte(element.textContent);
  return { element, texte, compact: texte.replaceAll(" ", "") };
});

// Vrai si tous les mots recherchés apparaissent dans la définition
function definitionCorrespond(definition, mots) {
  return mots.every((mot) => definition.texte.includes(mot) || definition.compact.includes(mot));
}

// Affiche ou masque un élément en basculant la classe CSS « est-masque »
function afficherElement(element, visible) {
  element.classList.toggle("est-masque", !visible);
}

// Masque les thèmes, et leur lien du sommaire, qui n'ont plus aucune définition visible
function mettreAJourThemes() {
  for (const section of sectionsDefinitions) {
    const visible = section.querySelector(".glossaire__entree:not(.est-masque)") !== null;
    afficherElement(section, visible);

    const lienSommaire = document.querySelector(`.sommaire__lien[href="#${section.id}"]`);
    if (lienSommaire) {
      afficherElement(lienSommaire, visible);
    }
  }
}

// Message sous la barre : nombre de résultats, rien si la recherche est vide
function annoncerResultat(recherche, nombre) {
  if (recherche === "") {
    resultatRecherche.textContent = "";
  } else if (nombre === 0) {
    resultatRecherche.textContent = TEXTES_RECHERCHE.aucun(recherche);
  } else if (nombre === 1) {
    resultatRecherche.textContent = TEXTES_RECHERCHE.une;
  } else {
    resultatRecherche.textContent = TEXTES_RECHERCHE.plusieurs(nombre);
  }
}

// À chaque saisie : affiche seulement les définitions qui correspondent
function filtrerDefinitions() {
  const recherche = champRecherche.value.trim();
  const mots = normaliserTexte(recherche).split(" ").filter(Boolean);
  let nombre = 0;

  for (const definition of indexDefinitions) {
    const visible = definitionCorrespond(definition, mots);
    afficherElement(definition.element, visible);
    if (visible) {
      nombre += 1;
    }
  }

  mettreAJourThemes();
  annoncerResultat(recherche, nombre);
}

// Touche Échap : vide la recherche et réaffiche tout
function effacerRechercheAvecEchap(evenement) {
  if (evenement.key === "Escape" && champRecherche.value !== "") {
    evenement.preventDefault();
    champRecherche.value = "";
    filtrerDefinitions();
  }
}

if (champRecherche && resultatRecherche) {
  champRecherche.addEventListener("input", filtrerDefinitions);
  champRecherche.addEventListener("keydown", effacerRechercheAvecEchap);

  // Le navigateur peut remettre la recherche précédente (bouton « retour ») : on l'applique
  if (champRecherche.value.trim() !== "") {
    filtrerDefinitions();
  }
}
