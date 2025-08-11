import express from 'express';
import { getLivres, addLivre, getLivreById } from '../controllers/livresController.js';
import { validateLivre } from '../livreValidator.js';

const router = express.Router();

/**
 * @swagger
 * /api/livres:
 *   get:
 *     summary: Récupère une liste paginée de livres
 *     tags: [Livres]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Le numéro de la page à récupérer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Le nombre de livres par page
 *     responses:
 *       200:
 *         description: Succès - Retourne la liste des livres avec les détails de pagination.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                   description: Le numéro de la page actuelle.
 *                 limit:
 *                   type: integer
 *                   description: Le nombre maximum de livres par page.
 *                 totalLivres:
 *                   type: integer
 *                   description: Le nombre total de livres dans la base de données.
 *                 livres:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Livre'
 */
router.get('/', getLivres);

// 📌 Ajouter un livre
// Le middleware `validateLivre` s'exécute avant `addLivre`
router.post('/', validateLivre, addLivre);

export default router;
