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
    res.status(200).json({ message: "Ordine ricevuto con successo!" });
  } else {
    res.status(405).end();
  }
}
