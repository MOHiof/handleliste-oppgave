// src/components/ShoppingList.jsx
// MM: Viser hele handlelista som en <ul> med ShoppingItem-komponenter.

import React from "react";
import ShoppingItem from "./ShoppingItem.jsx";

function ShoppingList({ items, onTogglePurchased, onChangeQuantity }) {
  if (items.length === 0) {
    return <p>Ingen varer enda. Legg til noe over </p>;
  }

  // MM: Bruker map() til å rendre en komponent per vare.
  // Kilde: Rendering lists i React:
  // https://react.dev/learn/rendering-lists
  return (
    <ul>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onTogglePurchased={onTogglePurchased}
          onChangeQuantity={onChangeQuantity}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;

