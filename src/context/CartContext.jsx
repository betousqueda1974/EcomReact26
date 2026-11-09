import { createContext, useContext, useState } from "react";

//Contexto
export const CartContext = createContext();

//Consumer
//Creo un hook personalizado o custom hood, llamado useCart. Siempre debe empezar con use
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      'useCart debe ser usado dentro de un Provider'
    )
  }
  return context;

}

//Provider
export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (producto, cantidad) => {
    //Verifico si estoy agregando al carrito un producto que ya tengo
    const itemInCart = cart.find(item => item.id === producto.id);
    
    //Queda pendiente validar si aún tiene stock. Y también modificar porque cuando encuentra un Item, simplemente se le debe agregar la cantidad nueva

    if (itemInCart) {
      //Cuando encuentre el producto por id suma la cantidad, si no agrea el producto al carrito con su informaicón
      const updatedCart = cart.map(item => item.id === producto.id ?
        { ...item, cantidad: item.cantidad + cantidad } : item);
    
      setCart(updatedCart);
    } else {
      //para usar el useState, puedo usar una función. Pero la función sólo puede tener un parámetro
      setCart(prevCart => [...prevCart, { ...producto, cantidad }]);
    }
  };

  //Eliminar los productos del Carrito
  const clearCart = () => { setCart([]); };

  //Obtener la cantidad total de productos
  const getCartQuantity = () => { 
    return cart.reduce(
      (total, item) => total + item.cantidad, 0);
  };

  //Obtener el valor total de todo lo que hay en el carrito
  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.precio * item.cantidad, 0); };
  
  //Devuelve la cantidad de items agregados al carrito de un producto en particular
  const getCantidadActual = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.cantidad : 0;};

  return (
    <CartContext.Provider
      value={
        {
          cart
        , addToCart
        , clearCart
        , getCartQuantity
        , getCartTotal
        }
      }
    >
      {children}
    </CartContext.Provider>
  )

}
