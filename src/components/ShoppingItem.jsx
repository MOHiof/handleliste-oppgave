// src/components/ShoppingItem.jsx
// MM: En enkelt vare i lista navn, kjøpt, checkbox og antall).

import React from "react";

function ShoppingItem({ item, onTogglePurchased, onChangeQuantity }) {
  function handleCheckboxChange() {
    onTogglePurchased(item.id);
  }

  // MM: Håndterer endring av antall direkte i lista og sørger for at det ikke blir < 1.
  // Kilde: Input håndtering i React:
  // https://react.dev/learn/responding-to-events
  function handleQuantityChange(event) {
    const value = Number(event.target.value);
    if (Number.isNaN(value)) return;

    const minValue = value < 1 ? 1 : value;
    onChangeQuantity(item.id, minValue);
  }

  return (
    <li>
      <article>
        <header>
          <h3
            style={{
              textDecoration: item.purchased ? "line-through" : "none",
            }}
          >
            {item.name}
          </h3>
        </header>

        <section>
          <label>
            <input
              type="checkbox"
              checked={item.purchased}
              onChange={handleCheckboxChange}
            />
            Kjøpt
          </label>

          <label>
            Antall
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
            />
          </label>

          <small>Vare-ID: {item.id}</small>
        </section>
      </article>
    </li>
  );
}

export default ShoppingItem;

