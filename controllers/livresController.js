import { validationResult } from 'express-validator';
import Livre from '../models/Livre.js';

// @desc    Ajouter un livre
// @route   POST /api/livres
// @access  Public
export const addLivre = async (req, res) => {
  // 1. Vérifier les résultats de la validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // S'il y a des erreurs, renvoyer une réponse 400 avec les erreurs
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { titre, auteur, resume } = req.body;

    const nouveauLivre = new Livre({
      titre,
      auteur,
      resume,
    });

    const livre = await nouveauLivre.save();
    res.status(201).json(livre);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur du serveur');
  }
};

// @desc    Récupérer tous les livres avec pagination
// @route   GET /api/livres
// @access  Public
export const getLivres = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const livres = await Livre.find().skip(skip).limit(limit).sort({ createdAt: -1 });
    res.json(livres);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur du serveur');
  }
};