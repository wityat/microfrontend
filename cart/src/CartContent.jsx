import React, { useState, useEffect } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";
import Login from "./Login";
import MiniCart from "./MiniCart";

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        <Login/>
        <MiniCart/>
        </div>
    </>
  );
}
