import { useState } from "react";
import styles from "./TarjetaProducto.module.css"

function TarjetaProducto({imagen, nombre, precio, stock}) {

	const [cantidad, setCantidad ] = useState(0);

	const incrementar = () => {
		if (cantidad < stock)
			setCantidad(cantidad + 1)
	}

	const decrementar = () => {
		if (cantidad > 0)
			setCantidad(cantidad - 1)
	}

	function AgregarCarrito() {
		if (cantidad > 0)
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
      <button className={styles.button} onClick={AgregarCarrito}>Agregar al Carrito</button>
		</article>
	);
}

export default TarjetaProducto;