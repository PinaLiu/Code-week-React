const express = require("express");
const mongoose = require("mongoose");
const Order = require("../../../schema");
const cors = require("cors");

const app = express();
app.use(cors());

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(process.env.DATABASE_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { nome, pizza, base, impasto, ingredienti } = req.body;
    const newOrder = new Order({
      nome,
      pizza,
      base,
      impasto,
      ingredienti,
    });

    newOrder
      .save()
      .then(() =>
        res
          .status(200)
          .json({ message: "Ordine salvato con successo! file order.js" })
      )
      .catch((error) =>
        res.status(500).json({
          error: "Errore durante il salvataggio dell'ordine file oerde.js",
        })
      );
  } else {
    res.status(405).end();
  }
}
