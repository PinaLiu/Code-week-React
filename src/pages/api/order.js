import axios from "axios";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { nome, pizza, base, impasto, ingredienti } = req.body;
    const newOrder = {
      nome,
      pizza,
      base,
      impasto,
      ingredienti,
    };

    // Fai una chiamata al tuo server Express per salvare l'ordine nel database
    axios
      .post("https://code-week-react.vercel.app/api/order", newOrder)
      .then((response) => {
        // Gestisci la risposta dal tuo server Express
        res.status(200).json({ message: "Ordine ricevuto con successo!" });
      })
      .catch((error) => {
        // Gestisci l'errore
        res.status(500).json({
          error:
            "Si è verificato un errore durante il salvataggio dell'ordine.",
        });
      });
  } else {
    res.status(405).end();
  }
}
