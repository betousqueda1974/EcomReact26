import styles from "./TarjetaProducto.module.css"

function TarjetaProducto({imagen, nombre, precio, stock}) {

	return (
		<article className={styles.card} >
      <img className={styles.image}  src={imagen} alt={nombre} />
    	<h3 className={styles.name} >{nombre}</h3>
			<p className={styles.price}>${precio}</p>
			<p className={styles.stock}>Stock: {stock}</p>
      <button className={styles.button} >Ver Producto</button>
		</article>
	);
}

export default TarjetaProducto;