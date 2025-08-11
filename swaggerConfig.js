import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bibliothèque API',
      version: '1.0.0',
      description:
        'Une API REST simple pour gérer une collection de livres, documentée avec Swagger.',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Adaptez le port si nécessaire
      },
    ],
  },
  apis: ['./routes/*.js'], // Fichiers à scanner pour les commentaires Swagger
};

export const swaggerSpecs = swaggerJSDoc(options);