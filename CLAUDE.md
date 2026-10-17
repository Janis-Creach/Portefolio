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
- Le contenu vient du CV et de ce que Janis a précisé. **Ne rien inventer** : toute nouvelle information doit venir de Janis ou de son CV.
  - Formation : BTS SIO SISR depuis 2025, Bac Pro SN-RISC 2022-2025 (lycée Félix le Dantec, Lannion).
  - Stages : lycée Félix le Dantec (juin 2025, Alcasar) et Axeinfo (juin 2024). Stage chez Pulsat à Ouessant (décembre 2022 : dépannages en électricité générale, plomberie et un peu de multimédia) : moins lié à son activité principale, il figure **seulement** dans la frise de `formation-experience.html`, ni sur `cv.html` ni dans le compteur « Stages effectués » de l'accueil (choix de Janis).
  - Certifications (années données par Janis) : ANSSI, CNIL et Root Me (2025), Cisco (2026) ; SST (2024) et formation à l'habilitation électrique B1V (2023, attestation de formation), absentes du CV PDF.
- Choix de contenu : pas de niveaux, jauges ou pourcentages de compétences, ni langues ni centres d'intérêt (absents du CV). Classement fidèle au CV (ex. GLPI en gestion de parc, pas en supervision).
- Contenu pas encore fourni par Janis :
  - `documentation.html` : seul le tutoriel VLAN existe, rédigé par l'assistant (contenu générique), à faire valider par Janis ; les 3 entrées « À venir » attendent ses vrais documents.
  - `projets.html` : seule la carte Alcasar décrit une mission réelle ; les autres regroupent des compétences du CV. N'y ajouter aucun détail (contexte, durée, résultats) qui ne vienne pas de Janis.
- **Informations répétées sur plusieurs pages** : en modifier une, c'est mettre à jour les autres.
  - Certification : carte de `certification.html` (+ sa `meta description`) + liste « Certifications » de `cv.html` + compteur « Certifications et MOOC » de l'accueil (6). La frise « MOOC et certifications » de `formation-experience.html` ne cite que les certifications cyber (pas SST ni B1V) ; la carte « Certification » de l'accueil met en avant SecNumacadémie.
  - Stage : frise « Expérience » de `formation-experience.html` + « Expérience professionnelle » de `cv.html` + compteur « Stages effectués » de l'accueil (2), sauf exception voulue par Janis (Pulsat).
  - Projet : `projets.html` + « Projet à la une » et « Réalisations » de l'accueil.
  - Document : `documentation.html` + carte « Documentation » de l'accueil.
  - Technologie ou compétence : bandeau défilant et carte « Compétences » de l'accueil + `cv.html` + étiquettes de `projets.html`.
  - Notion du glossaire : `definition.html`, puis le nombre de notions et de thèmes de la ligne « Page Définition » ci-dessous (il n'apparaît que dans ce fichier).
- Cartes de `certification.html` : badge court, année (précédée du texte caché « Obtenue en »), titre, organisme, « Format » et « Domaine ».
  - SST : organisme « INRS et Assurance maladie – Risques professionnels » (ils délivrent le certificat ensemble).
  - B1V : « Référentiel : norme NF C 18-510 » (une norme ne délivre rien ; l'habilitation est délivrée par l'employeur).
  - Ne nommer aucun organisme de formation tant que Janis ne l'a pas donné.
  - Afficher seulement l'année d'obtention, jamais « valide » ou « en cours » : le SST est valable 24 mois (renouvelé par un stage MAC) et la B1V se recycle en principe tous les 3 ans.
  - B1V : Janis a seulement une **attestation de formation** (pas de titre d'habilitation signé par un employeur). Intitulé : « Formation à l'habilitation électrique B1V », sur la carte, dans la liste de `cv.html` et dans la `meta description` ; l'introduction de la page parle de « certifications et formations », sans « habilitations ».
- Janis se décrit au masculin dans son CV (« Sérieux et impliqué », « technicien ») : garder ces accords.
- Pages : `index.html`, `cv.html`, `certification.html`, `documentation.html`, `formation-experience.html`, `projets.html`, `definition.html` (glossaire des notions, onglet « Définition » de la barre), `mentions-legales.html` (accessible seulement depuis le lien du pied de page).
- L'en-tête et le pied de page sont **recopiés dans les 8 pages** (pas d'étape de build) : toute modification doit être faite dans les 8 fichiers. Ils sont identiques, sauf `aria-current="page"`, placé sur le lien de la page en cours.
- Accueil (`index.html`), dans l'ordre : présentation + terminal, bandeau défilant des technos, grille « En bref », « Réalisations », accroche « Un sigle vous échappe ? » vers les définitions, bloc contact.
  - Bandeau des technos : la liste est en double (la copie `aria-hidden="true"` juste dessous fait boucler le défilement). Toute modification se fait dans les deux listes, dans le même ordre.
- Page Définition : 69 notions en 7 thèmes (formation, réseau, sécurité, systèmes et virtualisation, OS, supervision et support, organismes), avec une barre de recherche. Chaque notion est un `<div class="glossaire__entree" id="...">` contenant `<dt>` (terme + `.glossaire__nom-complet`) et `<dd>` : pour en ajouter une, copier ce bloc ; la recherche la trouve automatiquement. L'`id` permet un lien direct (ex. `definition.html#dhcp`, utilisé par l'accroche de l'accueil). Les définitions ont été vérifiées avec des sources : toute nouvelle définition doit être exacte (vérifier si besoin).
  - Chaque `id` de notion est unique, y compris face aux `id` des thèmes (ex. la notion Supervision a l'`id` `supervision-definition`, car `#supervision` est la section). Nouveau thème : une `<section class="section" id="...">` avec un `<dl class="glossaire">`, plus un lien `.sommaire__lien` vers `#id` dans le sommaire (la recherche s'en sert pour masquer les thèmes vides). Pour qu'une autre graphie soit trouvée, l'écrire dans le texte (ex. « portefolio »).
  - Thème « Organismes » : ANSSI, CNIL, RGPD, Root Me, Cisco, Stormshield, VMware. Pas de `.glossaire__nom-complet` pour une marque qui n'est pas un sigle (Cisco, Stormshield, VMware).
  - Méthode suivie : faire vérifier chaque nouvelle définition par des agents avec des sources (WebSearch), ne garder que les faits sourcés, et éviter les dates incertaines, les chiffres (nombre de magasins, prix…) et les phrases promotionnelles ou spéculatives.
  - Carte « VMware ESXi » : elle précise, à la demande de Janis, que l'hyperviseur s'appelle « ESX » depuis la version 9.0 (17 juin 2025, source Broadcom KB 316595) et « ESXi » jusqu'à la 8.x. Les autres mentions d'« ESXi » sur le site restent justes (versions utilisées par Janis).
- Barre de navigation : 6 liens (Mon CV, Certification, Documentation, Formation/Expérience, Projets, Définition). Elle tient au-dessus de 960 px (911 px nécessaires) ; en cas d'ajout d'un lien, vérifier qu'elle ne déborde pas, sinon relever le seuil du menu mobile dans `css/header.css`.

### Données personnelles
- Ne **jamais publier** le téléphone ni l'adresse postale de Janis. Seule localisation publiée : « Saint-Martin-des-Champs (29) » dans les coordonnées de `cv.html` (Lannion est le lieu du lycée et des stages). Pas de photo sur les pages du site.
- CV téléchargeable : `assets/cv-janis-creach.pdf` (bouton sur `cv.html`). C'est le CV Canva de Janis dont le téléphone et l'adresse ont été **réellement effacés** : texte, icônes, et aussi les copies cachées dans la couche d'accessibilité du PDF (champs `/E` des éléments de structure). La photo y est conservée : Janis a demandé d'effacer seulement le téléphone et l'adresse (à retirer aussi s'il le demande). Si Janis fournit un nouveau CV, refaire cet effacement avant de le publier, puis vérifier qu'il ne reste aucune trace (texte extrait **et** objets internes du PDF).
- Contacts publiés : email `janis.creach@gmail.com` et GitHub `https://github.com/Janis-Creach`.
- LinkedIn : lien **provisoire** (`https://www.linkedin.com/`, marqué « À FAIRE ») en attendant l'adresse du profil. Quand Janis la donne : la remplacer dans le pied de page des 8 pages, et remplacer « Lien à venir » dans les coordonnées de `cv.html`.

### Organisation du code
- CSS : `css/style.css` importe dans l'ordre `variables.css`, `base.css`, `header.css`, `footer.css`, `components.css`, `accueil.css`, `pages.css`.
- Couleurs dans `css/variables.css` avec `light-dark(clair, sombre)`. La barre de navigation a sa propre teinte, un peu différente du fond de page (`--couleur-fond-nav`, survol `--couleur-fond-nav-survol`, page en cours `--couleur-fond-nav-actif`, aussi pour le menu mobile). `--largeur-max: 100%` : le contenu prend toute la largeur (mettre `1200px` pour le recentrer).
- JS : `js/theme.js` (mode sombre automatique selon l'appareil + bouton, choix mémorisé dans `localStorage`, clé `portfolio-theme`), `js/menu.js` (menu mobile), `js/defilement.js` (bouton pause du bandeau, chargé seulement sur l'accueil), `js/recherche.js` (barre de recherche de la page Définition, chargé seulement sur cette page ; masque les éléments avec la classe `.est-masque`).
- Design inspiré de `DESIGN.md` : bordures de 1 px visibles, motif de pixels (`assets/motif-pixels.svg`), logo pixel « JC » (`assets/logo.svg`). Polices Google Fonts : Space Grotesk, Inter et Space Mono.
- Piège connu : la remise à zéro `ul[class], ol[class] { padding: 0 }` annule le `padding` posé par une classe sur une liste. Utiliser une marge à la place.
- Typographie française dans le texte visible : `&nbsp;` avant « : », « ; », « ? », « ! » et à l'intérieur des guillemets « ».
- Accessibilité à conserver : lien d'évitement `.lien-evitement`, texte réservé aux lecteurs d'écran en `.visuellement-cache`, `aria-hidden="true"` sur le décoratif, `tabindex="0"` sur les `<pre>` qui défilent, respect de `prefers-reduced-motion`.
- **Version des fichiers CSS et JS** : les liens portent un numéro `?v=AAAAMMJJ` (ex. `css/style.css?v=20261017`, `js/theme.js?v=20261017`, et les `@import` de `css/style.css`). GitHub Pages laisse les navigateurs garder les fichiers en cache environ 10 minutes : sans changement de version, un visiteur peut voir le nouveau HTML avec l'ancien CSS (page cassée). **Après chaque modification d'un fichier CSS ou JS, remplacer le numéro partout** (les 8 pages HTML et `css/style.css`) par la date du jour, suivie d'une lettre (`b`, `c`…) s'il y a déjà eu une mise à jour ce jour-là. Version en place : `20261017f`. Si Janis voit une page « cassée » (bloc sans style, éléments collés) juste après une mise en ligne, penser d'abord au cache : recharger la page, et vérifier que la version a bien été changée.

### Publication (GitHub Pages)
- Publié depuis `main`, dossier racine : https://janis-creach.github.io/Portefolio/
- `_config.yml` empêche Jekyll de publier `CLAUDE.md` et `DESIGN.md` et désactive le thème par défaut : **ne pas le supprimer**.
- `google89cfc57ed8b91046.html` sert à la vérification Google Search Console : **le laisser à la racine**.
- Le site reste volontairement dans le sous-dossier `/Portefolio/`. Google n'affiche donc ni le logo ni le nom du site dans ses résultats (il faudrait un dépôt `Janis-Creach.github.io` ou un nom de domaine) : choix accepté par Janis.
- Le CV PDF de Janis contient un lien vers `https://janis-creach.github.io/Portefolio/index.html` : ne pas renommer le dépôt, ne pas déplacer `index.html` et ne pas changer l'adresse sans prévenir Janis. « Portefolio » est la graphie de Janis pour le dépôt et l'adresse ; le texte du site écrit « portfolio ».
- Chaque changement : commit en français sur `beta` (titre court, puis une puce par fichier), avec la mise à jour de cette mémoire si besoin, puis push vers `origin/beta`.
- Mise sur `main` (**seulement quand Janis le demande**) : `git push origin beta:main` si c'est une avance rapide. Si `main` contient des commits de fusion de pull requests absents de `beta`, intégrer d'abord `origin/main` dans `beta`.
- Hébergeur pour les mentions légales : GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis. GitHub ne publie pas de numéro de téléphone.
- `mentions-legales.html` décrit les données traitées (aucun cookie, thème dans `localStorage`, journaux IP de GitHub, polices Google Fonts). **Si on ajoute un outil tiers** (statistiques, formulaire, vidéo…) **ou si on change les polices** (par ex. auto-hébergées dans `assets/`), mettre à jour la section « Données personnelles ».

### Avant de dire que c'est terminé
- Vérifier les 8 pages en clair et en sombre, de 320 px à 1920 px de large : aucun débordement horizontal, aucune erreur dans la console.
- Vérifier qu'il n'y a aucun CSS ni JS dans le HTML, que les chemins sont relatifs et que toutes les classes utilisées existent dans le CSS.
- Pour tester : servir le dossier en local et ouvrir les pages dans un navigateur (Playwright/Chromium dans l'environnement cloud, voir ci-dessous). Montrer des captures à Janis avant de lui proposer la mise sur `main` : Janis valide sur `beta`, puis demande « pousse dans le main ».
- Particularités de l'environnement cloud :
  - Servir avec `python3 -m http.server 8765 --bind 127.0.0.1`.
  - Lancer les scripts Playwright avec `NODE_PATH=$(npm root -g) PLAYWRIGHT_DISABLE_FORCED_CHROMIUM_PROXIED_LOOPBACK=1 node script.js` et `chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } })`.
  - Arrêter le serveur dans une commande à part, avec `P="http.server"; pkill -f "[${P:0:1}]${P:1} 8765"` : un `pkill -f "http.server 8765"` écrit en clair tue aussi le shell qui contient ce texte.
  - Le site publié (`janis-creach.github.io`) n'est pas joignable (curl refusé par le proxy, WebFetch en échec DNS), pas plus que la plupart des sites officiels utiles aux vérifications ; WebSearch fonctionne. Après une mise sur `main`, vérifier le déploiement « pages build and deployment » dans GitHub Actions, puis demander à Janis de contrôler la page en ligne.
