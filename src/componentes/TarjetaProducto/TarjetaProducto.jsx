import styles from "./TarjetaProducto.module.css"

function TarjetaProducto({imagen, nombre, precio}) {

	return (
		<article className={styles.card} >
      <img className={styles.image}  src={imagen} alt={nombre} />
    	<h3 className={styles.name} >{nombre}</h3>
			<p className={styles.price}>${precio}</p>
      <button className={styles.button} >Ver Producto</button>
		</article>
	);
}

export default TarjetaProducto;