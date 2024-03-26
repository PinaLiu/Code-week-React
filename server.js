//lo tolgo per vercel
// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Parser per i dati della richiesta
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const app = express();
const PORT = process.env.PORT || 3002;

// Connessione a MongoDB
mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connessione a MongoDB riuscita"))
  .catch((err) =>
    console.error("Errore durante la connessione a MongoDB:", err)
  );

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

// Rotte
app.post("/api/order", (req, res) => {
  const { nome, pizza, base, impasto, ingredienti } = req.body;

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
        error: "Si è verificato un errore durante il salvataggio dell'ordine.",
      });
    });
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
