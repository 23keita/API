import mongoose from 'mongoose';

const livreSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  auteur: { type: String, required: true },
  resume: { type: String }
}, { timestamps: true });

export default mongoose.model('Livre', livreSchema);
