/* ==========================================================================
   BANDEAU DÉFILANT : bouton pour mettre en pause ou relancer le défilement
   (utile au clavier : la pause au survol ne marche qu'à la souris)
   ========================================================================== */

const bandeauDefilant = document.querySelector(".defilement");
const boutonPauseDefilement = document.querySelector(".defilement__pause");

// Met en pause ou relance l'animation du bandeau
function basculerDefilement() {
  const estEnPause = bandeauDefilant.classList.toggle("est-en-pause");
  boutonPauseDefilement.setAttribute("aria-pressed", String(estEnPause));
}

if (bandeauDefilant && boutonPauseDefilement) {
  boutonPauseDefilement.addEventListener("click", basculerDefilement);
}
