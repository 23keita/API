# Bibliotheque API
API REST minimale pour gérer une bibliothèque en ligne.

## Fonctionnalités
- Ajouter un livre (titre, auteur, résumé)
- Lister les livres avec pagination (page & limit)

## Installation locale
1. Copier `.env.example` en `.env` et modifier `MONGODB_URI`.
2. Installer les dépendances:
   ```
   npm install
   ```
3. Lancer en mode dev:
   ```
   npm run dev
   ```
4. Lancer en production:
   ```
   npm start
   ```

## Déploiement sur Render
1. Pousser le repo sur GitHub.
2. Créer un **Web Service** sur Render lié au repo.
3. Définir les variables d'environnement dans Render:
   - `MONGODB_URI` (MongoDB Atlas)
   - `PORT` (Render fournit automatiquement mais tu peux définir `10000`)
4. Build command: `npm install`
   Start command: `npm start`

## Endpoints
- `POST /api/livres` - Ajouter un livre (JSON: titre, auteur, resume)
- `GET /api/livres?page=1&limit=5` - Lister les livres avec pagination
