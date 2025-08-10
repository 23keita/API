import connectDB from './config/db.js';
import Livre from './models/Livre.js';

const livres = [
  { titre: "L'Alchimiste", auteur: "Paulo Coelho", resume: "Un voyage spirituel sur la réalisation de ses rêves." },
  { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", resume: "Un conte philosophique intemporel." },
  { titre: "1984", auteur: "George Orwell", resume: "Une dystopie sur la surveillance et le totalitarisme." },
  { titre: "Les Misérables", auteur: "Victor Hugo", resume: "Une fresque sociale et humaniste du XIXe siècle." },
  { titre: "L'Étranger", auteur: "Albert Camus", resume: "Une réflexion sur l'absurde et la condition humaine." },
  { titre: "Harry Potter à l'école des sorciers", auteur: "J.K. Rowling", resume: "Les débuts d’un jeune sorcier à Poudlard." },
  { titre: "Da Vinci Code", auteur: "Dan Brown", resume: "Un thriller ésotérique plein d’énigmes." },
  { titre: "Cinquante nuances de Grey", auteur: "E. L. James", resume: "Une romance controversée et sensuelle." },
  { titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", resume: "Une épopée fantastique au cœur de la Terre du Milieu." },
  { titre: "L’Odyssée", auteur: "Homère", resume: "Les aventures d’Ulysse sur le chemin du retour à Ithaque." }
];

const seedLivres = async () => {
  try {
    // Il est crucial d'attendre la connexion avant de manipuler la base de données
    await connectDB();

    await Livre.deleteMany(); // Supprime les anciens livres
    await Livre.insertMany(livres);
    console.log("✅ 10 livres ajoutés avec succès !");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur lors de l'insertion :", error);
    process.exit(1);
  }
};

seedLivres();
