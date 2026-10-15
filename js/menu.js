/* ==========================================================================
   MENU MOBILE : ouvre et ferme la navigation sur les petits écrans
   ========================================================================== */

const entete = document.querySelector(".entete");
const boutonMenu = document.querySelector(".bouton-menu");

// Ouvre ou ferme le menu selon son état actuel
function basculerMenu() {
  const estOuvert = entete.classList.toggle("est-ouvert");
  boutonMenu.setAttribute("aria-expanded", String(estOuvert));
}

// Ferme le menu
function fermerMenu() {
  entete.classList.remove("est-ouvert");
  boutonMenu.setAttribute("aria-expanded", "false");
}

// Touche Échap : ferme le menu et rend le focus au bouton
function fermerMenuAvecEchap(evenement) {
  if (evenement.key === "Escape" && entete.classList.contains("est-ouvert")) {
    fermerMenu();
    boutonMenu.focus();
  }
}

if (entete && boutonMenu) {
  boutonMenu.addEventListener("click", basculerMenu);
  document.addEventListener("keydown", fermerMenuAvecEchap);
}
