import React, { useState } from "react";
import axios from "axios";

import styles from "../carrello/carrello.module.scss";

const CardCarrello = ({ title, items, onOrder, onClear }) => {
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState(""); // Stato per memorizzare il nome inserito

  const handleOrder = async () => {
    try {
      const response = await axios.post("/api/order", {
        nome: nome,
        pizza: items[0].pizza,
        base: items[0].base ? items[0].base.nome : null,
        impasto: items[0].impasto ? items[0].impasto.nome : null,
        ingredienti: items[0].ingredienti
          ? items[0].ingredienti.map((i) => i.nome)
          : null,
      });

      // Gestisci la risposta del server
      console.log(response.data);
      window.alert("Ordine inviato con successo!");
    } catch (error) {
      // Gestisci gli errori
      if (error.response) {
        // Il server ha risposto con uno stato di errore
        console.error("Dettagli dell'errore:", error.response.data);
        console.error("Stato dell'errore:", error.response.status);
        console.error("Headers dell'errore:", error.response.headers);
      } else if (error.request) {
        // La richiesta è stata effettuata ma non c'è stata risposta
        console.error("Richiesta:", error.request);
      } else {
        // Qualcosa è andato storto nella configurazione della richiesta
        console.error("Errore:", error.message);
      }
      console.error("Configurazione completa dell'errore:", error.config);
      window.alert("Si è verificato un errore durante l'invio dell'ordine.");
    }
  };

  const handleClear = () => {
    // Chiama la funzione onClear passata come prop
    onClear(); // Aggiungi questa riga

    // Mostra un messaggio di conferma
    window.alert("Carrello svuotato con successo!");
    console.log("handleClear executed");
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <h2>{title}</h2>
        {items &&
          items.map((item, index) => (
            <div key={index}>
              {/* Verifica se item.base è definito prima di accedere alla proprietà nome */}
              {item.base && <p>Base: {item.base.nome}</p>}
              {/* Verifica se item.impasto è definito prima di accedere alla proprietà nome */}
              {item.impasto && <p>Impasto: {item.impasto.nome}</p>}
              {/* item.ingredienti è un array quindi lo devo visualizzare */}
              {item.ingredienti && (
                <p>
                  Ingredienti: {item.ingredienti.map((i) => i.nome).join(", ")}
                </p>
              )}

              {/* Se base, impasto e ingredienti non sono presenti, mostra il nome della pizza */}
              {!item.base && !item.impasto && !item.ingredienti && (
                <p>Pizza: {item.pizza}</p>
              )}
            </div>
          ))}
        <div className={styles.option}>
          <button
            className={styles.addToCart}
            onClick={() => setShowModal(true)}
          >
            Ordina
          </button>
          <button className={styles.addToCart} onClick={handleClear}>
            Svuota Carrello
          </button>
        </div>
      </div>
      {/* Finestra modale per l'inserimento del nome */}
      {showModal && (
        <div className={styles.options}>
          <h3>Inserisci il tuo nome:</h3>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />{" "}
          <div className={styles.option}>
            <button className={styles.addToCart} onClick={handleOrder}>
              Conferma
            </button>
            <button
              className={styles.addToCart}
              onClick={() => setShowModal(false)}
            >
              Annulla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCarrello;
