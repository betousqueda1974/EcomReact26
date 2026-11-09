// src/componentes/Cart/Cart.jsx
import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  
  const {cart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0){
    return (
      <div>
        <h1>El Carrito está vacio</h1>
        <p>Agregue productos para su compra</p>
      </div>
    );  
  }

  console.log(cart);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.nombre}</h4>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio unitario: ${item.precio}</p>
          <p>Subtotal: ${item.precio * item.cantidad}</p>
        </div>
      ))}
      <hr />
      <h3>Total a pagar: ${getCartTotal()}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};
export default Cart;
