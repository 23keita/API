# Bibliothèque API en ligne

Bienvenue sur l'API de la bibliothèque en ligne. Cette API permet de gérer une collection de livres.

## Endpoints

*   **GET /api/livres**: Récupère une liste paginée de tous les livres. Supporte les paramètres `page` et `limit` pour la pagination.
*   **GET /api/livres/:id**: Récupère un livre spécifique par son ID.
*   **POST /api/livres**: Ajoute un nouveau livre à la bibliothèque. Nécessite un corps de requête JSON avec les champs `titre` (obligatoire), `auteur` (obligatoire), et `resume` (optionnel).
*   **PUT /api/livres/:id**: Met à jour un livre existant par son ID.
*   **DELETE /api/livres/:id**: Supprime un livre par son ID.
*   **GET /api-docs**: Displays the Swagger UI for easy API interaction and documentation viewing.

## Prérequis

*   Node.js
*   npm
*   MongoDB

## Technologies utilisées

*   **Node.js**: Environnement d'exécution JavaScript côté serveur.
*   **Express**: Framework web pour Node.js.
*   **Mongoose**: Librairie de modélisation d'objets MongoDB pour Node.js.
*   **Swagger**: Outil pour la documentation et l'exploration des API RESTful.

## Installation

1.  Cloner le dépôt

    ```bash
    git clone <repository-url>
    ```

2.  Installer les dépendances avec `npm install`

    ```bash
    npm install
    ```

## Configuration

1.  Créer un fichier `.env` à la racine du projet en vous basant sur l'exemple `.env.example`.
2.  Remplir les variables d'environnement avec vos propres valeurs.

## Démarrage du serveur
```bash
node server.js
```