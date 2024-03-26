import React, { useState } from "react";
import axios from "axios";

import styles from "../carrello/carrello.module.scss";

const CardCarrello = ({ title, items, onOrder, onClear }) => {
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState(""); // Stato per memorizzare il nome inserito

  const handleOrder = () => {
    // Chiamato quando l'utente conferma l'ordine con il nome inserito
    onOrder(nome);
    setShowModal(false); // Chiudi la finestra modale dopo l'ordine
    setNome(""); // Reimposta lo stato del nome

    //richiesta post al server express per salvare l'ordine
    // Utilizza axios per inviare una richiesta POST al server
    // Passa i dati dell'ordine al server
    // Aggiungi il nome dell'utente all'ordine
    // Aggiungi il nome della pizza, la base, l'impasto e gli ingredienti all'ordine
    // Mostra un messaggio di conferma se la richiesta ha successo
    // Mostra un messaggio di errore se la richiesta fallisce

    axios
      .post("http://localhost:3001/api/order", {
        nome: nome,
        pizza: items[0].pizza,
        base: items[0].base ? items[0].base.nome : null,
        impasto: items[0].impasto ? items[0].impasto.nome : null,
        ingredienti: items[0].ingredienti
          ? items[0].ingredienti.map((i) => i.nome)
          : null,
      })
      // Gestisci la risposta del server
      //
      .then((response) => {
        console.log(response.data);
        window.alert("Ordine inviato con successo!");
      })
      .catch((error) => {
        console.error("Errore durante la richiesta Axios:", error);
        console.error("Errore durante l'invio dell'ordine:", error);
        window.alert("Si è verificato un errore durante l'invio dell'ordine.");
      });
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
