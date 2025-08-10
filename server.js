import express from 'express';
import connectDB from './config/db.js';
import livresRoutes from './routes/livres.js';

const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour parser le JSON
app.use(express.json());

// Routes
// Le README indique que les routes sont sur /api/livres
app.use('/api/livres', livresRoutes);

// Route d'accueil
app.get('/', (req, res) => {
  res.send('📚 API Bibliothèque en ligne');
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server is running on http://localhost:${PORT}`));
