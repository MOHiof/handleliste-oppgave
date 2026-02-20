// src/App.jsx
// MM: Hovedkomponenten med all state for handlelista.

import React, { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm.jsx";
import ShoppingList from "./components/ShoppingList.jsx";

function App() {
  // MM: Startdata minst to varer, en forhåndsmerket som kjøpt.
  const [items, setItems] = useState([
    { id: 1, name: "Epler", quantity: 4, purchased: false },
    { id: 2, name: "Juice", quantity: 1, purchased: true },
  ]);

  // MM: Legger til ny vare øverst i lista.
  // Kilde: React, state, mønster med ny array:
  // https://react.dev/learn/managing-state
  function handleAddItem(name, quantity) {
    const newItem = {
      id: Date.now(), // enkel unik id basert på tidspunkt
      name,
      quantity,
      purchased: false,
    };

    setItems((oldItems) => [newItem, ...oldItems]);
  }

  // MM: Snur purchased kjøpt, ikke kjøpt for riktig vare.
  // Kilde: Oppdatere elementer i en liste med map():
  // https://react.dev/learn/updating-arrays-in-state
  function handleTogglePurchased(id) {
    setItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  }

  // MM: Oppdaterer antall, men hindrer 0 og negative tall.
  // Kilde: Number() og validering:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  function handleChangeQuantity(id, newQuantity) {
    const safeQuantity = newQuantity < 1 ? 1 : newQuantity;

    setItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id ? { ...item, quantity: safeQuantity } : item
      )
    );
  }

  // MM: Enkel semantisk layout (main/header/section) i stedet for <div>.
  // Kilde: Semantiske HTML-elementer:
  // https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html
  return (
    <main>
      <header>
        <h1>Handleliste – MM</h1>
        <p>En enkel React-handleliste.</p>
      </header>

      <section>
        <h2>Legg til ny vare</h2>
        <AddForm onAddItem={handleAddItem} />
      </section>

      <section>
        <h2>Varer i lista</h2>
        <ShoppingList
          items={items}
          onTogglePurchased={handleTogglePurchased}
          onChangeQuantity={handleChangeQuantity}
        />
      </section>
    </main>
  );
}

export default App;
