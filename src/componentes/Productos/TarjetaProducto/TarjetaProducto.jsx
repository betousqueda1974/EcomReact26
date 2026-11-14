import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TarjetaProducto.module.css"
import { useCart } from "../../../context/CartContext";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

function TarjetaProducto({id, imagen, nombre, precio, stock, destacado}) {

	const [cantidad, setCantidad ] = useState(0);
	const [destacados, setDestacados] = useState(destacado);
	const {addToCart} = useCart();

	const incrementar = () => {
		if (cantidad < stock)
			setCantidad(cantidad + 1)
	}

	const decrementar = () => {
		if (cantidad > 0)
			setCantidad(cantidad - 1)
	}
	
	const handleAddToCart = () => {
		addToCart ({id, imagen, nombre, precio, stock}, cantidad)
		if (cantidad > 0) {
			toast.success(`${cantidad} unidad${cantidad > 1 ? "es" : ""} agregada${cantidad > 1 ? "s" : ""}`);
		}

	}	

	return (
		<article className={styles.card} >
			<div className={styles.imageContainer}>
				<img className={styles.image} src={imagen} alt={nombre} />
				<FaStar className={`${styles.starButton} ${destacados ? styles.activa : "" }`}
					onClick={() => setDestacados(!destacados)}
				/>
			</div>
    	<h3 className={styles.name} title={nombre}>{nombre}</h3>
			<p className={styles.price}>${precio}</p>
			<p className={styles.stock}>Stock: {stock}</p>
			<Link className={styles.linkDetalle} to={`/productos/${id}`}>Ver Detalle</Link>
			<div className={styles.cantidad}>
				<p>Cantidad: </p>
				<button onClick={decrementar}>-</button>
				<p>{cantidad}</p>
				<button onClick={incrementar}>+</button>
			</div>
      <button className={styles.button} onClick={handleAddToCart}>Agregar</button>
		</article>
	);

	
}

export default TarjetaProducto;