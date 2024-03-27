import mongoose from "mongoose";
const cors = require("cors");

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

    // Connessione a MongoDB
    if (mongoose.connections[0].readyState) {import mongoose from "mongoose";
    import Cors from "micro-cors"; // Importa il middleware CORS
    
    const cors = Cors(); // Usa il middleware CORS
    
    // Definisci lo schema del modello per gli ordini
    const Schema = mongoose.Schema;
    const orderSchema = new Schema({
      nome: String,
      pizza: String,
      base: String,
      impasto: String,
      ingredienti: [String],
    });
    const Order = mongoose.model("Order", orderSchema);
    
    export default cors(async function handler(req, res) {
      if (req.method === "POST") {
        const { nome, pizza, base, impasto, ingredienti } = req.body;
    
        // Connessione a MongoDB
        if (mongoose.connections[0].readyState) {
          // Usa la connessione al database esistente
          console.log("Usa la connessione al database esistente");
        } else {
          // Crea una nuova connessione al database
          await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("Nuova connessione al database creata");
        }
    
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
    });
    
      // Usa la connessione al database esistente
      console.log("Usa la connessione al database esistente");
    } else {
      // Crea una nuova connessione al database
      await mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Nuova connessione al database creata");
    }

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
