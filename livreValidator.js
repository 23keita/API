import { body } from 'express-validator';

export const validateLivre = [
  // Le titre est requis, ne doit pas être vide et doit faire au moins 2 caractères
  body('titre', 'Le titre est requis et doit contenir au moins 2 caractères')
    .trim()
    .isString()
    .notEmpty()
    .isLength({ min: 2 }),

  // L'auteur est requis et ne doit pas être vide
  body('auteur', "Le nom de l'auteur est requis")
    .trim()
    .isString()
    .notEmpty(),

  // Le résumé est optionnel, mais s'il est fourni, il doit être une chaîne de caractères
  body('resume')
    .optional()
    .trim()
    .isString()
    .withMessage('Le résumé doit être une chaîne de caractères'),
];