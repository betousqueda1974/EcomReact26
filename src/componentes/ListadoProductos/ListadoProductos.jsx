import styles from "./ListadoProductos.module.css";

function ListadoProductos({ productos }) {

    if (productos.length === 0) {
        return <p>No hay productos cargados.</p>;
    }

    return (
		  <ul className={styles.lista}>
		    {productos.map((producto) => (
		      <li key={producto.id} className={styles.item}>
		        <span>{producto.nombre}</span>
		        <span>{producto.detalles}</span>
		        <span>${producto.precio}</span>
		        <span>Stock: {producto.stock}</span>
		        <span>Destacado: {producto.destacado ? "Sí" : "No"}</span>
		      </li>
		    ))}
		  </ul>
		);
}

export default ListadoProductos;