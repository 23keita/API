import express from 'express';
import { getLivres, addLivre } from '../controllers/livresController.js';
import { validateLivre } from '../livreValidator.js';

const router = express.Router();

// 📌 Récupérer tous les livres
router.get('/', getLivres);

// 📌 Ajouter un livre
// Le middleware `validateLivre` s'exécute avant `addLivre`
router.post('/', validateLivre, addLivre);

export default router;
