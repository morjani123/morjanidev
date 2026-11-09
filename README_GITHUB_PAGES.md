# Publier le portfolio sur GitHub Pages

1. Créez un compte sur https://github.com si nécessaire.
2. Créez un dépôt **public** nommé `omar-morjani-portfolio` (ou autre nom).
3. Cliquez sur **Add file > Upload files**, puis glissez **le contenu** du dossier du portfolio (index.html, style.css, script.js, assets/, etc.) à la racine du dépôt.
4. Cliquez sur **Commit changes**.
5. Ouvrez **Settings > Pages**. Dans **Build and deployment**, sélectionnez **Deploy from a branch**, branche **main**, dossier **/(root)**, puis **Save**.
6. Après le déploiement, votre site sera à `https://VOTRE-IDENTIFIANT.github.io/omar-morjani-portfolio/`.

## Domaine personnel (facultatif)
Pour utiliser `morjanidev.com`, configurez **Custom domain** dans Settings > Pages, puis les enregistrements DNS demandés par GitHub chez votre hébergeur de domaine. Activez **Enforce HTTPS** une fois le certificat prêt. Ne modifiez pas les DNS sans vérifier où pointe votre site actuel.

## Mise à jour
Modifiez les fichiers puis faites un nouveau commit; GitHub Pages republie automatiquement.

## Important
- Le dossier `assets/` doit être publié avec le site : photo, CV, vidéo et visuels y sont stockés.
- Les images des cinq références sont des **visuels graphiques personnalisés**, pas des captures d'écran ni les logos officiels des organismes.
- La photo et le CV seront accessibles publiquement si le dépôt est public. Vérifiez que cela vous convient.
- GitHub Pages est un hébergement statique : HTML, CSS et JavaScript fonctionnent; un backend Python/SQLite ne fonctionnera pas directement. La vidéo est une démonstration, pas l'application exécutable.
