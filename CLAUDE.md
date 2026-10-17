# CLAUDE.md

## Branche de travail
- Travaille **uniquement dans la branche actuelle : `beta`**.
- Ne crée pas de nouvelle branche et ne change pas de branche sans demande explicite.
- Ne touche pas à `main` (ou `master`) et ne fais pas de merge ni de force push sans que je le demande.

## Séparation stricte HTML / CSS / JavaScript
Le CSS ne va **JAMAIS** dans le HTML. Cette règle n'a aucune exception.

- **HTML** : uniquement la structure et le contenu, dans des fichiers `.html`.
  - Pas de balise `<style>`.
  - Pas d'attribut `style="..."`.
  - Pas de JavaScript inline (`onclick="..."`, balise `<script>` avec du code, etc.).
- **CSS** : uniquement dans des fichiers `.css` séparés, liés avec `<link rel="stylesheet" href="...">`.
- **JavaScript** : uniquement dans des fichiers `.js` séparés, liés avec `<script src="..." defer></script>`.
- Pour changer un style, ajoute ou modifie une classe dans le fichier CSS. Ne mets jamais de style dans le HTML ou le JS (sauf pour basculer une classe CSS existante).

### Structure de fichiers attendue

/
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── assets/
└── (images, polices, etc.)

Si le projet est plus gros, découpe en plusieurs fichiers (ex. `css/header.css`, `js/menu.js`) plutôt que d'agrandir un seul fichier.

## Code modifiable par un humain
Le code doit rester facile à lire et à modifier à la main.

- Pas de minification, pas d'obfuscation, pas de code généré illisible.
- Pas de framework, de bundler ou d'étape de build, sauf si je le demande. Du HTML, CSS et JS simples.
- Noms de fichiers, classes, variables et fonctions clairs et explicites.
- Indentation cohérente et code aéré.
- Commentaires courts en français pour expliquer les parties importantes.
- Fonctions courtes qui font une seule chose.
- Pas de duplication : factorise les styles et scripts répétés.
- Les valeurs à modifier souvent (couleurs, tailles, textes) sont regroupées en haut du fichier CSS dans des variables (`:root { --couleur-principale: ...; }`) ou dans des constantes JS.

## Déploiement : GitHub Pages
- Le site est publié avec **GitHub Pages**.
- Le site doit fonctionner en statique pur : pas de serveur, pas de backend.
- Utilise des **chemins relatifs** pour tous les liens, CSS, JS et images (ex. `css/style.css`, pas `/css/style.css`), car le site peut être servi depuis `/nom-du-repo/`.
- Le point d'entrée est `index.html` à la racine (ou dans le dossier configuré pour Pages).
- Avant de dire que c'est terminé, vérifie que tous les chemins fonctionnent en relatif et qu'aucun fichier n'est manquant.

## Choix du modèle pour les agents
Quand tu lances des agents (sous-agents, tâches déléguées), choisis le modèle selon la difficulté de la tâche :

- **Tâches simples → Haiku** (`claude-haiku-5-5`) :
  - renommer des fichiers ou des variables,
  - corriger une faute de frappe ou un petit bug évident,
  - ajuster une couleur, une taille ou un texte,
  - vérifier que les chemins sont bien relatifs,
  - mettre en forme ou indenter du code.
- **Tâches difficiles → Sonnet** (`claude-sonnet-5-5`) :
  - concevoir ou restructurer une partie du site,
  - écrire de la logique JavaScript complexe,
  - déboguer un problème qui n'est pas évident,
  - modifications touchant plusieurs fichiers à la fois,
  - décisions d'architecture.
- En cas de doute sur la difficulté, commence avec Haiku, et passe à Sonnet si la tâche s'avère trop complexe.

## Façon de travailler
- Fais des modifications ciblées et ne réécris pas des fichiers entiers sans raison.
- Explique brièvement ce que tu as changé et dans quel fichier.
- En cas de doute sur une demande, pose une question avant de tout refaire.

## Mémoire du projet (décisions et contexte à retenir)

### Le site
- Portfolio de **Janis Creach**, étudiant en BTS SIO option SISR, en recherche de stage de technicien en administration systèmes et réseaux.
- **Mettre l'accent sur le réseau et la cybersécurité**, pas sur la programmation.
- Le contenu vient du CV (BTS SIO SISR depuis 2025, Bac Pro SN-RISC 2022-2025, stages au lycée Félix le Dantec en juin 2025 et chez Axeinfo en juin 2024, certifications ANSSI, CNIL et Root Me obtenues en 2025, Cisco en 2026). **Ne rien inventer** : toute nouvelle information doit venir de Janis ou de son CV.
- Janis se décrit au masculin dans son CV (« Sérieux et impliqué », « technicien ») : garder ces accords.
- Pages : `index.html`, `cv.html`, `certification.html`, `documentation.html`, `formation-experience.html`, `projets.html`, `definition.html` (glossaire des notions, onglet « Définition » de la barre), `mentions-legales.html` (accessible seulement depuis le lien du pied de page).
- L'en-tête et le pied de page sont **recopiés dans les 8 pages** (pas d'étape de build) : toute modification doit être faite dans les 8 fichiers.
- Barre de navigation : 6 liens (Mon CV, Certification, Documentation, Formation/Expérience, Projets, Définition). Elle tient au-dessus de 960 px (911 px nécessaires) ; en cas d'ajout d'un lien, vérifier qu'elle ne déborde pas, sinon relever le seuil du menu mobile dans `css/header.css`.

### Données personnelles
- Ne **jamais publier** le téléphone ni l'adresse postale de Janis. Sur les pages du site, seuls la ville ou le département apparaissent, et pas de photo.
- CV téléchargeable : `assets/cv-janis-creach.pdf` (bouton sur `cv.html`). C'est le CV Canva de Janis dont le téléphone et l'adresse ont été **réellement effacés** : texte, icônes, et aussi les copies cachées dans la couche d'accessibilité du PDF (champs `/E` des éléments de structure). La photo y est conservée : Janis a demandé d'effacer seulement le téléphone et l'adresse (à retirer aussi s'il le demande). Si Janis fournit un nouveau CV, refaire cet effacement avant de le publier, puis vérifier qu'il ne reste aucune trace (texte extrait **et** objets internes du PDF).
- Contacts publiés : email `janis.creach@gmail.com` et GitHub `https://github.com/Janis-Creach`.
- LinkedIn : lien **provisoire** (`https://www.linkedin.com/`, marqué « À FAIRE ») en attendant l'adresse du profil.

### Organisation du code
- CSS : `css/style.css` importe dans l'ordre `variables.css`, `base.css`, `header.css`, `footer.css`, `components.css`, `accueil.css`, `pages.css`.
- Couleurs dans `css/variables.css` avec `light-dark(clair, sombre)`. `--largeur-max: 100%` : le contenu prend toute la largeur (mettre `1200px` pour le recentrer).
- JS : `js/theme.js` (mode sombre automatique selon l'appareil + bouton, choix mémorisé dans `localStorage`, clé `portfolio-theme`), `js/menu.js` (menu mobile), `js/defilement.js` (bouton pause du bandeau, chargé seulement sur l'accueil).
- Design inspiré de `DESIGN.md` : bordures de 1 px visibles, motif de pixels (`assets/motif-pixels.svg`), logo pixel « JC » (`assets/logo.svg`). Polices Google Fonts : Space Grotesk, Inter et Space Mono.
- Piège connu : la remise à zéro `ul[class], ol[class] { padding: 0 }` annule le `padding` posé par une classe sur une liste. Utiliser une marge à la place.

### Publication (GitHub Pages)
- Publié depuis `main`, dossier racine : https://janis-creach.github.io/Portefolio/
- `_config.yml` empêche Jekyll de publier `CLAUDE.md` et `DESIGN.md` et désactive le thème par défaut : **ne pas le supprimer**.
- `google89cfc57ed8b91046.html` sert à la vérification Google Search Console : **le laisser à la racine**.
- Le site reste volontairement dans le sous-dossier `/Portefolio/`. Google n'affiche donc ni le logo ni le nom du site dans ses résultats (il faudrait un dépôt `Janis-Creach.github.io` ou un nom de domaine) : choix accepté par Janis.
- Mise sur `main` (**seulement quand Janis le demande**) : `git push origin beta:main` si c'est une avance rapide. Si `main` contient des commits de fusion de pull requests absents de `beta`, intégrer d'abord `origin/main` dans `beta`.
- Hébergeur pour les mentions légales : GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis. GitHub ne publie pas de numéro de téléphone.

### Avant de dire que c'est terminé
- Vérifier les 8 pages en clair et en sombre, de 320 px à 1920 px de large : aucun débordement horizontal, aucune erreur dans la console.
- Vérifier qu'il n'y a aucun CSS ni JS dans le HTML, que les chemins sont relatifs et que toutes les classes utilisées existent dans le CSS.
