export default function handler(req, res) {
  if (req.method === "POST") {
    // Gestione della richiesta POST
    // Esempio: Salvataggio dell'ordine nel database
    const { nome, pizza, base, impasto, ingredienti } = req.body;
    // Implementa qui la logica per salvare l'ordine nel database

    // Esempio di logica di salvataggio (da adattare al tuo caso specifico)
    const newOrder = {
      nome,
      pizza,
      base,
      impasto,
      ingredienti,
    };
    // Salva l'ordine nel database
    newOrder
      .save()
      .then(() => {
        res.status(200).json({ message: "Ordine ricevuto con successo!" });
      })
      .catch((error) => {
        res
          .status(500)
          .json({
            error:
              "Si è verificato un errore durante il salvataggio dell'ordine.",
          });
      });
  } else {
    res.status(405).end();
  }
}
