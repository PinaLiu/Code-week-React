import mongoose from "mongoose";

const Schema = mongoose.Schema;
const orderSchema = new Schema({
  nome: String,
  pizza: String,
  base: String,
  impasto: String,
  ingredienti: [String],
});

const Order = mongoose.model("Order", orderSchema);

// Connessione a MongoDB
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, pizza, base, impasto, ingredienti } = req.body;

    // Connessione a MongoDB
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Crea un nuovo ordine utilizzando il modello Order
    const newOrder = new Order({ nome, pizza, base, impasto, ingredienti });

    // Salva l'ordine nel database
    newOrder
      .save()
      .then(() => {
        console.log("Ordine salvato nel database:", newOrder);
        res.status(200).json({ message: "Ordine ricevuto con successo!" });
      })
      .catch((error) => {
        console.error("Errore durante il salvataggio dell'ordine:", error);
        res.status(500).json({
          error:
            "Si è verificato un errore durante il salvataggio dell'ordine.",
        });
      });
  } else {
    res.status(405).end();
  }
}
