import mongoose from "mongoose";

// Definisci lo schema del modello per gli ordini
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  nome: String,
  pizza: String, //riferito alle nostre pizze
  //crea la tua pizza
  base: String,
  impasto: String,
  ingredienti: [String],
});
const Order = mongoose.model("Order", orderSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, pizza, base, impasto, ingredienti } = req.body;
    const newOrder = new Order({
      nome,
      pizza,
      base,
      impasto,
      ingredienti,
    });

    // Connessione a MongoDB
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Salva l'ordine nel database
    newOrder
      .save()
      .then(() => {
        res.status(200).json({ message: "Ordine ricevuto con successo!" });
      })
      .catch((error) => {
        res.status(500).json({
          error:
            "Si è verificato un errore durante il salvataggio dell'ordine.",
        });
      });
  } else {
    res.status(405).end();
  }
}
