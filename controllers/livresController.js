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
    // Extract page number and page limit from the request's query parameters.
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    // Get the total number of books in the database.
    const totalLivres = await Livre.countDocuments();

    // Fetch the books for the current page.
    const livres = await Livre.find().skip(skip).limit(limit);

    res.json({
      page,
      limit,
      totalLivres,
      livres,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur du serveur');
  }
};

// @desc    Récupérer un livre par son ID
// @route   GET /api/livres/:id
// @access  Public
export const getLivreById = async (req, res) => {
  try {
    const livre = await Livre.findById(req.params.id);

    if (!livre) {
      // Conforme aux bonnes pratiques REST, renvoyer 404 si la ressource n'est pas trouvée.
      return res.status(404).json({ msg: 'Livre non trouvé' });
    }

    res.json(livre);
  } catch (err) {
    console.error(err.message);
    // Gère le cas où l'ID fourni n'est pas un ObjectId valide pour Mongoose.
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Livre non trouvé (ID invalide)' });
    }
    res.status(500).send('Erreur du serveur');
  }
};
