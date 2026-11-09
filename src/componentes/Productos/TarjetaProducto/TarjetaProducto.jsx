import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TarjetaProducto.module.css"
import { useCart } from "../../../context/CartContext";

function TarjetaProducto({id, imagen, nombre, precio, stock}) {

	const [cantidad, setCantidad ] = useState(0);

	const {addToCart} = useCart();

	const incrementar = () => {
		if (cantidad < stock)
			setCantidad(cantidad + 1)
	}

	const decrementar = () => {
		if (cantidad > 0)
			setCantidad(cantidad - 1)
	}

	/*
	function AgregarCarrito() {
		if (cantidad > 0)
    	alert(`Agregaste ${cantidad} unidades de ${nombre}`)
	}
		*/
	
	const handleAddToCart = () => {
		addToCart ({id, imagen, nombre, precio, stock}, cantidad)
		alert(`Agregaste ${cantidad} unidades de ${nombre}`)
	}	

	return (
		<article className={styles.card} >
      <img className={styles.image}  src={imagen} alt={nombre} />
    	<h3 className={styles.name} >{nombre}</h3>
			<p className={styles.price}>${precio}</p>
			<p className={styles.stock}>Stock: {stock}</p>
			<div className={styles.cantidad}>
				<button onClick={decrementar}>-</button>
				<p>{cantidad}</p>
				<button onClick={incrementar}>+</button>
			</div>
			<Link to={`/productos/${id}`}>Ver Detalle</Link>
      <button className={styles.button} onClick={handleAddToCart}>Agregar al Carrito</button>
		</article>
	);
}

export default TarjetaProducto;