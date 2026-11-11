// src/componentes/Cart/Cart.jsx
import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css"

const Cart = () => {
  
  const {cart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0){
    return (
      <div className={styles.emptyContainer}>
        <h1 className={styles.emptyTitle}>El Carrito está vacio</h1>
        <p className={styles.emptyText}>Agregue productos para su compra</p>
      </div>
    );  
  }

  console.log(cart)
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carrito de Compras</h1>
      {cart.map(item => (
        <div key={item.id} className={styles.cartItem}>
          <img className={styles.image} src={item.imagen} alt={item.nombre}/>
          
          <div className={styles.itemInfo}>
            <h4 className={styles.productName}>{item.nombre}</h4>
            <p className={styles.info}>Cantidad: {item.cantidad}</p>
            <p className={styles.info}>Precio unitario: ${item.precio}</p>
            <p className={styles.subtotal}>Subtotal: ${item.precio * item.cantidad}</p>
          </div>
        </div>
      ))}
      {/* <hr /> */}
      <div className={styles.summary}>
        <h3 className={styles.total}>Total a pagar: ${getCartTotal()}</h3>
        <button className={styles.button} onClick={clearCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
};
export default Cart;
