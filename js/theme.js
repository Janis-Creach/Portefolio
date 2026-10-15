/* ==========================================================================
   THÈME CLAIR / SOMBRE
   - Par défaut, le site suit le thème de l'appareil (et ses changements).
   - Le bouton de la barre de navigation permet de forcer l'autre thème.
   - Le choix est mémorisé ; s'il redevient identique à celui de l'appareil,
     on l'oublie et le site repasse en mode automatique.
   ========================================================================== */

// Clé utilisée pour mémoriser le choix dans le navigateur
const CLE_STOCKAGE_THEME = "portfolio-theme";

// Texte lu par les lecteurs d'écran sur le bouton, selon le thème actif
const LIBELLES_BOUTON_THEME = {
  light: "Passer en mode sombre",
  dark: "Passer en mode clair",
};

const racine = document.documentElement;
const requeteThemeSombre = window.matchMedia("(prefers-color-scheme: dark)");
const boutonTheme = document.querySelector(".bouton-theme");

// Thème réglé sur l'appareil : "dark" ou "light"
function lireThemeAppareil() {
  return requeteThemeSombre.matches ? "dark" : "light";
}

// Thème choisi avec le bouton, ou null si aucun choix n'est mémorisé
function lireThemeMemorise() {
  try {
    const theme = localStorage.getItem(CLE_STOCKAGE_THEME);
    return theme === "light" || theme === "dark" ? theme : null;
  } catch (erreur) {
    return null; // stockage indisponible (navigation privée, etc.)
  }
}

// Mémorise le choix, ou l'oublie s'il correspond déjà à l'appareil
function memoriserTheme(theme) {
  try {
    if (theme === lireThemeAppareil()) {
      localStorage.removeItem(CLE_STOCKAGE_THEME);
    } else {
      localStorage.setItem(CLE_STOCKAGE_THEME, theme);
    }
  } catch (erreur) {
    // Pas de stockage : le thème s'applique quand même sur cette page
  }
}

// Applique le thème à la page et met à jour le libellé du bouton
function appliquerTheme(theme) {
  racine.dataset.theme = theme;

  if (boutonTheme) {
    boutonTheme.setAttribute("aria-label", LIBELLES_BOUTON_THEME[theme]);
  }
}

// Clic sur le bouton : on passe au thème opposé
function basculerTheme() {
  const nouveauTheme = racine.dataset.theme === "dark" ? "light" : "dark";
  memoriserTheme(nouveauTheme);
  appliquerTheme(nouveauTheme);
}

// L'appareil change de thème : on suit, sauf si un choix est mémorisé
function suivreThemeAppareil() {
  if (!lireThemeMemorise()) {
    appliquerTheme(lireThemeAppareil());
  }
}

// Démarrage
appliquerTheme(lireThemeMemorise() || lireThemeAppareil());
requeteThemeSombre.addEventListener("change", suivreThemeAppareil);

if (boutonTheme) {
  boutonTheme.addEventListener("click", basculerTheme);
}
