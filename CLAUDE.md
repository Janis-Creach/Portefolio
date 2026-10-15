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
```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── (images, polices, etc.)
```
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

## Façon de travailler
- Fais des modifications ciblées et ne réécris pas des fichiers entiers sans raison.
- Explique brièvement ce que tu as changé et dans quel fichier.
- En cas de doute sur une demande, pose une question avant de tout refaire.
