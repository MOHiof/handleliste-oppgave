// src/components/AddForm.jsx
// MM: Skjemaet for å legge til en ny vare i handlelista.

import React, { useState } from "react";

function AddForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  // MM: Håndterer innsending av skjema og enkel validering.
  // Kilde: Skjemaer og controlled components i React:
  // https://react.dev/learn/sharing-state-between-components
  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName && !quantity) {
      setError("Skriv inn både varenavn og antall.");
      return;
    }

    if (!trimmedName) {
      setError("Varenavn mangler.");
      return;
    }

    if (!quantity) {
      setError("Antall mangler.");
      return;
    }

    const parsedQuantity = Number(quantity);

    // Kilde: Number() og NaN:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    if (Number.isNaN(parsedQuantity) || parsedQuantity < 1) {
      setError("Antall må være et tall større enn 0.");
      return;
    }

    onAddItem(trimmedName, parsedQuantity);

    setName("");
    setQuantity("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Ny vare (MM)</legend>

        <label>
          Varenavn
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Feks Pasta"
          />
        </label>

        <label>
          Antall
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="1"
          />
        </label>

        <button type="submit">Legg til vare</button>

        {error && <p role="alert">{error}</p>}
      </fieldset>
    </form>
  );
}

export default AddForm;
