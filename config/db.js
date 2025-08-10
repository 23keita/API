import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ Connexion à MongoDB réussie: ${conn.connection.host}`);

    // --- AMÉLIORATIONS ---

    // 1. Gérer les erreurs APRÈS la connexion initiale
    // Cet écouteur attrapera les erreurs qui se produisent après une connexion réussie.
    mongoose.connection.on('error', err => {
      console.error(`❌ Erreur MongoDB après connexion: ${err.message}`);
    });

    // 2. Gérer la déconnexion et informer
    mongoose.connection.on('disconnected', () => {
      console.log('🔌 MongoDB est déconnecté.');
    });

  } catch (err) {
    console.error(`❌ Erreur de connexion initiale à MongoDB: ${err.message}`);
    process.exit(1); // Arrête l'application en cas d'échec de connexion
  }
};

export default connectDB;